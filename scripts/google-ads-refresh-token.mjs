#!/usr/bin/env node
/**
 * Genereert een Google Ads API refresh token via de OAuth 2.0 "installed app"-flow.
 *
 * Gebruik:
 *   npm run ads:token
 *   node scripts/google-ads-refresh-token.mjs [pad/naar/client_secret.json] [--no-open] [--no-env]
 *
 * - Zonder pad zoekt het script automatisch naar client_secret*.json in de projectroot.
 * - Start een tijdelijke server op localhost, opent de Google-toestemmingspagina,
 *   wisselt de code in voor tokens en schrijft GOOGLE_ADS_REFRESH_TOKEN naar .env.
 * - --no-open: alleen de URL printen, browser niet automatisch openen.
 * - --no-env:  token alleen printen, niet naar .env schrijven.
 *
 * Geen npm-dependencies nodig (Node 18+ met ingebouwde fetch).
 */

import http from 'node:http';
import { readFileSync, readdirSync, existsSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { exec } from 'node:child_process';
import { randomBytes } from 'node:crypto';

const SCOPE = 'https://www.googleapis.com/auth/adwords';
const ENV_KEY = 'GOOGLE_ADS_REFRESH_TOKEN';
const TIMEOUT_MS = 30 * 60 * 1000; // 30 minuten wachten op toestemming

const args = process.argv.slice(2);
const noOpen = args.includes('--no-open');
const noEnv = args.includes('--no-env');
const explicitPath = args.find((a) => !a.startsWith('--'));

const projectRoot = resolve(process.cwd());
const secretPath = explicitPath
  ? resolve(explicitPath)
  : (() => {
      const match = readdirSync(projectRoot).find(
        (f) => /^client_secret.*\.json$/i.test(f),
      );
      if (!match) {
        console.error('Geen client_secret*.json gevonden in', projectRoot);
        console.error('Geef het pad mee: node scripts/google-ads-refresh-token.mjs <pad>');
        process.exit(1);
      }
      return join(projectRoot, match);
    })();

const raw = JSON.parse(readFileSync(secretPath, 'utf8'));
const creds = raw.installed ?? raw.web;
if (!creds?.client_id || !creds?.client_secret) {
  console.error('Ongeldig client secret-bestand (geen client_id/client_secret):', secretPath);
  process.exit(1);
}

const state = randomBytes(16).toString('hex');

function page(title, body) {
  return `<!doctype html><html lang="nl"><head><meta charset="utf-8"><title>${title}</title>
<style>body{font-family:system-ui,sans-serif;max-width:40rem;margin:4rem auto;padding:0 1rem;line-height:1.5}code{background:#eee;padding:.1rem .3rem;border-radius:3px}</style>
</head><body><h1>${title}</h1>${body}</body></html>`;
}

function writeEnv(token) {
  const envPath = join(projectRoot, '.env');
  const line = `${ENV_KEY}=${token}`;
  if (!existsSync(envPath)) {
    writeFileSync(envPath, `# Google Ads\n${line}\n`);
    return `.env aangemaakt met ${ENV_KEY}`;
  }
  const current = readFileSync(envPath, 'utf8');
  const re = new RegExp(`^${ENV_KEY}=.*$`, 'm');
  let next;
  if (re.test(current)) {
    next = current.replace(re, line);
  } else if (/^# Google Ads\s*$/m.test(current)) {
    // Plaats onder de bestaande "# Google Ads"-sectie, na de laatste regel van die sectie.
    const lines = current.split(/\r?\n/);
    const idx = lines.findIndex((l) => /^# Google Ads\s*$/.test(l));
    let end = idx + 1;
    while (end < lines.length && lines[end].trim() !== '' && !lines[end].startsWith('#')) end++;
    lines.splice(end, 0, line);
    next = lines.join('\n');
  } else {
    next = current.replace(/\s*$/, '') + `\n\n# Google Ads\n${line}\n`;
  }
  writeFileSync(envPath, next);
  return `${ENV_KEY} geschreven naar .env`;
}

let finished = false;
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/favicon.ico') {
    res.writeHead(204);
    res.end();
    return;
  }

  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(page('Toestemming geweigerd', `<p>Google gaf terug: <code>${error}</code></p>
<p>Bij <code>access_denied</code>: voeg je Google-account toe als testgebruiker onder
<em>APIs &amp; Services → OAuth consent screen → Test users</em> in Google Cloud, en probeer opnieuw.</p>`));
    console.error('\nGoogle gaf een fout terug:', error);
    finish(1);
    return;
  }

  if (!code) {
    res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(page('Wachten op Google…', '<p>Deze pagina verwacht een redirect van Google met een autorisatiecode.</p>'));
    return;
  }

  if (url.searchParams.get('state') !== state) {
    res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(page('Ongeldige state', '<p>De state-parameter komt niet overeen. Start het script opnieuw.</p>'));
    console.error('\nState-mismatch; mogelijk een verouderde of vervalste redirect.');
    finish(1);
    return;
  }

  try {
    const body = new URLSearchParams({
      code,
      client_id: creds.client_id,
      client_secret: creds.client_secret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    });
    const tokenRes = await fetch(creds.token_uri ?? 'https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    const tokens = await tokenRes.json();

    if (!tokenRes.ok || !tokens.refresh_token) {
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(page('Token-uitwisseling mislukt', `<pre>${JSON.stringify(tokens, null, 2)}</pre>
<p>Geen <code>refresh_token</code> ontvangen. Trek de toegang van deze app in via
<a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a> en start het script opnieuw.</p>`));
      console.error('\nToken-uitwisseling mislukt:', JSON.stringify(tokens, null, 2));
      finish(1);
      return;
    }

    let envMsg = 'niet naar .env geschreven (--no-env)';
    if (!noEnv) envMsg = writeEnv(tokens.refresh_token);

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(page('Refresh token ontvangen ✅', `<p>${envMsg}.</p>
<p>Je kunt dit tabblad sluiten en teruggaan naar de terminal.</p>`));

    console.log('\n✅ Refresh token ontvangen.');
    console.log(`   ${envMsg}`);
    console.log(`   scope:   ${tokens.scope}`);
    console.log(`\n${ENV_KEY}=${tokens.refresh_token}\n`);
    finish(0);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(page('Fout', `<pre>${String(err)}</pre>`));
    console.error('\nFout bij token-uitwisseling:', err);
    finish(1);
  }
});

function finish(exitCode) {
  if (finished) return;
  finished = true;
  clearTimeout(timer);
  // Geef de response de kans om de browser te bereiken.
  setTimeout(() => {
    server.close(() => process.exit(exitCode));
  }, 500);
}

let redirectUri;
const timer = setTimeout(() => {
  console.error(`\nGeen toestemming ontvangen binnen ${TIMEOUT_MS / 60000} minuten. Start het script opnieuw.`);
  finish(1);
}, TIMEOUT_MS);

server.listen(0, '127.0.0.1', () => {
  const { port } = server.address();
  redirectUri = `http://localhost:${port}`;

  const authUrl = new URL(creds.auth_uri ?? 'https://accounts.google.com/o/oauth2/auth');
  authUrl.searchParams.set('client_id', creds.client_id);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', SCOPE);
  authUrl.searchParams.set('access_type', 'offline');
  authUrl.searchParams.set('prompt', 'consent');
  authUrl.searchParams.set('state', state);

  console.log('Client secret:', secretPath);
  console.log('Redirect URI: ', redirectUri);
  console.log('\nOpen deze URL in je browser en geef toestemming voor Google Ads:\n');
  console.log(authUrl.toString());
  console.log(`\nWacht maximaal ${TIMEOUT_MS / 60000} minuten op de redirect…`);

  if (!noOpen) {
    const cmd =
      process.platform === 'win32'
        ? `start "" "${authUrl}"`
        : process.platform === 'darwin'
          ? `open "${authUrl}"`
          : `xdg-open "${authUrl}"`;
    exec(cmd, (err) => {
      if (err) console.warn('Kon browser niet automatisch openen; gebruik de URL hierboven.');
    });
  }
});
