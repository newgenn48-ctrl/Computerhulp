Voer een volledige conversie-audit uit op deze codebase. Context: 

de site draait Google Ads en krijgt kliks, maar conversies 

(telefoontjes/leads) zijn onregelmatig. Veel kliks leiden niet 

tot klant-contact.



Doelgroep: senioren 55+, ze willen bellen, niet typen.

Primaire conversie: telefoongesprek (klik op tel: link of 

zichtbare keuze om te bellen).

Secundaire conversie: terugbel-formulier ingevuld.



Werkwijze: NIET WIJZIGEN, alleen rapporteren. Schrijf eindrapport 

naar docs/audits/conversion-leak-audit-\[datum].md.



\## Stap 1 — Landingspagina analyse

Identificeer eerst welke pagina's waarschijnlijk Google Ads landing 

pages zijn. Check:

\- app/page.tsx (homepage)

\- Alle locatiepagina's (app/computerhulp-aan-huis-in-\*)

\- Alle dienstpagina's (app/diensten/\*)



Voor elke landingspagina, audit het volgende:



\### A. Boven de fold (eerste 600px op mobile, 800px op desktop)

\- Is het telefoonnummer DIRECT zichtbaar zonder scrollen?

\- Is het telefoonnummer een klikbare tel: link?

\- Is er een primaire CTA boven de fold?

\- Staat er een trust signal boven de fold (jaartal, reviews, KvK, 

&#x20; "verzekerd")?

\- Is de value proposition duidelijk in <8 woorden?

\- Hoe lang duurt het visueel voor de bezoeker snapt waar hij is?



\### B. Telefoon-toegankelijkheid (KRITIEK voor deze doelgroep)

\- Is er een sticky telefoon-CTA onderaan op mobile?

\- Staat het nummer in de header op desktop?

\- Hoeveel klikken/scrollen van homepage tot bellen?

\- Is het tel: link correct geformatteerd (geen spaties die het 

&#x20; breken op iOS)?

\- Werkt het op alle pagina's, niet alleen homepage?



\### C. Visuele frictie

\- Pop-ups, modals, cookie-banners die de CTA blokkeren?

\- Trage LCP (>2.5s) die bezoekers wegjaagt voor pagina laadt?

\- Layout shifts (CLS) die fouten klikken veroorzaken?

\- Tekst te klein voor senioren (onder 18px op mobile)?

\- Contrast te laag (lichtgrijze tekst)?

\- Telefoonnummer in beeld op mobile of valt het weg in een menu?



\### D. Match tussen advertentie en pagina (vermoed, kan niet 

helemaal checken zonder ads-data)

\- Komen de keywords op de pagina overeen met wat een Google Ads 

&#x20; bezoeker zou verwachten? (Lees de H1 en eerste paragraaf — past 

&#x20; dit bij iemand die op "computerhulp den haag" klikte?)

\- Is er een mismatch tussen URL en content? (bijvoorbeeld: ad 

&#x20; voor "spoedhulp" landt op een algemene pagina)



\### E. Conversie-blokkers die ik vaak zie bij service-businesses

Check expliciet op deze problemen:

\- Contactformulier met te veel velden (>3)

\- Verplicht e-mailadres (senioren willen bellen, niet mailen)

\- "Wij nemen contact op binnen X werkdagen" — moet "binnen 1 uur"

\- Geen telefoon zichtbaar op mobile zonder hamburger-menu open te 

&#x20; klikken

\- Tarieven onduidelijk of verborgen

\- Geen menselijk gezicht (echte foto) — alleen iconen of stockfoto's

\- Geen specifieke reviews met naam + plaats

\- Aanspreekvorm "je" in plaats van "u" (kan vertrouwen schaden 

&#x20; bij senioren)



\### F. Mobile-specifieke audit

Het grootste deel van Google Ads klikken komt van mobile. Check 

elke landingspagina specifiek op mobile (375px breedte):

\- Telefoon-CTA boven de fold ZONDER scrollen?

\- Is de tel: link minimaal 56px hoog?

\- Werkt sticky bottom-bar zonder content te overlappen?

\- Hamburger-menu nodig om belangrijke info te zien?

\- Forms goed te gebruiken met grote vingers?

\- Loading state — wat ziet iemand de eerste 2 seconden?



\## Stap 2 — Cross-page check



\### Trust signal consistentie

\- Welke trust signals staan op de homepage en MISSEN op locatiepagina's?

\- Reviews zichtbaar op elke landingspagina?

\- Telefoonnummer 100% identiek op alle pagina's? (NAP-check)

\- Tarieven consistent? (Eerdere audits vonden €14,50 vs €14,99)



\### Footer en header

\- Telefoonnummer in header op elke pagina?

\- Footer compleet met NAW, KvK, BTW, retourrecht-equivalent?

\- Werkt header sticky op mobile of verdwijnt het bij scrollen?



\## Stap 3 — Vertel mij wat je vermoedt



Op basis van wat je ziet, formuleer hypotheses waarom kliks niet 

leiden tot conversie. Bijvoorbeeld:

\- "Het telefoonnummer is niet boven de fold op mobile, en de 

&#x20; doelgroep belt — dit kan 30-50% van conversies kosten"

\- "Locatiepagina X heeft een ander tarief dan homepage — 

&#x20; bezoekers raken in de war"

\- "Cookie banner blokkeert de primaire CTA op mobile"



Rangschik hypotheses op verwachte impact (High/Med/Low) en 

implementatie-moeite (Easy/Med/Hard).



\## Output format



```markdown

\# Conversion Leak Audit — computerhulpzh.nl

Datum: \[datum]

Probleem: kliks van Google Ads zonder telefoon-conversie



\## Samenvatting

\[3-5 zinnen: wat is waarschijnlijk het probleem]



\## Top 5 vermoedelijke conversie-lekken

1\. \[Issue] — verwachte impact + waarom + fix

2\. ...



\## Per landingspagina



\### Homepage (app/page.tsx)

\- Boven de fold: ✅/⚠️/❌ met details

\- Telefoon-toegankelijkheid: ...

\- Mobile UX: ...

\- Trust signals: ...

\- Specifieke issues: ...



\### \[Locatiepagina 1]

...



\### \[Dienstpagina 1]

...



\## Cross-cutting issues

\- NAP-inconsistenties: ...

\- Tarief-inconsistenties: ...

\- Trust signals ontbrekend: ...



\## Wat NIET het probleem is

\[Wat checked en clean was — even belangrijk]



\## Aanbevolen volgorde van fixes

1\. \[Quick win: hoogste impact, laagste moeite]

2\. ...



\## Wat ik niet kan checken zonder externe data

\- Daadwerkelijke Lighthouse scores op productie

\- Google Ads landing page experience scores

\- Echte bezoekersgedrag (heatmaps, session recordings)

\- Mismatch tussen ad copy en landing page (geen toegang tot ads)

\- Bel-tracking data (welke pagina's de meeste calls genereren)



\## Vervolgstappen die buiten code liggen

Aanbevelingen voor Ahmad:

\- Microsoft Clarity of Hotjar installeren voor session recordings

\- Bel-tracking via CallRail of vergelijkbaar

\- Google Ads landing page koppeling reviewen

\- Google Search Console + Analytics 4 data cross-checken

```



Stel verduidelijkende vragen vóór je begint als iets onduidelijk is.

