/**
 * Kennisbank: uitleg over klachten die we bij mensen thuis tegenkomen.
 *
 * Bewuste keuze: deze artikelen geven GEEN stappenplan om iets zelf op te
 * lossen. Ze beschrijven wat u merkt, waar het meestal aan ligt en waarom het
 * verstandig is er iemand naar te laten kijken. Dat past bij de doelgroep —
 * wie dit zoekt wil begrijpen wat er aan de hand is, niet in het
 * configuratiescherm gaan graven — en het past bij het bedrijfsmodel.
 *
 * Onderwerpen zijn gekozen op echte zoekvraag uit Search Console en de
 * zoektermen uit Google Ads, niet op gevoel. Elk artikel wijst naar de
 * dienstpagina die erbij hoort, zodat de kennisbank het dienstencluster
 * versterkt in plaats van ernaast te staan.
 */

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'let-op'; text: string }

export type ArticleCategory =
  | 'Computer en laptop'
  | 'Internet en wifi'
  | 'Printer'
  | 'E-mail'
  | 'Televisie'
  | 'Telefoon en tablet'
  | 'Veiligheid'
  | 'Bestanden'

export interface Article {
  slug: string
  title: string
  /** Max 60 tekens, zonder merknaam: die plakt Next.js er via het template achter. */
  metaTitle: string
  metaDescription: string
  excerpt: string
  /** Direct antwoord bovenaan, 40–60 woorden. */
  answer: string
  category: ArticleCategory
  datePublished: string
  dateModified: string
  readingMinutes: number
  /** Slug onder /diensten waar dit artikel naartoe wijst. */
  service: string
  blocks: ArticleBlock[]
}

export const articles: Article[] = [
  {
    slug: 'computer-traag-geworden',
    title: 'Computer of laptop is traag geworden: waar ligt dat aan?',
    metaTitle: 'Computer traag geworden? Dit zit er meestal achter',
    metaDescription: 'Uw computer wordt steeds trager en u weet niet waarom. Lees wat er meestal achter zit, waarom het vanzelf erger wordt en wanneer u er iemand naar laat kijken.',
    excerpt: 'Een computer die traag wordt is zelden kapot. Meestal stapelt er iets op dat u niet ziet, en dat wordt vanzelf erger.',
    answer: 'Een computer die traag is geworden is bijna nooit versleten. In de meeste gevallen draaien er programma\'s mee die u nooit bewust heeft gestart, staat de schijf te vol, of loopt het apparaat achter met updates. Het verschil tussen die oorzaken is van buitenaf niet te zien, en ze vragen elk iets anders.',
    category: 'Computer en laptop',
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    readingMinutes: 4,
    service: 'computer-laptop-hulp',
    blocks: [
      { type: 'p', text: 'Het begint klein. Het opstarten duurt wat langer dan vroeger, de browser hapert even bij het openen van een nieuw tabblad, en het afsluiten lijkt eindeloos te duren. Een half jaar later zit u te wachten bij alles wat u doet. Veel mensen denken dan dat de computer "op" is. Dat is bijna nooit zo.' },
      { type: 'h2', text: 'Wat u merkt' },
      { type: 'ul', items: [
        'Opstarten duurt minuten in plaats van seconden.',
        'De ventilator draait hard terwijl u niets zwaars doet.',
        'Programma\'s reageren traag of blijven even hangen.',
        'Het apparaat wordt warm, ook als u alleen e-mail leest.',
        'Soms komt er een melding dat de schijf vol is.',
      ] },
      { type: 'h2', text: 'Waar het meestal aan ligt' },
      { type: 'p', text: 'In de huizen waar wij komen zien we vier oorzaken terugkomen. Programma\'s die zichzelf bij het opstarten laten meestarten en daarna op de achtergrond blijven draaien. Een harde schijf die zo vol zit dat het systeem geen ruimte meer heeft om te werken. Updates die maanden of jaren zijn blijven liggen. En soms meerdere beveiligingsprogramma\'s naast elkaar, die elkaar in de weg zitten.' },
      { type: 'p', text: 'Welke van de vier het is, verschilt per apparaat. Van buitenaf voelt het hetzelfde: alles duurt lang. Van binnen vraagt elke oorzaak iets anders, en dat is precies waarom algemene tips op internet vaak niet helpen.' },
      { type: 'let-op', text: 'Schoonmaakprogramma\'s die beloven uw pc te versnellen maken het vaak erger. Ze verwijderen dingen die het systeem nodig heeft, en een deel ervan installeert stilletjes extra software mee.' },
      { type: 'h2', text: 'Waarom het vanzelf erger wordt' },
      { type: 'p', text: 'Een trage computer blijft niet gelijk. Hoe voller de schijf, hoe minder werkruimte, en hoe meer het systeem moet schuiven met gegevens. Updates die blijven liggen stapelen op tot een pakket dat uren kost. En wie de computer niet meer prettig vindt werken, gebruikt hem minder, waardoor er juist nog meer achterstand ontstaat.' },
      { type: 'h2', text: 'Wanneer u er iemand naar laat kijken' },
      { type: 'p', text: 'Als het opstarten structureel langer dan een paar minuten duurt, als u meldingen over schijfruimte krijgt, of als u merkt dat u taken uitstelt omdat de computer zo traag is. Een HBO IT-student kijkt bij u thuis wat er bij ú meespeelt, en legt uit wat hij doet terwijl hij bezig is. Het apparaat blijft gewoon staan waar het staat.' },
    ],
  },
  {
    slug: 'wifi-valt-weg-in-huis',
    title: 'Wifi valt weg of is traag in een deel van het huis',
    metaTitle: 'Wifi valt weg in huis: waar komt dat door?',
    metaDescription: 'Wifi doet het beneden prima maar boven niet, of valt steeds weg. Lees wat daar meestal achter zit en wanneer het zin heeft er iemand naar te laten kijken.',
    excerpt: 'Wifi die wegvalt ligt zelden aan uw provider. Meestal aan de plek van de router, de muren, of apparatuur die elkaar stoort.',
    answer: 'Wifi die in een deel van het huis wegvalt ligt meestal niet aan uw internetabonnement. De drie oorzaken die wij het vaakst zien zijn de plek van de router, bouwmaterialen die het signaal tegenhouden, en storing van andere apparaten op hetzelfde kanaal. Een snellere internetverbinding lost daar niets van op.',
    category: 'Internet en wifi',
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    readingMinutes: 4,
    service: 'wifi-internet-hulp',
    blocks: [
      { type: 'p', text: 'Beneden werkt alles. Boven in de slaapkamer valt het videogesprek weg, of de tablet zegt dat er geen verbinding is terwijl de telefoon van uw kleinzoon het wel doet. Veel mensen bellen dan hun provider voor een sneller abonnement. Dat helpt meestal niet, want het probleem zit niet in de lijn naar uw huis maar in de verdeling binnen uw huis.' },
      { type: 'h2', text: 'Wat u merkt' },
      { type: 'ul', items: [
        'Beeldbellen hapert of valt weg in een bepaalde kamer.',
        'De tablet verliest verbinding zodra u van de bank opstaat.',
        'Sommige apparaten doen het wel, andere niet, op dezelfde plek.',
        'Het wordt \'s avonds merkbaar slechter dan overdag.',
        'U moet regelmatig de router uit en aan zetten.',
      ] },
      { type: 'h2', text: 'Waar het meestal aan ligt' },
      { type: 'p', text: 'Een router staat bij de meeste mensen waar de kabel binnenkomt: in de meterkast, achter de televisie of in een hoek van de woonkamer. Daar is hij niet geplaatst om goed te verdelen, maar omdat daar het aansluitpunt zat. Een router in een dichte kast of achter een televisie zendt vooral naar de muur.' },
      { type: 'p', text: 'Daar komt het huis zelf bij. In de oudere woningen in Zuid-Holland zitten vaak dikke tussenmuren, soms met stucwerk op gaas, en vloerverwarming of een spiegel kan een signaal verrassend effectief tegenhouden. In nieuwbouw zijn het juist de geïsoleerde wanden met folie. Hetzelfde abonnement geeft dan in twee huizen een totaal ander bereik.' },
      { type: 'p', text: 'De derde oorzaak is drukte op hetzelfde kanaal. In een rijtjeshuis of flat zenden de routers van de buren op dezelfde frequenties. \'s Avonds, wanneer iedereen thuis is, is dat merkbaar.' },
      { type: 'let-op', text: 'Wifi-versterkers uit de winkel lossen het soms op en maken het soms juist slechter: ze halveren vaak de snelheid en kunnen het netwerk in tweeën splitsen, zodat apparaten op de verkeerde helft blijven hangen.' },
      { type: 'h2', text: 'Wanneer u er iemand naar laat kijken' },
      { type: 'p', text: 'Als u de router regelmatig opnieuw moet opstarten, als er kamers zijn waar het gewoon niet werkt, of als u al iets heeft gekocht dat het niet oploste. Wat er bij u speelt is pas te zien als iemand in uw huis meet waar het signaal wegvalt. Dat is niet op afstand vast te stellen en niet uit een handleiding te halen.' },
    ],
  },
  {
    slug: 'printer-print-niet-meer-draadloos',
    title: 'Printer print ineens niet meer draadloos',
    metaTitle: 'Printer print niet meer draadloos: hoe komt dat?',
    metaDescription: 'De printer deed het altijd en ineens niet meer, terwijl er niets veranderd lijkt. Lees wat daar meestal achter zit en wanneer u er iemand naar laat kijken.',
    excerpt: 'Een printer die ineens niet meer print is zelden stuk. Meestal is de verbinding verbroken door iets wat buiten de printer gebeurde.',
    answer: 'Een printer die plotseling niet meer draadloos print is meestal niet kapot. In vrijwel alle gevallen is de verbinding met het netwerk verbroken: door een nieuw modem, een gewijzigd wifi-wachtwoord, een update van de computer, of doordat de printer op een ander netwerk terecht is gekomen dan de computer.',
    category: 'Printer',
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    readingMinutes: 3,
    service: 'printer-scanner-hulp',
    blocks: [
      { type: 'p', text: 'U wilt een brief uitprinten, drukt op afdrukken, en er gebeurt niets. De printer staat aan, het lampje brandt, er is papier en inkt. Op de computer staat hij als offline, of de opdracht blijft in de wachtrij staan. En u heeft niets veranderd.' },
      { type: 'h2', text: 'Wat u merkt' },
      { type: 'ul', items: [
        'De printer staat als "offline" of "niet verbonden" op de computer.',
        'Afdrukopdrachten blijven in de wachtrij staan.',
        'Printen vanaf de telefoon lukt wel, vanaf de computer niet (of andersom).',
        'Er verschijnt een melding dat de printer niet gevonden kan worden.',
      ] },
      { type: 'h2', text: 'Waar het meestal aan ligt' },
      { type: 'p', text: 'Vrijwel altijd is er buiten de printer iets gebeurd. De provider heeft een nieuw modem geleverd, en daarmee veranderde de netwerknaam of het wachtwoord. Of er is een update op de computer geïnstalleerd waarbij de koppeling met de printer is weggevallen. Soms is de printer na een stroomstoring op het gastnetwerk beland, terwijl de computer op het gewone netwerk zit. Die twee zien elkaar dan niet.' },
      { type: 'p', text: 'Dat verklaart ook waarom printen vanaf de telefoon soms nog wel lukt: die staat op een ander netwerk of gebruikt een andere route naar de printer.' },
      { type: 'let-op', text: 'Opnieuw installeren van de printersoftware is wat de meeste mensen als eerste proberen. Als de netwerkverbinding de oorzaak is verandert dat niets, en u raakt soms wél de scaninstellingen kwijt.' },
      { type: 'h2', text: 'Wanneer u er iemand naar laat kijken' },
      { type: 'p', text: 'Als u een nieuw modem heeft gekregen, als de printer al langer wisselend werkt, of als u er al een avond mee bezig bent geweest. De meeste printerklachten zijn bij ons in één bezoek verholpen, inclusief het scannen en printen vanaf de telefoon als u dat wilt.' },
    ],
  },
  {
    slug: 'geen-toegang-tot-de-mail',
    title: 'Ik kan niet meer bij mijn e-mail',
    metaTitle: 'Niet meer bij uw e-mail kunnen: wat is er aan de hand?',
    metaDescription: 'Ineens vraagt uw e-mail om een wachtwoord dat niet werkt, of komt er niets meer binnen. Lees wat daar meestal achter zit en wanneer u hulp inschakelt.',
    excerpt: 'E-mail die om een wachtwoord blijft vragen betekent niet altijd dat u gehackt bent. Maar het kan het wel betekenen.',
    answer: 'Als uw e-mail ineens om een wachtwoord vraagt dat niet werkt, zijn er drie waarschijnlijke oorzaken: uw provider heeft de instellingen gewijzigd, er is een extra beveiligingsstap bijgekomen, of iemand anders heeft toegang gekregen. Welke van de drie het is, bepaalt hoe dringend het is.',
    category: 'E-mail',
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    readingMinutes: 4,
    service: 'email-hulp',
    blocks: [
      { type: 'p', text: 'E-mail is voor veel mensen de belangrijkste ingang tot alles: de bank, de huisarts, de gemeente, contact met kinderen en kleinkinderen. Als die ingang dichtvalt voelt dat ongemakkelijk, en vaak komt het op een moment dat u juist iets nodig heeft.' },
      { type: 'h2', text: 'Wat u merkt' },
      { type: 'ul', items: [
        'Er wordt om een wachtwoord gevraagd dat u altijd gebruikte en dat nu niet werkt.',
        'Er komt niets meer binnen, terwijl mensen zeggen dat ze u wel hebben gemaild.',
        'Op de telefoon werkt het nog, op de computer niet meer.',
        'Kennissen melden dat ze vreemde berichten van u hebben gekregen.',
        'De mailbox is vol volgens een melding.',
      ] },
      { type: 'h2', text: 'Waar het meestal aan ligt' },
      { type: 'p', text: 'De onschuldigste oorzaak is een wijziging bij uw provider. Aanbieders veranderen regelmatig hun serverinstellingen of schakelen een extra controlestap in. Uw e-mailprogramma weet dat niet, en blijft het oude wachtwoord aanbieden tot u er zelf iets aan doet.' },
      { type: 'p', text: 'De tweede oorzaak is een volle mailbox. Komt er niets meer binnen terwijl u wel kunt versturen, dan is dat een sterke aanwijzing.' },
      { type: 'p', text: 'De derde oorzaak is de vervelende. Krijgen kennissen vreemde berichten van uw adres, of ziet u verzonden mail die u niet heeft geschreven, dan heeft iemand anders toegang. Dat is geen klusje dat kan wachten.' },
      { type: 'let-op', text: 'Blijf niet steeds hetzelfde wachtwoord opnieuw invoeren. Bij veel aanbieders wordt het account na een aantal mislukte pogingen tijdelijk geblokkeerd, en dan duurt herstel langer.' },
      { type: 'h2', text: 'Wanneer u er iemand naar laat kijken' },
      { type: 'p', text: 'Direct, als anderen vreemde berichten van u krijgen. In de andere gevallen als het langer dan een dag duurt of als u belangrijke post verwacht. Wij zetten de e-mail bij u thuis weer werkend op al uw apparaten, en kijken meteen of er iets is gebeurd waar u van moet weten.' },
    ],
  },
  {
    slug: 'nepmail-of-nepbelletje-herkennen',
    title: 'Nepmail, nepbelletje of een melding dat uw pc besmet is',
    metaTitle: 'Nepmail of nepbelletje: waaraan herkent u het?',
    metaDescription: 'Een mail van de bank die niet klopt, een belletje van "Microsoft", of een melding dat uw computer besmet is. Lees waar het op wijst en wat u beter niet doet.',
    excerpt: 'Oplichters richten zich bewust op mensen die niet zeker zijn van hun computer. De aanpak is altijd hetzelfde: haast en angst.',
    answer: 'Nepmails en neptelefoontjes werken allemaal met dezelfde twee middelen: haast en angst. U moet nú iets doen, anders gebeurt er iets ergs. Geen enkele bank, overheidsinstantie of softwarebedrijf werkt zo. Een echte melding geeft u altijd de tijd om het zelf na te kijken.',
    category: 'Veiligheid',
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    readingMinutes: 4,
    service: 'computer-laptop-hulp',
    blocks: [
      { type: 'p', text: 'Een mail die lijkt te komen van uw bank. Een telefoontje van iemand die zegt dat hij van Microsoft is en dat uw computer besmet is. Een scherm dat plotseling vol staat met waarschuwingen en een telefoonnummer. Het is vervelend, het is beangstigend, en het is bewust zo gemaakt.' },
      { type: 'h2', text: 'Waar u het aan herkent' },
      { type: 'ul', items: [
        'Er wordt haast gemaakt: "binnen 24 uur" of "anders wordt uw rekening geblokkeerd".',
        'Er wordt gevraagd iets te installeren zodat iemand kan meekijken.',
        'Er wordt gevraagd naar een code uit een sms of uit uw bankapp.',
        'De afzender lijkt te kloppen, maar het adres erachter klopt net niet.',
        'Er staat een telefoonnummer in een waarschuwing op uw scherm.',
      ] },
      { type: 'h2', text: 'Waarom juist deze doelgroep' },
      { type: 'p', text: 'Oplichters zoeken mensen die twijfelen over hun eigen computer. Wie niet zeker weet of een melding echt is, is eerder geneigd te doen wat er gevraagd wordt. Dat is geen dommigheid; het is precies waar deze berichten op zijn ontworpen. Ze zijn gemaakt om te werken.' },
      { type: 'let-op', text: 'Heeft u al iets geïnstalleerd of een code doorgegeven? Zet de computer dan uit en bel uw bank op het nummer achter op uw pas, niet op een nummer uit het bericht. Daarna laat u de computer nakijken voordat u hem weer gebruikt.' },
      { type: 'h2', text: 'Waarom zelf opruimen lastig is' },
      { type: 'p', text: 'Als er meekijksoftware is geïnstalleerd, is die vaak niet zomaar te vinden. Het verwijderen van het zichtbare programma betekent niet dat alles weg is, en er kunnen gegevens zijn meegenomen die later pas worden gebruikt. Dat vraagt om iemand die weet waar hij moet zoeken.' },
      { type: 'h2', text: 'Wanneer u er iemand naar laat kijken' },
      { type: 'p', text: 'Altijd als u iets heeft geïnstalleerd of een code heeft doorgegeven. En ook als u twijfelt: u mag ons bellen om te vragen of een bericht klopt. Dat kost u niets en bespaart soms veel. Een HBO IT-student komt bij u langs, kijkt de computer na en legt rustig uit wat hij ziet.' },
    ],
  },
  {
    slug: 'nieuwe-laptop-alles-overzetten',
    title: 'Nieuwe laptop gekocht: hoe komt alles er nu op?',
    metaTitle: 'Nieuwe laptop: hoe komt alles van de oude erop?',
    metaDescription: 'Een nieuwe laptop is leeg: geen foto\'s, geen e-mail, geen wachtwoorden. Lees wat er allemaal bij het overzetten komt kijken en waar het vaak misgaat.',
    excerpt: 'Een nieuwe laptop is leeg. Het overzetten is meer werk dan de meeste mensen verwachten, en één ding vergeten valt later zwaar.',
    answer: 'Een nieuwe laptop komt leeg uit de doos. Foto\'s, documenten, e-mail, favorieten en opgeslagen wachtwoorden staan nog op het oude apparaat. Dat overzetten is geen kwestie van een stick erin steken: e-mail en wachtwoorden vragen een andere aanpak dan bestanden, en juist daar gaat het vaak mis.',
    category: 'Computer en laptop',
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    readingMinutes: 4,
    service: 'computer-laptop-hulp',
    blocks: [
      { type: 'p', text: 'De nieuwe laptop staat op tafel, snel en stil. En leeg. Geen foto\'s van de kleinkinderen, geen mailprogramma dat uw post ophaalt, geen favorieten, geen opgeslagen wachtwoorden. Alles wat het oude apparaat vertrouwd maakte, staat nog op het oude apparaat.' },
      { type: 'h2', text: 'Wat er allemaal mee moet' },
      { type: 'ul', items: [
        'Foto\'s, video\'s en documenten.',
        'E-mail, inclusief oude berichten en mappen.',
        'Favorieten en opgeslagen wachtwoorden uit de browser.',
        'Programma\'s die u gebruikt, met hun instellingen.',
        'De printer en eventuele andere apparatuur.',
      ] },
      { type: 'h2', text: 'Waar het vaak misgaat' },
      { type: 'p', text: 'Bestanden kopiëren lukt de meeste mensen nog wel. Het struikelblok zit in de dingen die niet als bestand bestaan. E-mail die niet in een map op de schijf staat maar bij een aanbieder, en die alleen goed overkomt als de instellingen kloppen. Wachtwoorden die in de browser zijn opgeslagen en die bij een verkeerde aanpak op het oude apparaat achterblijven. En programma\'s waarvoor de licentie of de inloggegevens nergens meer te vinden zijn.' },
      { type: 'p', text: 'Wat wij het vaakst meemaken is dat iemand het half heeft gedaan en er een maand later achter komt dat er iets ontbreekt. Tegen die tijd is het oude apparaat soms al weggedaan.' },
      { type: 'let-op', text: 'Doe de oude laptop niet weg voordat u zeker weet dat alles over is, en zeker niet zonder dat de schijf goed is gewist. Op een afgedankt apparaat staan vaak nog e-mail en opgeslagen wachtwoorden.' },
      { type: 'h2', text: 'Wanneer u er iemand naar laat kijken' },
      { type: 'p', text: 'Bij voorkeur voordat u begint, en zeker voordat u de oude laptop wegdoet. Wij zetten alles over terwijl u erbij zit, zodat u ziet waar uw foto\'s nu staan en hoe u ze terugvindt. De nieuwe laptop is daarna meteen klaar voor gebruik, inclusief printer en e-mail.' },
    ],
  },
  {
    slug: 'bestanden-kwijt',
    title: 'Foto\'s of bestanden kwijt: is er nog iets te redden?',
    metaTitle: 'Foto\'s kwijt na een storing: wat is er nog te redden?',
    metaDescription: 'Bestanden weg na een storing, een crash of per ongeluk verwijderd. Lees wat de kans op herstel bepaalt en waarom doorwerken die kans kleiner maakt.',
    excerpt: 'Of bestanden terug te halen zijn hangt vooral af van wat er ná het verlies met het apparaat is gebeurd.',
    answer: 'Of verdwenen bestanden nog te redden zijn, hangt minder af van hoe ze weg zijn geraakt dan van wat er daarna met het apparaat is gedaan. Verwijderde gegevens staan vaak nog op de schijf tot er iets overheen wordt geschreven. Elk uur dat het apparaat aan blijft, verkleint die kans.',
    category: 'Bestanden',
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    readingMinutes: 3,
    service: 'dataherstel-backup',
    blocks: [
      { type: 'p', text: 'Foto\'s van een bruiloft, de administratie van jaren, brieven die u nog nodig had. Het apparaat start niet meer op, of de map is leeg, of er is per ongeluk iets gewist. De eerste reactie is bijna altijd: zelf zoeken. En dat is precies wat de kans verkleint.' },
      { type: 'h2', text: 'Wat de kans op herstel bepaalt' },
      { type: 'ul', items: [
        'Of het apparaat na het verlies nog is gebruikt.',
        'Of er software is geïnstalleerd om te herstellen — die schrijft zelf ook naar de schijf.',
        'Of het om een harde schijf of een moderne SSD gaat; die laatste wist zichzelf sneller definitief.',
        'Of er mechanisch iets stuk is of alleen iets is verwijderd.',
      ] },
      { type: 'h2', text: 'Waarom doorwerken slecht uitpakt' },
      { type: 'p', text: 'Wanneer u een bestand verwijdert, wordt de ruimte vrijgegeven maar de inhoud blijft meestal nog even staan. Zolang er niets overheen komt, is er wat te halen. Maar een computer schrijft voortdurend, ook als u niets doet: updates, tijdelijke bestanden, logboeken. Elk uur dat het apparaat aan staat, wordt de kans kleiner.' },
      { type: 'let-op', text: 'Hoort u een tikkend of klikkend geluid uit de computer, zet hem dan meteen uit en laat hem uit. Dat geluid wijst op mechanische schade, en doorgaan beschadigt dan permanent wat er nog staat.' },
      { type: 'h2', text: 'Wanneer u er iemand naar laat kijken' },
      { type: 'p', text: 'Zo snel mogelijk, en vóór u zelf herstelsoftware probeert. Wij maken eerst een eerlijke inschatting: is er realistisch iets te halen of niet. Pas als het antwoord ja is, gaan we verder. En we zorgen daarna dat u een back-up heeft, zodat dit u niet nog eens overkomt.' },
    ],
  },
  {
    slug: 'tv-doet-het-niet-meer',
    title: 'Smart-tv doet het niet meer of de zenders staan door elkaar',
    metaTitle: 'Tv doet het niet of zenders staan door elkaar',
    metaDescription: 'Geen beeld, zenders in de verkeerde volgorde of apps die niet starten op de smart-tv. Lees waar dat meestal aan ligt en wanneer u er iemand bij haalt.',
    excerpt: 'Een televisie die het niet doet ligt vaak niet aan de televisie, maar aan wat eromheen is veranderd.',
    answer: 'Een smart-tv die geen beeld geeft, zenders die door elkaar staan of apps die niet starten komen zelden door een defecte televisie. Meestal is er iets veranderd in de keten eromheen: een nieuwe decoder, een ander internetabonnement, een update van de televisie, of een kabel die niet meer op de juiste ingang zit.',
    category: 'Televisie',
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    readingMinutes: 3,
    service: 'tv-installatie',
    blocks: [
      { type: 'p', text: 'U zet de televisie aan en er is geen beeld, of de zenders staan ineens in een volgorde die u niet kent. Soms start Netflix niet meer, terwijl de televisie verder gewoon werkt. En u heeft alleen maar de stekker eruit gehad om te stofzuigen.' },
      { type: 'h2', text: 'Wat u merkt' },
      { type: 'ul', items: [
        '"Geen signaal" terwijl alles aan staat.',
        'Zenders staan in een andere volgorde dan u gewend was.',
        'Apps starten niet of vragen opnieuw om een wachtwoord.',
        'Beeld wel, geluid niet, of andersom.',
        'De afstandsbediening bedient de verkeerde dingen.',
      ] },
      { type: 'h2', text: 'Waar het meestal aan ligt' },
      { type: 'p', text: 'De meeste televisies in Nederland zijn aangesloten op een decoder van de provider, soms met een soundbar ertussen. Dat zijn drie apparaten die elkaar moeten begrijpen. Komt er een nieuwe decoder, wordt er een kabel verplaatst, of installeert de televisie \'s nachts een update, dan kan die keten uit elkaar vallen zonder dat er iets kapot is.' },
      { type: 'p', text: 'Zenders die door elkaar staan komen bijna altijd door een automatische zoekactie, waarbij de televisie de volgorde opnieuw bepaalt. De zenders zijn er dan nog wel, alleen niet meer waar u ze zoekt.' },
      { type: 'h2', text: 'Wanneer u er iemand naar laat kijken' },
      { type: 'p', text: 'Als u een nieuwe decoder of televisie heeft gekregen, als u van provider bent gewisseld, of als u er niet uitkomt met de afstandsbediening in de hand. Wij sluiten alles aan, zetten de zenders in de volgorde die u wilt en zorgen dat de apps werken. En u krijgt één afstandsbediening waarmee u alles bedient.' },
    ],
  },
]

export const articleSlugs = articles.map(a => a.slug)

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

/**
 * De "lees ook"-strook onderaan een artikel: de volgende drie uit de lijst,
 * rondlopend. Bewust niet op categorie gesorteerd — zo krijgt élk artikel
 * precies drie interne links van broertjes, en blijft geen enkel artikel
 * achter op alleen de link vanaf het overzicht. Dat laatste is waar de
 * indexering van de gemeentepagina's op stukliep.
 */
export function getRelatedArticles(slug: string, count = 3): Article[] {
  const index = articles.findIndex(a => a.slug === slug)
  if (index === -1) return []
  return Array.from({ length: Math.min(count, articles.length - 1) }, (_, i) =>
    articles[(index + 1 + i) % articles.length]
  )
}
