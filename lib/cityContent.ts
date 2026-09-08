/**
 * Unique city content for SEO optimization
 * Each city gets unique descriptions, neighborhoods, and local context
 * to avoid duplicate/thin content issues across 96+ city pages.
 */

export interface CityContent {
  population: number
  region: string
  neighborhoods: string[]
  description: string
  highlights: string[]
}

const cityContentData: Record<string, CityContent> = {
  // === DRECHTSTEDEN ===
  'alblasserdam': {
    population: 20500,
    region: 'Drechtsteden',
    neighborhoods: ['Centrum', 'Kinderdijk', 'Oost', 'Brandwijk', 'Souburgh', 'Vinkenpolderweg'],
    description: 'Alblasserdam ligt op de punt waar de Noord en de Lek samenkomen, met de molens van Kinderdijk letterlijk om de hoek. Het dorp is gegroeid rond de scheepswerven en de dijk, en veel bewoners hebben er hun hele werkende leven doorgebracht. Rond het Centrum en aan de Vinkenpolderweg staan oudere rijtjeshuizen met een lange, smalle plattegrond, waar de router bij de voordeur staat en de wifi in de achterkamer wegzakt. In Souburgh en Oost zien we ruimere gezinswoningen waar de laptop boven en de printer beneden elkaar niet vinden. Onze HBO-student komt aan huis en kijkt rustig mee: een tablet klaarmaken om te beeldbellen met kinderen die in Rotterdam of verder weg wonen, de printer na een nieuw modem weer aan de praat krijgen, of de smart-tv aan de streamingdienst koppelen. Ook een nieuwe laptop uit de doos halen en alle foto’s van de oude computer overzetten doen we samen, stap voor stap. Via de A15 en de Noordtunnel is Alblasserdam vanuit de Drechtsteden en Rotterdam snel bereikbaar, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Molens van Kinderdijk (UNESCO)', 'Rivier de Noord', 'Historische scheepswerf']
  },
  'dordrecht': {
    population: 120000,
    region: 'Drechtsteden',
    neighborhoods: ['Centrum', 'Krispijn', 'Dubbeldam', 'Sterrenburg', 'Stadspolders', 'Wielwijk', 'Reeland', 'De Staart', 'Oud-Krispijn', 'Nieuw-Krispijn'],
    description: 'Dordrecht is de oudste stad van Holland en ligt als een eiland tussen de rivieren. Achter de monumentale gevels van de binnenstad zitten woningen met dikke muren en smalle trappen, waar wifi het op de eerste verdieping al opgeeft. In Sterrenburg, Crabbehof en Wielwijk wonen veel mensen die er in de jaren zestig en zeventig kwamen en nu op leeftijd zijn; daar helpen we vaak met een tablet voor beeldbellen of een printer die na de overstap naar glasvezel niets meer doet. Dubbeldam en Stadspolders zijn ruimer opgezet, met eengezinswoningen waar de laptop op zolder ver van de router staat. Een HBO-student van ons komt bij u langs, doet het rustig aan en laat zien hoe alles werkt, zodat u het daarna zelf kunt. We zetten een nieuwe laptop compleet klaar, brengen e-mail over naar de nieuwe telefoon en helpen bij het activeren van de DigiD-app voor het Albert Schweitzer ziekenhuis of de gemeente. Dordrecht heeft een intercitystation en de Waterbus, dus vanuit Rotterdam zijn we er snel, ook \'s avonds en in het weekend.',
    highlights: ['Oudste stad van Holland', 'Grote Kerk', 'Dordts Museum', 'Biesbosch Nationaal Park']
  },
  'hendrik-ido-ambacht': {
    population: 32000,
    region: 'Drechtsteden',
    neighborhoods: ['Centrum', 'Sandelingen-Ambacht', 'Volgerlanden', 'Oostendam', 'De Volgerlanden-West', 'Watervallen'],
    description: 'Hendrik-Ido-Ambacht ligt ingeklemd tussen de Noord, de Waal en Zwijndrecht, en is de afgelopen jaren flink gegroeid met de wijk De Volgerlanden. In die nieuwbouw wonen veel gezinnen met een huis vol apparaten die allemaal om wifi vragen, terwijl de router in de meterkast zit weggestopt. Het oude dorp rond het Centrum en Oostendam heeft juist oudere woningen met dikke muren, waar veel bewoners inmiddels gepensioneerd zijn en het fijn vinden als iemand rustig naast hen komt zitten. Sandelingen-Ambacht en de buurt rond de Watervallen zitten daar qua bouwjaar tussenin. Wat we in Ambacht vaak doen: een tablet instellen om te beeldbellen met de kleinkinderen, een printer weer verbinden na een nieuw modem, e-mail op een nieuwe telefoon zetten, de smart-tv aan het netwerk koppelen en een nieuwe laptop inrichten met alle oude foto’s erop. Onze HBO-student legt elke stap uit in gewone taal en laat u het zelf proberen. Via de A16 en de Sophiaspoortunnel is de gemeente vanuit Rotterdam en Dordrecht snel te bereiken, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Nieuwbouwwijk Volgerlanden', 'Sophiapolder natuurgebied', 'Waal- en IJsselzicht']
  },
  'papendrecht': {
    population: 32500,
    region: 'Drechtsteden',
    neighborhoods: ['Centrum', 'Westpolder', 'Kraaihoek', 'Middenpolder', 'Oostpolder', 'Molenvliet', 'Noordhoek'],
    description: 'Papendrecht ligt aan de Noord, recht tegenover Dordrecht, en is bekend van de baggerbedrijven en de scheepsbouw langs de rivier. Het dorp groeide vooral in de jaren zestig en zeventig, met wijken als Westpolder, Kraaihoek, Middenpolder en Oostpolder vol eengezinswoningen waar veel bewoners van het eerste uur nu alleen wonen. In het Centrum staan appartementen waar een router in de meterkast het signaal in de woonkamer laat wegzakken, en in Molenvliet en Noordhoek zien we ruimere huizen waar de laptop boven en de printer beneden elkaar niet vinden. De kinderen wonen vaak in Dordrecht, Rotterdam of verder weg, dus beeldbellen is hier een veelgehoorde vraag. Onze HBO-student komt bij u thuis om de tablet daarvoor klaar te maken, e-mail op de nieuwe telefoon te zetten, de printer weer aan het werk te krijgen na een nieuw modem, de smart-tv aan de streamingdienst te koppelen of een nieuwe laptop in te richten met alle oude foto’s erop. Ook de DigiD-app voor de apotheek of de gemeente regelen we samen, rustig en in gewone taal. Via de Papendrechtse brug, de A15 en de Waterbus is Papendrecht vanuit Dordrecht en Rotterdam snel bereikbaar, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Maritiem bedrijventerrein', 'Baggermuseum', 'Langs de Noord uiterwaarden']
  },
  'sliedrecht': {
    population: 25500,
    region: 'Drechtsteden',
    neighborhoods: ['Centrum', 'Baanhoek', 'Merwestein', 'Polder Buitenland', 'Westwijk', 'Rivierenbuurt'],
    description: 'Sliedrecht is het baggerdorp aan de Beneden-Merwede, waar de grote baggerbedrijven vandaan komen en waar veel bewoners hun hele werkende leven in de maritieme sector hebben doorgebracht. Het Centrum en de Rivierenbuurt hebben oudere woningen langs de dijk, diep en smal, met de router vooraan en een woonkamer achteraan waar de wifi niet meer komt. Baanhoek, Merwestein en Westwijk zijn gebouwd in de jaren zestig tot tachtig, met eengezinswoningen waar de bewoners van het eerste uur nu vaak alleen wonen. In Polder Buitenland en de nieuwere delen aan de rand staan ruimere huizen waar de laptop boven het signaal van beneden kwijtraakt. De kinderen zitten vaak in Dordrecht, Gorinchem of verder weg, dus beeldbellen is een veelgehoorde wens. Onze HBO-student komt bij u thuis om de tablet daarvoor klaar te maken, e-mail op de nieuwe telefoon te zetten, de printer weer aan de praat te krijgen, de smart-tv aan de streamingdienst te hangen of een nieuwe laptop in te richten met alle oude foto’s erop. We doen het rustig, in gewone taal, en schrijven de stappen op als u dat wilt. Sliedrecht ligt direct aan de A15 en heeft twee stations aan de MerwedeLingelijn, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Wereldhoofdstad baggerindustrie', 'Nationaal Baggermuseum', 'Beneden-Merwede rivierfront']
  },
  'zwijndrecht': {
    population: 45000,
    region: 'Drechtsteden',
    neighborhoods: ['Centrum', 'Nederhov', 'Heer Oudelands Ambacht', 'Walburg', 'Kort Ambacht', 'Develstein', 'Meerdervoort'],
    description: 'Zwijndrecht ligt direct ten noorden van Dordrecht, aan de overkant van de Oude Maas, verbonden door de Drechttunnel en de spoorbrug. Het is een echte woongemeente: in Walburg, Kort Ambacht en Nederhov staan rijen eengezinswoningen en flats uit de jaren zestig en zeventig waar veel bewoners van het eerste uur nu alleen wonen en graag iemand aan tafel hebben die rustig uitlegt. Heer Oudelands Ambacht en Develstein zijn ruimer opgezet, met gezinswoningen waar de router beneden staat en de laptop boven het signaal verliest. Rond het Centrum en aan de rivier bij Meerdervoort staan appartementen waar betonnen vloeren de wifi tegenhouden. Onze HBO-student komt bij u thuis voor een tablet die klaar moet zijn om te beeldbellen met de kleinkinderen, e-mail die op de nieuwe telefoon moet, een printer die na een update van de provider niets meer afdrukt, een smart-tv die het netwerk kwijt is of een nieuwe laptop waar alle oude foto’s en documenten op moeten. Ook de DigiD-app voor het ziekenhuis in Dordrecht of de gemeente zetten we samen klaar, in gewone woorden. Zwijndrecht heeft een intercitystation en ligt aan de A16, dus vanuit Rotterdam en Dordrecht zijn we er snel; meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Drechttunnel naar Dordrecht', 'Develpark', 'Station Zwijndrecht intercitystation']
  },
  'hardinxveld-giessendam': {
    population: 19000,
    region: 'Alblasserwaard',
    neighborhoods: ['Hardinxveld', 'Giessendam', 'Neder-Hardinxveld', 'Boven-Hardinxveld', 'Het Paard'],
    description: 'Hardinxveld-Giessendam is een langgerekt dijkdorp langs de Merwede, waar de scheepsbouw en de visserij nog altijd voelbaar zijn in de straten. Het dorp bestaat uit meerdere kernen op een rij: Neder-Hardinxveld, Boven-Hardinxveld, Giessendam en het gebied rond Het Paard, met veel huizen aan of vlak achter de dijk. Die dijkwoningen zijn vaak diep en smal, met de router vooraan en een woonkamer achteraan waar de wifi niet meer komt. In de nieuwere wijken achter de dijk staan ruimere woningen waar de laptop op zolder het signaal kwijtraakt. Veel bewoners wonen er al lang, en kinderen en kleinkinderen zitten in Dordrecht, Gorinchem of verder weg, dus beeldbellen is een veelgehoorde wens. Onze HBO-student maakt de tablet daarvoor klaar, zet e-mail op de nieuwe telefoon, krijgt de printer weer aan het werk na een modemwissel en sluit de smart-tv aan op de streamingdienst. We doen het samen, in gewone woorden, zonder haast. Hardinxveld-Giessendam ligt direct aan de A15 en heeft twee stations aan de MerwedeLingelijn, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Dijklint langs de Merwede', 'Scheepsbouwtraditie', 'Visserijhistorie']
  },

  // === RIJNMOND (ROTTERDAM REGIO) ===
  'rotterdam': {
    population: 655000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Kralingen-Crooswijk', 'Delfshaven', 'Feijenoord', 'Noord', 'Hillegersberg-Schiebroek', 'Overschie', 'Prins Alexander', 'Charlois', 'IJsselmonde', 'Hoogvliet', 'Hoek van Holland'],
    description: 'Rotterdam is een stad van hoogbouw, havens en wijken die elk hun eigen gezicht hebben. In Ommoord en de rest van Prins Alexander staan de bekende hoge flats uit de jaren zeventig, waar veel bewoners al tientallen jaren wonen en waar wifi soms de keuken wel haalt maar het balkon niet. In Hillegersberg-Schiebroek en Kralingen zien we grote huizen met meerdere verdiepingen, waar één router zelden genoeg is. Op Zuid, in IJsselmonde, Charlois en Hoogvliet, helpen we regelmatig mensen die voor het eerst een tablet hebben gekregen en willen beeldbellen met de kinderen in een andere stad. Een HBO-student uit ons team komt gewoon bij u thuis, neemt de tijd en legt uit wat hij doet. Denk aan een printer die na een verhuizing niet meer meewerkt, e-mail die op de nieuwe telefoon moet worden ingesteld, of de DigiD-app die u nodig heeft voor de zorgverzekeraar of de gemeente. Dankzij de metro, de tram en een goede fiets zijn we in alle stadsdelen snel ter plaatse, van Overschie tot Hoek van Holland, en meestal binnen 24 uur.',
    highlights: ['Erasmusbrug', 'Markthal', 'Euromast', 'Havens van Rotterdam', 'Kubuswoningen']
  },
  'schiedam': {
    population: 80000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Oost', 'West', 'Zuid', 'Nieuwland', 'Groenoord', 'Kethel', 'Woudhoek', 'Spaland'],
    description: 'Schiedam is de jeneverstad met de hoogste molens ter wereld, maar achter dat historische centrum ligt een stad van heel verschillende wijken. Groenoord is in de jaren zestig en zeventig volgebouwd met hoge flats, en veel bewoners wonen daar nog altijd; het beton houdt het wifi-signaal tegen en de tablet valt op het balkon steeds uit. In Nieuwland is veel vernieuwd, in Kethel, Woudhoek en Spaland staan ruime eengezinswoningen waar de laptop op zolder de router beneden niet vindt. Onze HBO-student komt gewoon bij u aan huis en neemt de tijd. Vragen die we in Schiedam veel horen: de nieuwe telefoon overnemen van de oude, inclusief e-mail en foto\'s, een printer die na een nieuw modem van de provider zwijgt, en een tablet klaarmaken voor beeldbellen met de kinderen die in de regio of verder weg wonen. Ook helpen we met de DigiD-app voor het Franciscus Vlietland ziekenhuis en met bankieren op de telefoon. Schiedam is via metro, tram en station uitstekend bereikbaar, dus we zijn er meestal binnen 24 uur, ook \'s avonds en in het weekend.',
    highlights: ['Hoogste windmolens ter wereld', 'Jenevermuseum', 'Historische grachten', 'Stadskantoor']
  },
  'vlaardingen': {
    population: 73000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Holy', 'Westwijk', 'Vlaardinger Ambacht', 'Babberspolder', 'VOP', 'Oostwijk', 'Rivierzone'],
    description: 'Vlaardingen was ooit een haringstad en is nu een woonstad aan de Nieuwe Waterweg met een sterk vergrijzende bevolking, vooral in Holy. Holy-Noord en Holy-Zuid zijn in de jaren zestig en zeventig gebouwd, met flats en rijtjeshuizen waar veel bewoners inmiddels tachtig zijn en toch graag zelf hun bankzaken en de zorgverzekering online regelen. In de Westwijk en de Babberspolder zien we galerijflats waar het wifi-signaal na twee muren op is. Het centrum en de Oostwijk hebben oudere panden met smalle trappen. Onze HBO-student komt bij u thuis, bekijkt waar de router staat en zorgt dat u in de hele woning kunt internetten. Ook helpen we bij een nieuwe laptop die ingesteld moet worden, een printer die niet meer met de laptop wil, e-mail die op de telefoon moet en de DigiD-app die u nodig heeft voor de huisarts of MijnOverheid. Beeldbellen met de kleinkinderen leren we u stap voor stap. Sinds de Hoekse Lijn metro is geworden, zijn we vanuit Rotterdam snel bij u, ook \'s avonds en in het weekend, meestal binnen 24 uur.',
    highlights: ['Visserijmuseum', 'Oude Haven', 'Rivierzone herontwikkeling', 'Broekpolder recreatiegebied']
  },
  'maassluis': {
    population: 33000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Sluispolder', 'Kapelpolder', 'Koningshoek', 'Steendijkpolder', 'Wilgenrijk'],
    description: 'Maassluis is een havenstadje aan de Nieuwe Waterweg dat bekend is van de sleepboten en de landelijke Sinterklaasintocht. De bevolking is relatief grijs: in de Sluispolder en de Kapelpolder wonen veel mensen die er in de jaren zestig en zeventig kwamen en nu tachtig zijn, vaak in een flat waar het wifi-signaal aan de galerijkant sterk is en aan de balkonkant wegvalt. In Koningshoek en de Steendijkpolder staan eengezinswoningen, en in Wilgenrijk nieuwe huizen vol slimme apparaten. Onze HBO-student komt bij u thuis, kijkt rustig mee en zorgt dat de tablet, de laptop en de printer weer met elkaar praten. Veelgevraagd in Maassluis: beeldbellen met de kleinkinderen leren, de printer die na een nieuw modem niets meer afdrukt, een nieuwe telefoon overnemen met e-mail en foto\'s, en de DigiD-app voor de zorgverzekeraar of het pensioenfonds. We komen ook langs in de seniorenappartementen rond het centrum en de haven. Sinds de Hoekse Lijn metro is geworden, met haltes Maassluis West, Centrum en Steendijkpolder, zijn we er snel, ook \'s avonds en in het weekend.',
    highlights: ['Nationaal Sleepvaart Museum', 'Sinterklaasintocht (landelijk)', 'Stadshart aan de haven']
  },
  'capelle-aan-den-ijssel': {
    population: 67000,
    region: 'Rijnmond',
    neighborhoods: ['Schollevaar', 'Schenkel', 'Fascinatio', 'Capelle-West', 'Middelwatering', 'Oostgaarde', '\'s-Gravenland'],
    description: 'Capelle aan den IJssel ligt direct tegen Rotterdam aan, maar voelt door het vele groen en water als een eigen stad. Middelwatering en Oostgaarde zijn in de jaren zeventig gebouwd, met flats en rijtjeshuizen waar de bewoners van toen nu gepensioneerd zijn en graag zelf bijblijven. In Schollevaar, gebouwd in de jaren tachtig rond het Schollebos, zien we ruime eengezinswoningen waar één router niet genoeg is voor de zolder en de tuin. Fascinatio en \'s-Gravenland zijn nieuwer, met woningen vol apparaten die allemaal op hetzelfde netwerk willen. Onze HBO-student komt gewoon bij u aan huis en helpt bij wat u nodig heeft: een nieuwe laptop klaarzetten en de oude foto\'s overzetten, een printer die niet meer met de tablet wil, of e-mail die op de nieuwe telefoon moet. Beeldbellen met de kleinkinderen oefenen we samen tot het lukt, en de DigiD-app zetten we klaar voor het IJsselland Ziekenhuis en de zorgverzekeraar. Met metrostations als Capelsebrug, Slotlaan en De Terp zijn we overal in Capelle snel, meestal binnen 24 uur en ook \'s avonds en in het weekend.',
    highlights: ['Bedrijvenpark Rivium', 'Schollebos park', 'Hollandse IJssel waterfront']
  },
  'krimpen-aan-den-ijssel': {
    population: 29500,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Lansingh', 'Kortland', 'Oud-Krimpen', 'Langeland', 'Stormpolder'],
    description: 'Krimpen aan den IJssel ligt aan de oostkant van Rotterdam, aan de overkant van de Hollandse IJssel bij de Algerabrug en de stormvloedkering. Het is een echt woondorp: in Lansingh, Kortland en Langeland staan rijen eengezinswoningen uit de jaren zestig tot tachtig waar veel bewoners van het eerste uur nog wonen, vaak inmiddels alleen. Oud-Krimpen langs de dijk heeft oudere huizen met dikke muren en lange gangen waar de wifi bij de achterdeur al ophoudt. Rond het Centrum staan appartementen waar een router in de meterkast het signaal in de woonkamer laat wegzakken. Wat we hier veel doen: een tablet klaarmaken om te beeldbellen met kinderen in Rotterdam of verder weg, e-mail op een nieuwe telefoon zetten, de printer weer verbinden na een modemwissel, de smart-tv aan de streamingdienst hangen en een nieuwe laptop inrichten met alle oude foto’s erop. Onze HBO-student legt alles uit in gewone taal en schrijft de stappen op als u dat prettig vindt. Krimpen is via de Algerabrug en de N210 snel bereikbaar vanuit Rotterdam en Capelle, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Algera-stormvloedkering (Deltawerken)', 'Hollandse IJssel', 'Stormpolder bedrijventerrein']
  },
  'ridderkerk': {
    population: 47000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Drievliet', 'Ridderkerk-West', 'Slikkerveer', 'Bolnes', 'Oostendam', 'Rijsoord'],
    description: 'Ridderkerk ligt op het eiland IJsselmonde, tussen Rotterdam en Dordrecht, en is een van de grijzere gemeenten van de regio: ruim een op de vijf inwoners is 65 jaar of ouder. In Drievliet en Ridderkerk-West wonen veel mensen die er in de jaren zeventig kwamen en nu zelfstandig willen blijven, met een tablet voor beeldbellen en een laptop voor de bankzaken. Slikkerveer en Bolnes liggen langs het water, met oudere huizen en dikke muren waar het wifi-signaal snel wegzakt. In Rijsoord en Oostendam is het dorps, met vrijstaande woningen waar één router de bovenverdieping niet haalt. Onze HBO-student komt bij u thuis en zet het rustig recht: de printer die na een nieuw modem van de provider niets meer afdrukt, e-mail die op de nieuwe telefoon moet, foto\'s van de kleinkinderen die op de tablet moeten komen, of de DigiD-app voor het Maasstad Ziekenhuis en de gemeente. We leggen alles uit in gewone woorden. Via de A15 en A16 en de Waterbus bij De Schans zijn we er snel, meestal binnen 24 uur, ook \'s avonds en in het weekend.',
    highlights: ['Eiland IJsselmonde', 'Watersportmogelijkheden', 'Knooppunt A15/A16']
  },
  'barendrecht': {
    population: 49000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Carnisselande', 'Buitenoord', 'Vrijenburg', 'Molenvliet', 'Riederhoek', 'De Stee'],
    description: 'Barendrecht bestaat uit twee heel verschillende delen: het oude dorp rond de Dorpsstraat en de grote nieuwbouwwijk Carnisselande uit de jaren negentig en daarna. In het oude dorp, met wijken als Buitenoord, Molenvliet en Vrijenburg, wonen veel mensen die er al decennia zijn en die de kinderen naar Carnisselande of verder zagen vertrekken. Beeldbellen op de tablet is daarom populair, net als foto\'s delen met de familie. In Carnisselande staan ruime huizen met meerdere verdiepingen, waar het wifi-signaal uit de meterkast de werkkamer boven niet haalt. Onze HBO-student komt bij u thuis en kijkt hoe uw apparaten met elkaar samenwerken: een nieuwe laptop instellen, de printer die na een nieuw modem van de provider niet meer wil, e-mail op de telefoon zetten of de DigiD-app activeren voor de apotheek en de gemeente. We leggen alles uit in gewone woorden en schrijven de belangrijkste stappen voor u op. Barendrecht heeft een station en tram 25 naar Carnisselande, en de A15 en A29 liggen om de hoek, dus we zijn er meestal binnen 24 uur.',
    highlights: ['Fruit- en groenteveiling', 'Barendrechtse Brug', 'Winkelcentrum Carnisse Veste']
  },
  'albrandswaard': {
    population: 25500,
    region: 'Rijnmond',
    neighborhoods: ['Poortugaal', 'Rhoon', 'Portland'],
    description: 'Albrandswaard is de groene strook tussen Rotterdam-Zuid en de Oude Maas, met Rhoon en Poortugaal als twee dorpen die allebei hun eigen karakter hebben gehouden. In Rhoon staan rond het kasteel en het landgoed veel vrijstaande en twee-onder-een-kapwoningen, ruim genoeg om het wifi-signaal op de eerste verdieping te laten haperen. Poortugaal heeft een oude dorpskern met dikke muren en daaromheen wijken uit de jaren zeventig waar veel bewoners inmiddels gepensioneerd zijn. De nieuwbouw in Portland trekt juist jonge gezinnen met een huis vol apparaten die allemaal tegelijk verbinding willen. Wat wij hier vaak doen: een nieuwe tablet instellen voor het beeldbellen met familie, de printer weer verbinden met het netwerk, e-mail op een nieuwe telefoon zetten en uitleggen hoe de DigiD-app werkt voor de apotheek en de gemeente. Onze HBO-student neemt de tijd, praat in gewone woorden en laat u zelf de stappen doen zodat het blijft hangen. Albrandswaard ligt aan de metrolijn en dicht bij de A15, dus vanuit Rotterdam zijn we er zo; meestal binnen 24 uur, ook in de avond en in het weekend.',
    highlights: ['Kasteel Rhoon', 'Landgoed Rhoon', 'Oude Maas waterfront']
  },
  'lansingerland': {
    population: 65000,
    region: 'Rijnmond',
    neighborhoods: ['Berkel en Rodenrijs', 'Bergschenhoek', 'Bleiswijk', 'Westpolder', 'Meerpolder'],
    description: 'Lansingerland is een jonge gemeente tussen Rotterdam en Den Haag, gevormd uit Berkel en Rodenrijs, Bergschenhoek en Bleiswijk. In de nieuwbouwwijken Westpolder en Meerpolder staan ruime gezinswoningen met drie verdiepingen, waar de router beneden staat en de laptop op zolder het signaal verliest. De oude dorpskernen hebben juist kleinere, oudere huizen met dikke muren, en daar wonen veel mensen die er al lang zijn en het prettig vinden als iemand rustig naast hen komt zitten. Rond de kassen van Bleiswijk zien we vrijstaande woningen waar één router niet genoeg is voor het hele huis. Wat we in Lansingerland vaak doen: een tablet klaarmaken om te beeldbellen met familie, e-mail instellen op een nieuwe telefoon, de printer weer verbinden na een nieuw modem, de smart-tv aan de streamingdienst koppelen en een nieuwe laptop inrichten met alle oude foto’s en documenten. Onze HBO-student legt het uit in gewone taal en laat u de stappen zelf doen, zodat het blijft hangen. Met de RandstadRail en de A12 en N209 is de gemeente vanuit Rotterdam, Zoetermeer en Den Haag snel bereikbaar, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['RandstadRail verbinding', 'Glastuinbouw Bleiswijk', 'Recreatiegebied Rottemeren']
  },
  'nissewaard': {
    population: 85000,
    region: 'Rijnmond',
    neighborhoods: ['Spijkenisse', 'Hekelingen', 'Simonshaven', 'Zuidland', 'Abbenbroek', 'Geervliet', 'Heenvliet'],
    description: 'Nissewaard is de gemeente van Spijkenisse en de dorpen op Voorne-Putten eromheen, aan de rand van de Rotterdamse haven. Spijkenisse groeide in de jaren zeventig en tachtig snel uit tot een stad, en de bewoners van toen wonen er vaak nog steeds, in ruime eengezinswoningen waar de router in de meterkast staat en de wifi boven wegzakt. In het centrum staan appartementen en flats waar het signaal door betonnen vloeren heen moet. Hekelingen, Simonshaven, Zuidland, Abbenbroek, Geervliet en Heenvliet zijn oude dorpen met dikke muren en een hechte gemeenschap, maar zonder computerwinkel om de hoek. Onze HBO-student komt bij u thuis voor een tablet die klaar moet zijn om te beeldbellen met de kleinkinderen, een printer die na een update van de provider niets meer afdrukt, e-mail die op de nieuwe telefoon moet, een smart-tv die het netwerk kwijt is of een nieuwe laptop waar alle oude foto’s en documenten op moeten. Ook de DigiD-app voor het ziekenhuis of het pensioenfonds zetten we samen klaar, in gewone woorden. Met de metro naar Spijkenisse en de A15 en N218 is Nissewaard vanuit Rotterdam snel bereikbaar, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Boekenberg bibliotheek (architectuur)', 'Waterbus naar Rotterdam', 'Bernisse natuurgebied']
  },
  'westvoorne': {
    population: 15000,
    region: 'Rijnmond',
    neighborhoods: ['Rockanje', 'Oostvoorne', 'Tinte', 'Stuifakker', 'De Hoef'],
    description: 'Westvoorne is de kustgemeente op de westpunt van Voorne-Putten, met de badplaatsen Rockanje en Oostvoorne en het kleine Tinte ertussen. Veel bewoners zijn hier na hun werkende leven aan zee gaan wonen, vaak in een vrijstaand huis of bungalow in buurten als Stuifakker en De Hoef, waar één router de serre of de slaapkamer aan de andere kant nooit bereikt. De oude dorpskernen van Rockanje en Oostvoorne hebben kleinere woningen met dikke muren, en langs de duinrand staan huizen waar het signaal in de tuinkamer wegvalt. Kinderen en kleinkinderen wonen meestal in Rotterdam of verder, dus beeldbellen is hier de meest gehoorde wens. Onze HBO-student komt naar u toe om de tablet daarvoor klaar te maken, e-mail op de nieuwe telefoon te zetten, de printer weer aan het werk te krijgen na een modemwissel, de smart-tv aan de streamingdienst te koppelen of een nieuwe laptop in te richten met alle oude foto’s erop. Ook de DigiD-app voor de huisartsenpost of het pensioenfonds regelen we samen, rustig en in gewone woorden. Omdat Westvoorne wat verder van de stad ligt, plannen we ruim via de N57 en de N218 en komen we ook ’s avonds en in het weekend, meestal binnen 24 uur.',
    highlights: ['Stranden van Rockanje', 'Voornes Duin natuurgebied', 'Fort Brielle nabijheid', 'Oostvoornse Meer']
  },

  // === HAAGLANDEN ===
  'den-haag': {
    population: 550000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Scheveningen', 'Loosduinen', 'Laak', 'Segbroek', 'Escamp', 'Leyenburg', 'Benoordenhout', 'Bezuidenhout', 'Haagse Hout', 'Leidschenveen-Ypenburg', 'Mariahoeve'],
    description: 'Den Haag is de stad van regering, strand en statige lanen, met stadsdelen die onderling sterk verschillen. In Benoordenhout, Haagse Hout en Loosduinen wonen relatief veel ouderen, vaak in ruime appartementen of in een portiekflat waar het wifi-signaal aan de achterkant van de woning niet altijd sterk genoeg is. In Escamp en Mariahoeve staan veel flats uit de jaren zestig en zeventig, met dikke muren die het draadloze netwerk flink afzwakken. Een HBO-student uit ons team komt bij u langs, bekijkt waar de router staat en zorgt dat u ook in de slaapkamer gewoon kunt internetten. Andere vragen die we in Den Haag vaak horen: een nieuwe laptop uit de doos halen en netjes klaarzetten, de printer die na een verhuizing binnen de stad niet meer met de laptop wil praten, of de DigiD-app installeren zodat u zaken met de gemeente en de zorgverzekeraar vanuit uw stoel kunt regelen. Ook helpen we graag met beeldbellen op de tablet, zodat u de kleinkinderen in Scheveningen of ver daarbuiten ziet opgroeien. Met de tram, RandstadRail en de fiets zijn we overal in de stad snel, en we komen ook \'s avonds en in het weekend.',
    highlights: ['Binnenhof', 'Vredespaleis', 'Scheveningen strand', 'Mauritshuis', 'Madurodam']
  },
  'delft': {
    population: 104000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Wippolder', 'Voorhof', 'Buitenhof', 'TU-wijk', 'Tanthof', 'Vrijenban', 'Hof van Delft'],
    description: 'Delft is een stad waar oude grachten en nieuwe techniek naast elkaar bestaan, en dat zien we terug in de huizen waar we komen. In de binnenstad zijn de woningen smal en hoog, met dikke muren die het wifi-signaal tegenhouden voordat het de bovenverdieping bereikt. In Voorhof en Buitenhof staan veel galerijflats uit de jaren zestig, waar bewoners van het eerste uur nu vaak alleen wonen en graag iemand aan tafel hebben die de tijd neemt. In Tanthof en Hof van Delft zien we meer eengezinswoningen, waar de laptop op zolder en de printer beneden elkaar niet kunnen vinden. Onze HBO-studenten helpen graag met een tablet voor het beeldbellen, het instellen van e-mail op de telefoon of de DigiD-app voor de apotheek en de gemeente. Ook een nieuwe laptop uit de doos halen en alle oude foto\'s en documenten overzetten doen we samen met u, stap voor stap, in gewone woorden. Delft is compact en goed bereikbaar met tram 1 en 19, dus de student is meestal binnen 24 uur bij u, ook \'s avonds en in het weekend.',
    highlights: ['Delfts Blauw aardewerk', 'TU Delft campus', 'Nieuwe Kerk (Koninklijke grafkelder)', 'Vermeer Centrum']
  },
  'rijswijk': {
    population: 55000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Bomenbuurt', 'Muziekbuurt', 'Stationskwartier', 'Plaspoelpolder', 'Te Werve', 'Oud Rijswijk', 'Steenvoorde', 'RijswijkBuiten'],
    description: 'Rijswijk ligt ingeklemd tussen Den Haag en Delft en is een van de meer vergrijsde gemeenten van de regio. Langs de Generaal Spoorlaan en in Steenvoorde en Te Werve staan veel flats en seniorenappartementen uit de jaren zestig, waar bewoners al lang wonen en vaak zelfstandig hun zaken willen blijven regelen. In Oud Rijswijk zien we juist oude, smalle huizen rond de Herenstraat, waar de router beneden staat en het signaal boven wegvalt. In de nieuwe wijk RijswijkBuiten wonen gezinnen die willen dat de laptop, de printer en de tablet gewoon met elkaar praten. Onze HBO-student komt bij u thuis en helpt bij wat u nodig heeft: een nieuwe laptop uit de doos en klaarzetten, de printer die na een verhuizing binnen Rijswijk niet meer meewerkt, of e-mail die op de nieuwe telefoon moet komen. Beeldbellen met de kleinkinderen leggen we rustig uit, en de DigiD-app zetten we samen aan voor de zorgverzekeraar en MijnOverheid. Met tram 1 en 17 en station Rijswijk zijn we er snel, ook \'s avonds en in het weekend.',
    highlights: ['Vrede van Rijswijk (1697)', 'In de Bogaard winkelcentrum', 'Plaspoelpolder bedrijvengebied']
  },
  'leidschendam-voorburg': {
    population: 76000,
    region: 'Haaglanden',
    neighborhoods: ['Leidschendam-Centrum', 'Voorburg', 'Stompwijk', 'De Heuvel', 'Prinsenhof', 'Duivenvoorde', 'Klein Plaspoelpolder'],
    description: 'Leidschendam-Voorburg is de groene buurgemeente van Den Haag, met Voorburg als een van de oudste woonplaatsen van het land en Leidschendam als dorp aan de Vliet. In Voorburg staan rond het Huygenskwartier veel statige herenhuizen en oudere appartementen met dikke muren en hoge plafonds, waar de wifi op de bovenverdieping wegvalt. Leidschendam-Centrum, De Heuvel en Prinsenhof zijn gebouwd in de jaren zestig en zeventig, met flats en rijtjeshuizen waar veel bewoners van het eerste uur nu alleen wonen. In Stompwijk en rond Duivenvoorde is het landelijk, met vrijstaande huizen waar één router niet volstaat. Onze HBO-student komt bij u thuis voor een tablet die klaar moet zijn om te beeldbellen met de kleinkinderen, een printer die na een update stil is gevallen, e-mail die op de nieuwe telefoon moet of een smart-tv die het netwerk kwijt is. Ook een nieuwe laptop inrichten met alle oude foto’s en de DigiD-app voor het ziekenhuis of de gemeente doen we samen, in gewone woorden. Met tram 2 en 6, de RandstadRail en de A4 is de gemeente vanuit Den Haag en Leiden snel bereikbaar, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Forum Hadriani (Romeinse stad)', 'Huygenskwartier', 'De Vliet waterweg', 'Mall of the Netherlands']
  },
  'wassenaar': {
    population: 27000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Duinrell', 'De Kieviet', 'Maaldrift', 'Rijksdorp', 'Kerkehout', 'Oud-Wassenaar'],
    description: 'Wassenaar is een groen dorp tussen Den Haag en Leiden, omringd door duinen, bossen en landgoederen, waar veel mensen na een druk werkend leven zijn neergestreken. In villawijken als De Kieviet, Rijksdorp en Oud-Wassenaar staan grote, vrijstaande huizen met dikke muren en meerdere verdiepingen, waar één router nooit het hele huis bereikt. Het Centrum heeft oudere dorpswoningen en appartementen, en in Kerkehout en rond Maaldrift wonen veel bewoners die er al decennia zijn en graag iemand naast zich hebben die rustig uitlegt. Bij Duinrell en aan de rand van Meijendel staan huizen waar de tuinkamer of de werkkamer geen bereik heeft. Onze HBO-student komt bij u thuis om de wifi in het hele huis werkend te krijgen, een tablet klaar te maken om te beeldbellen met kinderen in het buitenland, e-mail op de nieuwe telefoon te zetten, de printer weer te verbinden of de smart-tv aan de streamingdienst te koppelen. Ook een nieuwe laptop inrichten met alle oude foto’s en de DigiD-app voor het ziekenhuis in Leiden of Den Haag doen we samen, in gewone woorden. Via de N44 en de A44 is Wassenaar vanuit Den Haag en Leiden snel bereikbaar, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Duinrell attractiepark', 'Landgoed De Horsten', 'Meijendel duingebied', 'Ambassadewijk']
  },
  'pijnacker-nootdorp': {
    population: 55000,
    region: 'Haaglanden',
    neighborhoods: ['Pijnacker', 'Nootdorp', 'Delfgauw', 'Klapwijk', 'Ackerswoude', 'Emerald', 'Keijzershof'],
    description: 'Pijnacker-Nootdorp ligt tussen Delft, Zoetermeer en Den Haag en is de afgelopen jaren hard gegroeid met wijken als Keijzershof, Ackerswoude en Emerald. In die nieuwbouw staan ruime gezinswoningen met drie verdiepingen, waar de router in de meterkast zit en de laptop op zolder het signaal verliest. De oude kernen van Pijnacker en Nootdorp hebben juist kleinere huizen met dikke muren, en daar wonen veel mensen die er al lang zijn en het prettig vinden als iemand de tijd neemt. Delfgauw is gegroeid tegen Delft aan, en Klapwijk heeft woningen uit de jaren zeventig en tachtig waar de bewoners van toen inmiddels gepensioneerd zijn. Wat we hier vaak doen: een tablet klaarmaken om te beeldbellen met familie, e-mail instellen op een nieuwe telefoon, de printer weer verbinden na een modemwissel, de smart-tv aan de streamingdienst koppelen en een nieuwe laptop inrichten met alle oude foto’s en documenten. Onze HBO-student legt alles uit in gewone woorden en laat u de stappen zelf doen. Met de RandstadRail-haltes en de A12 en N470 is de gemeente vanuit Delft, Zoetermeer en Den Haag snel te bereiken, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['RandstadRail haltes', 'Dobbeplas recreatiegebied', 'Glastuinbouwgebied', 'Ackerswoude ecowijk']
  },
  'midden-delfland': {
    population: 20000,
    region: 'Haaglanden',
    neighborhoods: ['Maasland', 'Schipluiden', 'Den Hoorn', 'Woudse Polder'],
    description: 'Midden-Delfland is het open poldergebied tussen Delft, Den Haag en Rotterdam, met Maasland, Schipluiden en Den Hoorn als dorpen te midden van weilanden en koeien. Maasland heeft een oude kern rond de kerk en de molen, met dikke muren waar het wifi-signaal maar moeilijk doorheen komt. Schipluiden ligt aan de Gaag en heeft naast oude dijkhuizen ook nieuwere wijken waar de laptop boven het signaal van de router beneden kwijtraakt. Den Hoorn is de afgelopen jaren gegroeid tegen Delft aan, met gezinswoningen vol apparaten die allemaal verbinding willen. Buiten de dorpen staan boerderijen en vrijstaande huizen in de Woudse Polder waar één router de bijkeuken of de serre nooit haalt. Veel bewoners wonen er al generaties, en kinderen zitten in Delft of verder weg, dus beeldbellen is een veelgehoorde wens. Onze HBO-student maakt de tablet daarvoor klaar, zet e-mail op de nieuwe telefoon, krijgt de printer weer aan de praat en koppelt de smart-tv aan de streamingdienst. Ook een nieuwe laptop met alle oude foto’s erop richten we samen in, rustig en in gewone taal. Via de A4, de A20 en de N468 is Midden-Delfland vanuit Delft en Rotterdam snel bereikbaar, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Open polderlandschap', 'Commandeursmolen Maasland', 'Kanoroutes door polders', 'Boerderijwinkels']
  },
  'westland': {
    population: 112000,
    region: 'Haaglanden',
    neighborhoods: ['Naaldwijk', 'Monster', 's-Gravenzande', 'De Lier', 'Wateringen', 'Honselersdijk', 'Poeldijk', 'Ter Heijde', 'Kwintsheul', 'Maasdijk'],
    description: 'Westland is de glazen stad van Nederland, met kassen zover het oog reikt en tien dorpen die elk hun eigen kern en gemeenschap hebben. Naaldwijk is het grootste dorp, met een oud centrum en woonwijken eromheen waar veel bewoners al sinds de bouw wonen. ’s-Gravenzande, Monster en Ter Heijde liggen aan de kust, met huizen waar de zeewind en dikke muren de wifi geen goed doen. De Lier, Wateringen, Honselersdijk, Poeldijk, Kwintsheul en Maasdijk zijn tuindersdorpen waar naast oude woningen ook veel nieuwbouw staat, vaak ruim en met een router in de meterkast die de bovenverdieping niet haalt. Veel Westlanders hebben een tuinbouwbedrijf gehad en wonen nu in een groot huis met een tuinkamer waar het internet ophoudt. Onze HBO-student komt bij u thuis voor een tablet die klaar moet zijn om te beeldbellen met de kleinkinderen, een printer die na een nieuw modem niets meer doet, e-mail die op de nieuwe telefoon moet, een smart-tv die de streamingdienst niet vindt of een nieuwe laptop waar alle oude foto’s op moeten. We leggen alles uit in gewone taal en laten u het zelf proberen. Via de N213, de N211 en de A20 zijn de dorpen vanuit Den Haag en Delft snel bereikbaar, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Grootste kassengebied ter wereld', 'Varend Corso', 'Strand van Monster en Ter Heijde', 'Flora Holland veiling']
  },
  'zoetermeer': {
    population: 127000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Meerzicht', 'Buytenwegh', 'Seghwaert', 'Stadshart', 'Rokkeveen', 'Oosterheem', 'Palenstein', 'Driemanspolder'],
    description: 'Zoetermeer groeide in vijftig jaar van een dorp aan de Dorpsstraat uit tot de derde stad van Zuid-Holland. De mensen die in de jaren zeventig als jong gezin in Meerzicht, Buytenwegh of Seghwaert kwamen wonen, zijn nu gepensioneerd, en daardoor zien we hier veel vragen van senioren die de digitale wereld willen bijhouden zonder iemand lastig te vallen. In de flats van Palenstein en Meerzicht zorgt betonbouw ervoor dat wifi niet verder komt dan de woonkamer. In Rokkeveen en Oosterheem gaat het vaker om een groot huis met een werkkamer op zolder waar de laptop het niet doet. Onze HBO-student komt langs, kijkt mee en lost het ter plekke op. Veel Zoetermeerders vragen ons om de tablet in te richten voor beeldbellen met de kinderen, de printer weer aan de praat te krijgen, e-mail op de telefoon te zetten of de DigiD-app te installeren voor MijnOverheid en de zorgverzekeraar. Met RandstadRail 3 en 4 en de A12 zijn we vanuit Den Haag en Leiden snel bij u, ook \'s avonds en in het weekend.',
    highlights: ['SnowWorld indoor skihal', 'Stadshart winkelcentrum', 'RandstadRail naar Den Haag', 'Buytenpark recreatie']
  },

  // === HOLLAND RIJNLAND / LEIDSE REGIO ===
  'leiden': {
    population: 126000,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Leiden-Noord', 'Merenwijk', 'Stevenshof', 'Roomburg', 'De Kooi', 'Pancras-West', 'Mors', 'Professorenwijk', 'Zuidwest'],
    description: 'Leiden is een universiteitsstad met een binnenstad vol grachten, hofjes en smalle straten. In die oude panden zijn de muren dik en zit de router vaak beneden bij de voordeur, terwijl u boven wilt lezen op de tablet. In de Merenwijk, gebouwd in de jaren zeventig, wonen veel mensen van het eerste uur die nu met pensioen zijn en graag bijblijven. In de Stevenshof en Roomburg zien we jongere gezinnen naast oudere bewoners, en in de Professorenwijk en Burgemeesterswijk grote huizen waar één wifipunt niet genoeg is. Onze HBO-studenten kennen de stad goed en fietsen overal naartoe. Ze helpen bijvoorbeeld met een nieuwe laptop die ingesteld moet worden, foto\'s van de oude computer overzetten, een printer die weigert na een nieuw modem, of de DigiD-app voor het LUMC en MijnOverheid. Beeldbellen met de kleinkinderen leren we u stap voor stap, en we schrijven de stappen op zodat u ze later kunt nalezen. De student is meestal binnen 24 uur bij u, ook \'s avonds en in het weekend.',
    highlights: ['Universiteit Leiden (1575)', 'Rijksmuseum van Oudheden', 'Naturalis', 'Rembrandt geboorteplaats', 'Hortus Botanicus']
  },
  'leiderdorp': {
    population: 27500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Elisabethhof', 'Ouderzorg', 'Voorhof', 'Buitenhof', 'Binnenhof', 'Zijlkwartier', 'Kerkwijk', 'Leyhof'],
    description: 'Leiderdorp grenst direct aan Leiden, maar heeft een eigen dorps karakter met de Winkelhof als middelpunt en het Alrijne ziekenhuis om de hoek. Wijken als Ouderzorg, Voorhof en Buitenhof zijn in de jaren zestig en zeventig gebouwd en hier wonen veel mensen die er sinds het begin zijn; zij willen graag zelf hun zaken met de zorgverzekeraar en de gemeente online regelen. In Elisabethhof en de Leyhof staan nieuwere gezinswoningen waar meerdere laptops, telefoons en een printer op hetzelfde netwerk moeten werken. Onze HBO-student komt bij u thuis en kijkt naar de hele situatie: waar staat de router, waarom valt de tablet in de slaapkamer uit, en waarom drukt de printer wel vanaf de laptop maar niet vanaf de telefoon. Ook een nieuwe laptop uit de doos halen en de oude documenten overzetten, e-mail op de telefoon zetten, beeldbellen met de kleinkinderen uitleggen en de DigiD-app activeren voor het ziekenhuisportaal doen we rustig samen. Leiderdorp ligt aan de A4 en is vanaf Leiden Centraal met de bus zo bereikt, dus we zijn er meestal binnen 24 uur, ook \'s avonds en in het weekend.',
    highlights: ['Winkelcentrum Winkelhof', 'Alrijne Ziekenhuis Leiderdorp', 'Park De Houtkamp', 'Bio Science Park nabijheid'],
  },
  'oegstgeest': {
    population: 24500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Poelgeest', 'Haaswijk', 'Morsebel', 'Nieuw-Rhijngeest', 'Endegeest'],
    description: 'Oegstgeest is een groen, welvarend dorp tegen Leiden aan, met landgoederen, brede lanen en relatief veel oudere inwoners die hier al lang wonen. In Haaswijk en Morsebel staan ruime eengezinswoningen uit de jaren zeventig en tachtig, in Poelgeest en Nieuw-Rhijngeest nieuwere huizen en appartementen, en rond de Terweeweg en het oude dorp vrijstaande villa\'s met dikke muren en meerdere verdiepingen. Daar komt het wifi-signaal van de router in de hal zelden op de bovenste etage. Onze HBO-student komt langs, plaatst waar nodig een extra punt en laat u zien dat de tablet daarna in de tuin ook werkt. Veel Oegstgeestenaren vragen ons om te helpen met beeldbellen met kinderen die in het buitenland wonen, met een nieuwe laptop die klaargezet moet worden, met een printer die na een update niet meer met de laptop wil, of met e-mail op de nieuwe telefoon. Ook de DigiD-app voor het LUMC en MijnOverheid stellen we samen rustig in. Oegstgeest ligt aan de A44 en op fietsafstand van Leiden Centraal, dus we zijn er meestal binnen 24 uur.',
    highlights: ['Landgoed Endegeest', 'Poelgeest kasteel', 'Rijn- en Schiekanaal', 'Groene villawijken']
  },
  'voorschoten': {
    population: 25500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Krimwijk', 'Bijdorp', 'Leidseweg-Noord', 'Vlietwijk', 'Starrenburg'],
    description: 'Voorschoten is een rustig, groen dorp tussen Leiden en Den Haag, gelegen langs de Vliet en omringd door landgoederen. In het Centrum en langs de Leidseweg staan oudere huizen en villa’s met dikke muren en hoge plafonds, waar het wifi-signaal op de eerste verdieping al wegvalt. Krimwijk, Bijdorp en Vlietwijk zijn gebouwd in de jaren zestig en zeventig, met rijtjeshuizen en flats waar veel bewoners van het eerste uur nu gepensioneerd zijn en graag iemand aan tafel hebben die de tijd neemt. Starrenburg en Leidseweg-Noord zijn nieuwer en ruimer, met gezinswoningen waar de laptop boven en de printer beneden elkaar niet vinden. Onze HBO-student komt bij u thuis voor een tablet die klaar moet zijn om te beeldbellen met de kleinkinderen, e-mail die op de nieuwe telefoon moet, een printer die na een modemwissel niets meer doet, een smart-tv die de streamingdienst niet vindt of een nieuwe laptop waar alle oude foto’s en documenten op moeten. Ook de DigiD-app voor het ziekenhuis in Leiden of de gemeente zetten we samen klaar, in gewone woorden. Met het station aan de lijn Leiden–Den Haag en de A4 en N447 is Voorschoten snel bereikbaar, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Landgoed Berbice', 'Vlietland recreatiegebied', 'Station Voorschoten', 'Duivenvoordecorridor']
  },
  'zoeterwoude': {
    population: 8500,
    region: 'Holland Rijnland',
    neighborhoods: ['Zoeterwoude-Dorp', 'Zoeterwoude-Rijndijk', 'Gelderswoude', 'Weipoort'],
    description: 'Zoeterwoude is een kleine gemeente van polders en twee dorpen direct ten zuiden van Leiden, bekend als thuisbasis van de grote brouwerij. Zoeterwoude-Dorp heeft een oude kern rond de kerk met huizen met dikke muren, en daaromheen straten uit de jaren zestig en zeventig waar veel bewoners al vanaf het begin wonen. Zoeterwoude-Rijndijk ligt langs de Oude Rijn tegen Leiden aan, met diepe dijkwoningen en nieuwere appartementen waar de router in de meterkast het signaal in de woonkamer laat wegzakken. In Gelderswoude en Weipoort staan boerderijen en vrijstaande huizen in het open veenweidegebied, waar één router de bijkeuken of de bovenverdieping niet haalt. Kinderen zitten vaak in Leiden of verder weg, dus beeldbellen is een veelgehoorde vraag. Onze HBO-student komt bij u thuis om de tablet daarvoor klaar te maken, e-mail op de nieuwe telefoon te zetten, de printer weer te verbinden na een nieuw modem, de smart-tv aan de streamingdienst te koppelen of een nieuwe laptop in te richten met alle oude foto’s erop. Ook de DigiD-app voor het ziekenhuis in Leiden zetten we samen klaar, in gewone taal. Via de A4 en de N206 is Zoeterwoude vanuit Leiden in een paar minuten bereikbaar, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Heineken brouwerij', 'Polderlandschap', 'Zoeterwoude-Dorp historische kern']
  },
  'kaag-en-braassem': {
    population: 27500,
    region: 'Holland Rijnland',
    neighborhoods: ['Roelofarendsveen', 'Leimuiden', 'Rijnsaterwoude', 'Oude Wetering', 'Kaag', 'Bilderdam', 'Hoogmade', 'Woubrugge'],
    description: 'Kaag en Braassem is een gemeente van water en dorpen, met de Kagerplassen aan de ene kant en het Braassemermeer aan de andere. Roelofarendsveen is de grootste kern, met een lange lintbebouwing en nieuwere wijken erachter waar de wifi de achterste slaapkamer niet haalt. Leimuiden en Oude Wetering liggen aan de Ringvaart en hebben veel oudere woningen met dikke muren, terwijl Kaag, Hoogmade, Woubrugge, Rijnsaterwoude en Bilderdam echte dorpjes zijn waar iedereen elkaar kent en een computerwinkel ver weg is. Veel bewoners zijn er geboren en getogen, en de kinderen wonen inmiddels in Leiden, Alphen of de Haarlemmermeer. Onze HBO-student komt bij u thuis om een tablet klaar te maken voor het beeldbellen, de printer weer aan de praat te krijgen na een nieuw modem, de smart-tv aan de streamingdienst te koppelen of een nieuwe laptop in te richten met alle foto’s van de oude computer. E-mail op de telefoon en de DigiD-app voor de apotheek regelen we ook, rustig en in gewone taal. Via de A4 en de N207 is de gemeente vanuit Leiden en Alphen snel bereikbaar, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Kagerplassen', 'Braassemermeer', 'Eiland van Kaag', 'Watersportcentrum']
  },

  // === BOLLENSTREEK ===
  'noordwijk': {
    population: 43000,
    region: 'Bollenstreek',
    neighborhoods: ['Noordwijk aan Zee', 'Noordwijk-Binnen', 'Noordwijkerhout', 'De Zilk', 'Boechorst', 'Offem', 'Zeewijk'],
    description: 'Noordwijk is een badplaats met een hoog aandeel senioren, en dat merken we: veel mensen zijn hier na hun werkzame leven aan zee komen wonen. In Noordwijk aan Zee staan appartementen met zicht op de boulevard, waar de zeewind heerlijk is maar de betonnen vloeren het wifi-signaal tussen de kamers tegenhouden. In Noordwijk-Binnen, Boechorst en Offem zien we ruime huizen met een tuin, waar de laptop boven de router beneden niet vindt. Sinds de fusie horen ook Noordwijkerhout en De Zilk bij de gemeente, met dorpse straten en veel eigen woningen. Onze HBO-student komt bij u thuis en helpt bij wat er speelt: een tablet inrichten om te beeldbellen met de kleinkinderen die verderop in het land wonen, een printer die na jaren ineens weigert, foto\'s van het strand van de telefoon naar de laptop zetten, of e-mail op de nieuwe telefoon. Voor de DigiD-app, het zorgportaal van de huisarts en bankieren op de telefoon nemen we ruim de tijd. Noordwijk ligt aan de N206 dicht bij Leiden, dus we zijn er meestal binnen 24 uur.',
    highlights: ['Noordwijk aan Zee strand', 'Space Expo (ESA)', 'Bollenvelden', 'Vuurtoren']
  },
  'katwijk': {
    population: 66000,
    region: 'Bollenstreek',
    neighborhoods: ['Katwijk aan Zee', 'Katwijk aan den Rijn', 'Rijnsburg', 'Valkenburg', 'Hoornes', 'De Noord'],
    description: 'Katwijk is een kustgemeente waar het oude vissersdorp Katwijk aan Zee, het landelijke Katwijk aan den Rijn, het bloemendorp Rijnsburg en het jonge Valkenburg samen één gemeente vormen. Aan zee staan veel smalle, diepe huizen uit de tijd van de visserij, met dikke muren en een router die de bovenverdieping niet bereikt. In Hoornes en De Noord wonen veel mensen die er al sinds de bouw in de jaren zestig en zeventig zitten en die graag iemand aan tafel hebben die de tijd neemt. Rijnsburg heeft ruime eengezinswoningen waar de laptop boven en de printer beneden elkaar niet vinden. Onze HBO-student komt bij u thuis voor een tablet die klaar moet zijn om met de kleinkinderen te beeldbellen, een e-mailadres dat op de nieuwe telefoon moet, een printer die na een update van de provider niets meer doet of een smart-tv die het netwerk kwijt is. Ook de DigiD-app voor de huisarts en het ziekenhuis in Leiden zetten we samen klaar, stap voor stap, in gewone woorden. Katwijk ligt aan de N206 en vlak bij de A44, en de bus naar Leiden rijdt vaak, dus we zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Strand van Katwijk', 'Andreaskerk (visserskerk)', 'Ruïne van Valkenburg', 'Rijnmonding bij zee']
  },
  'hillegom': {
    population: 22000,
    region: 'Bollenstreek',
    neighborhoods: ['Centrum', 'Elsbroek', 'Hillegom-Zuid', 'Pastoorslaan-buurt', 'Meer en Duin', 'De Zanderij'],
    description: 'Hillegom is een bollendorp tussen Haarlem en Leiden, met een gezellige Hoofdstraat en in het voorjaar velden vol kleur. Veel Hillegommers wonen al hun hele leven in het dorp, in wijken als Elsbroek, Treslong en Hillegom-Zuid, en zien de kinderen en kleinkinderen in Haarlem, Leiden of ver daarbuiten. Beeldbellen op de tablet is hier dan ook een veelgehoorde wens, en wij leren het u geduldig. De woningen in Hillegom zijn vaak ruime eengezinshuizen met een diepe tuin, waar de router vooraan in de gang staat en het signaal in de tuinkamer verdwijnt. Onze HBO-student kijkt mee, plaatst zo nodig een versterker en test of de tablet daarna overal werkt. Andere vragen die we vaak krijgen: een nieuwe laptop uit de doos en klaarzetten, een printer die na de overstap naar een andere provider niet meer afdrukt, e-mail die op de nieuwe telefoon moet en de DigiD-app voor de huisarts of de belastingaangifte. Hillegom heeft een eigen station aan de lijn Leiden-Haarlem en ligt aan de N208, dus we zijn er meestal binnen 24 uur, ook \'s avonds en in het weekend.',
    highlights: ['Bollenvelden in voorjaar', 'Keukenhof nabijheid', 'Vogelenzang bosgebied', 'Treslong landgoed']
  },
  'lisse': {
    population: 23000,
    region: 'Bollenstreek',
    neighborhoods: ['Centrum', 'Poelpolder', 'Meerenburgh', 'Heereweg-gebied', 'Dever-Zuid', 'Geestwater'],
    description: 'Lisse is het dorp van de Keukenhof en de bollenvelden, met in het voorjaar drukte en de rest van het jaar dorpse rust. In wijken als de Poelpolder en rond de Heereweg wonen veel mensen die hier al hun hele leven zijn en nu hun kinderen en kleinkinderen elders in het land hebben. Beeldbellen op de tablet is daarom een van de meest gevraagde dingen waar onze HBO-studenten bij helpen. Ook een printer die na jaren trouwe dienst ineens niet meer wil, een nieuwe laptop die klaargezet moet worden of e-mail die op de nieuwe telefoon moet komen, komen we hier regelmatig tegen. Veel woningen in Lisse zijn ruim gebouwde eengezinshuizen met een tuin, waar het signaal van de router in de tuinkamer of op de bovenverdieping tekortschiet. De student kijkt naar de plek van de router en zet zo nodig een extra versterker neer. Voor de DigiD-app, het zorgportaal van de huisarts of het bankieren op de telefoon nemen we rustig de tijd. Lisse ligt tussen Haarlem en Leiden aan de N208, dus we zijn er meestal binnen 24 uur.',
    highlights: ['Keukenhof (7 miljoen bezoekers/jaar)', 'Bloemencorso', 'Museum De Zwarte Tulp', 'Kasteel Keukenhof']
  },
  'teylingen': {
    population: 38000,
    region: 'Bollenstreek',
    neighborhoods: ['Sassenheim', 'Voorhout', 'Warmond', 'De Kagerdreef', 'Sassenheim-Noord', 'Voorhout-West'],
    description: 'Teylingen bestaat uit Sassenheim, Voorhout en Warmond, drie dorpen op de grens van de Bollenstreek en de Kagerplassen die elk hun eigen sfeer hebben gehouden. Sassenheim heeft een oude dorpskern met dikke muren en daaromheen wijken als Sassenheim-Noord waar veel bewoners al sinds de bouw wonen. Voorhout is de afgelopen jaren gegroeid met Voorhout-West en de omgeving van de Kagerdreef, waar ruime gezinswoningen met drie verdiepingen staan en de wifi op zolder wegvalt. Warmond aan het water heeft veel vrijstaande en oudere huizen waar één router de serre of de bovenverdieping niet haalt. Onze HBO-student komt bij u thuis voor een tablet die klaar moet zijn om te beeldbellen met de kleinkinderen, een e-mailadres dat op de nieuwe telefoon moet, een printer die na een update van de provider stil is gevallen of een smart-tv die het netwerk kwijt is. Ook een nieuwe laptop inrichten met alle oude foto’s en de DigiD-app voor de huisarts of het ziekenhuis in Leiden doen we samen, stap voor stap, in gewone woorden. Teylingen ligt aan de A44 en de N208 en heeft stations in Sassenheim en Voorhout, dus vanuit Leiden en Haarlem zijn we er snel; meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Ruïne van Teylingen', 'Warmond aan de Kagerplassen', 'Bloembollencultuur', 'Kasteel Oud Poelgeest']
  },

  // === GROENE HART ===
  'gouda': {
    population: 74000,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Goverwelle', 'Bloemendaal', 'Plaswijck', 'Kort Haarlem', 'Achterwillens', 'Oosterwei', 'Noord'],
    description: 'Gouda is bekend van kaas, stroopwafels en de Sint-Janskerk, maar wij kennen de stad vooral van de keukentafels. De binnenstad is oud en staat op slappe veengrond, met smalle panden waar het wifi-signaal maar moeilijk door de verdiepingen heen komt. In Bloemendaal en Plaswijck, gebouwd in de jaren zeventig en tachtig, wonen veel gepensioneerden die er al vanaf het begin zitten. In Goverwelle en de nieuwe wijk Westergouwe zien we ruime huizen waar de router beneden staat en de laptop boven niet meedoet. Onze HBO-student komt bij u thuis en zoekt het samen met u uit, in gewone taal. Vaak gaat het om een tablet die klaargemaakt moet worden om te beeldbellen met de kleinkinderen, een printer die na een update van de provider niets meer afdrukt, of e-mail die op de nieuwe telefoon moet worden ingesteld. Ook de DigiD-app voor het Groene Hart Ziekenhuis of de gemeente zetten we rustig met u klaar. Gouda ligt aan de A12 en A20 en heeft een goed station, dus we zijn er meestal binnen 24 uur, ook \'s avonds en in het weekend.',
    highlights: ['Goudse Waag en kaasmarkt', 'Sint-Janskerk (langste glazen)', 'Gouda bij Kaarslicht', 'Stadhuis (een van de oudste van Nederland)']
  },
  'alphen-aan-den-rijn': {
    population: 112000,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Ridderveld', 'Kerk en Zanen', 'De Baronie', 'Oudshoorn', 'Gnephoek', 'Boskoop', 'Hazerswoude-Dorp', 'Hazerswoude-Rijndijk', 'Benthuizen'],
    description: 'Alphen aan den Rijn is de grootste stad van het Groene Hart en sinds de fusie met Boskoop en Rijnwoude een gemeente met veel dorpskernen. Dat betekent dat we hier de ene dag in een flat in Ridderveld staan en de andere dag bij een kwekerswoning in Boskoop of een dijkhuis in Hazerswoude-Rijndijk. Ridderveld is in de jaren zeventig gebouwd en vergrijst nu, en veel bewoners willen leren beeldbellen met kinderen die naar Leiden of Utrecht zijn verhuisd. In Kerk en Zanen wonen jongere gezinnen naast ouderen, in ruime huizen waar het wifi-signaal de tweede verdieping niet haalt. Onze HBO-student komt langs, plaatst waar nodig een versterker en laat zien hoe u de tablet, de laptop en de printer met elkaar laat samenwerken. Ook helpen we met een gloednieuwe laptop die uit de doos moet, met e-mail op de telefoon en met het activeren van de DigiD-app voor het Alrijne ziekenhuis of de belastingaangifte. Alphen ligt aan de N11 en heeft een station aan de lijn Leiden-Utrecht, dus we zijn er meestal binnen 24 uur.',
    highlights: ['Archeon themapark', 'Avifauna vogelpark', 'Boskoop boomkwekerijen', 'Zegerplas recreatieplas']
  },
  'bodegraven-reeuwijk': {
    population: 35000,
    region: 'Groene Hart',
    neighborhoods: ['Bodegraven', 'Reeuwijk-Brug', 'Reeuwijk-Dorp', 'Driebruggen', 'Waarder', 'Nieuwerbrug'],
    description: 'Bodegraven-Reeuwijk ligt midden in het Groene Hart, met de Reeuwijkse Plassen als stille buren van een levendig kaasdorp. Bodegraven zelf heeft een compact centrum met veel oudere woningen langs de Oude Rijn, waar het wifi-signaal moeite heeft met dikke muren en lange gangen. In Reeuwijk-Brug en Reeuwijk-Dorp staan vrijstaande huizen aan het water, vaak met een werkkamer of serre waar het internet niet meer komt. In kleinere kernen als Driebruggen, Waarder en Nieuwerbrug wonen veel mensen die er al decennia zijn en die liever iemand aan tafel hebben dan een helpdesk aan de telefoon. Onze HBO-student komt bij u thuis en helpt met wat er speelt: een tablet klaarmaken om met de kleinkinderen te beeldbellen, een printer die na een update stil is gevallen, de smart-tv aan het netwerk hangen of een nieuwe laptop inrichten met alle oude foto’s erop. We leggen alles uit in gewone taal en schrijven de stappen desgewenst voor u op. Bodegraven ligt aan de A12 en de N11 en heeft een station, dus vanuit Gouda, Alphen en Woerden zijn we er snel; meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Reeuwijkse Plassen', 'Kaasstad Bodegraven', 'Groene Hart fietsroutes', 'Broekvelden natuurgebied']
  },
  'waddinxveen': {
    population: 30000,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Zuidplas', 'Bomenwijk', 'Groenswaard', 'Triangel', 'Park Triangel'],
    description: 'Waddinxveen ligt aan de Gouwe, tussen Gouda en het Groene Hart, en is de laatste jaren flink gegroeid met de wijk Park Triangel. In die nieuwbouw wonen veel gezinnen in ruime woningen met drie verdiepingen, waar de router beneden staat en de laptop op zolder het signaal verliest. Het Centrum, de Bomenwijk en Groenswaard zijn gebouwd in de jaren zestig en zeventig, met rijtjeshuizen en flats waar veel bewoners er al vanaf het begin wonen en inmiddels gepensioneerd zijn. Zuidplas ligt aan de andere kant van het spoor en heeft een mix van oudere en nieuwere woningen. Wat we in Waddinxveen vaak doen: een tablet klaarmaken om te beeldbellen met familie, e-mail instellen op een nieuwe telefoon, de printer weer verbinden na een nieuw modem, de smart-tv aan de streamingdienst koppelen en een nieuwe laptop inrichten met alle oude foto’s en documenten. Ook de DigiD-app voor het Groene Hart Ziekenhuis of de gemeente zetten we samen klaar. Onze HBO-student legt het uit in gewone taal en laat u de stappen zelf doen, zodat het blijft hangen. Waddinxveen heeft twee stations en ligt aan de A12 en de N207, dus vanuit Gouda en Zoetermeer zijn we er snel; meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Park Triangel nieuwbouwwijk', 'Gouwe waterweg', 'Station Waddinxveen', 'Petteplas recreatie']
  },
  'nieuwkoop': {
    population: 28000,
    region: 'Groene Hart',
    neighborhoods: ['Nieuwkoop', 'Nieuwveen', 'Ter Aar', 'Zevenhoven', 'Noorden', 'Woerdense Verlaat', 'Langeraar'],
    description: 'Nieuwkoop is een waterrijke gemeente in het Groene Hart, met de Nieuwkoopse Plassen als stil middelpunt en dorpen die verspreid liggen door het veenweidegebied. Nieuwkoop zelf is een lang lintdorp langs het water, met oudere huizen die diep en smal zijn en waar de wifi bij de achterkamer ophoudt. Ter Aar en Nieuwveen zijn wat groter, met woonwijken uit de jaren zeventig en tachtig waar veel bewoners van het eerste uur nu gepensioneerd zijn. Zevenhoven, Noorden, Langeraar en Woerdense Verlaat zijn kleine kernen waar iedereen elkaar kent en waar een computerwinkel ver weg is. Kinderen en kleinkinderen wonen vaak in Alphen, Utrecht of de Haarlemmermeer, dus beeldbellen staat hoog op het lijstje. Onze HBO-student komt bij u thuis om de tablet daarvoor klaar te maken, e-mail op de nieuwe telefoon te zetten, de printer weer te verbinden na een modemwissel, de smart-tv aan de streamingdienst te koppelen of een nieuwe laptop in te richten met alle oude foto’s erop. We werken rustig, in gewone taal, en laten u de stappen zelf doen. Via de N231 en de N207 is Nieuwkoop vanuit Alphen en Leiden goed bereikbaar; we plannen ruim en zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Nieuwkoopse Plassen (Natura 2000)', 'Veenweidelandschap', 'Ter Aar dorpskern', 'Kanoroutes']
  },
  'krimpenerwaard': {
    population: 56000,
    region: 'Groene Hart',
    neighborhoods: ['Schoonhoven', 'Bergambacht', 'Lekkerkerk', 'Ammerstol', 'Stolwijk', 'Haastrecht', 'Vlist', 'Gouderak', 'Ouderkerk aan den IJssel'],
    description: 'De Krimpenerwaard is een uitgestrekte poldergemeente tussen de Lek en de Hollandse IJssel, met de zilverstad Schoonhoven als historische hoofdplaats. Binnen de oude wallen van Schoonhoven staan smalle, hoge panden waar het wifi-signaal moeite heeft met de verdiepingen. Bergambacht, Lekkerkerk, Stolwijk en Haastrecht zijn dorpen met een oude kern en woonwijken uit de jaren zeventig eromheen, waar veel bewoners inmiddels gepensioneerd zijn. In Ammerstol, Vlist, Gouderak en Ouderkerk aan den IJssel woont men langs de dijk, in diepe huizen waar de router vooraan staat en de woonkamer achteraan geen bereik heeft. De kinderen zitten vaak in Gouda of Rotterdam, dus beeldbellen is een veelgehoorde wens. Onze HBO-student komt bij u thuis om de tablet daarvoor klaar te maken, de printer weer aan het werk te krijgen, de smart-tv aan het netwerk te koppelen of een nieuwe laptop in te richten met alle foto’s van de oude computer. E-mail op de telefoon en de DigiD-app voor de apotheek doen we ook, rustig en in gewone woorden. Via de N207 en de N210 is de gemeente vanuit Gouda en Rotterdam goed bereikbaar; we plannen ruim en zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Zilverstad Schoonhoven', 'Nederlands Zilvermuseum', 'Polderlandschap langs de Lek', 'Haastrecht historisch stadje']
  },

  // === ALBLASSERWAARD-VIJFHEERENLANDEN ===
  'gorinchem': {
    population: 37000,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Haarwijk', 'Wijdschild', 'Stalkaarsen', 'Gildenwijk', 'De Helling', 'Gorinchem-Oost', 'Laag Dalem'],
    description: 'Gorinchem, of Gorkum zoals de bewoners zeggen, is een vestingstad aan de Merwede met wallen die nog helemaal rondom de binnenstad liggen. Binnen die wallen staan oude, hoge panden met dikke muren, waar het wifi-signaal al op de eerste verdieping de moed opgeeft. In Haarwijk, Wijdschild en de Gildenwijk staan woningen uit de jaren zestig en zeventig waar veel bewoners van het eerste uur nog wonen en graag hulp aan tafel krijgen in plaats van aan de telefoon. Stalkaarsen, Gorinchem-Oost en Laag Dalem zijn ruimer opgezet, met gezinswoningen waar de laptop boven en de printer beneden niet met elkaar praten. Onze HBO-student komt bij u thuis voor een tablet die klaargemaakt moet worden om te beeldbellen, een e-mailadres dat op de nieuwe telefoon moet, een smart-tv die niet meer met het netwerk verbindt, of een nieuwe computer waar alle oude foto’s en documenten op moeten. We leggen het uit in gewone taal en herhalen het gerust nog een keer. Gorinchem ligt aan de A15 en de A27 en heeft een eigen station, dus vanuit de Drechtsteden en de Alblasserwaard zijn we er snel; meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Vestingwallen (17e eeuw)', 'Grote Toren (Toren van Gorkum)', 'Merwedefront', 'Vestingmuseum']
  },
  'molenlanden': {
    population: 45000,
    region: 'Alblasserwaard',
    neighborhoods: ['Groot-Ammers', 'Bleskensgraaf', 'Brandwijk', 'Molenaarsgraaf', 'Oud-Alblas', 'Nieuw-Lekkerland', 'Streefkerk', 'Wijngaarden', 'Hoornaar', 'Giessenlanden'],
    description: 'Molenlanden is de grootste poldergemeente van Zuid-Holland, een landschap van dijken, molens en rivieren in de Alblasserwaard met tientallen dorpen. Nieuw-Lekkerland, Streefkerk en Groot-Ammers liggen langs de Lek, met diepe dijkhuizen waar de router vooraan staat en de woonkamer achteraan geen bereik heeft. Bleskensgraaf, Brandwijk, Molenaarsgraaf, Oud-Alblas en Wijngaarden zijn lintdorpen langs het water, waar oude boerderijen en nieuwere woningen elkaar afwisselen. Hoornaar en de kernen van het voormalige Giessenlanden liggen wat oostelijker, allemaal zonder computerwinkel in de buurt. Veel bewoners wonen er al hun hele leven, en kinderen zitten in Dordrecht, Gorinchem of verder weg. Daarom komt onze HBO-student naar u toe: voor een tablet die klaar moet zijn om te beeldbellen, een printer die na een nieuw modem niets meer doet, wifi die in de bijkeuken of op zolder wegvalt, een smart-tv die de streamingdienst niet vindt of een nieuwe laptop waar alle oude foto’s op moeten. We leggen alles uit in gewone woorden en herhalen het gerust nog eens. Omdat de afstanden in de polder groot zijn, plannen we ruim via de A15 en de N214 en komen we ook ’s avonds en in het weekend, meestal binnen 24 uur.',
    highlights: ['Open polderlandschap', 'Dijkdorpen langs de Lek', 'Kinderdijk nabijheid', 'Ruilverkavelingswegen']
  },

  // === HOEKSCHE WAARD ===
  'hoeksche-waard': {
    population: 90000,
    region: 'Hoeksche Waard',
    neighborhoods: ['Oud-Beijerland', 'Strijen', 's-Gravendeel', 'Numansdorp', 'Puttershoek', 'Piershil', 'Klaaswaal', 'Maasdam', 'Mijnsheerenland', 'Westmaas'],
    description: 'De Hoeksche Waard is een eiland van polders en dijkdorpen tussen de Oude Maas, het Spui en het Hollandsch Diep, met Oud-Beijerland als de plaats waar de meeste winkels en voorzieningen zitten. Daaromheen liggen dorpen als Strijen, ’s-Gravendeel, Numansdorp, Puttershoek, Klaaswaal, Maasdam, Mijnsheerenland, Westmaas en het kleine Piershil, elk met een hechte gemeenschap maar zonder computerwinkel in de buurt. Veel bewoners wonen in een ruime eengezinswoning of een vrijstaand huis aan de dijk, waar één router de bovenverdieping of de bijkeuken niet haalt. Kinderen en kleinkinderen wonen vaak aan de overkant van het water, dus beeldbellen staat hoog op het lijstje. Onze HBO-student komt naar u toe voor een tablet die daarvoor klaar moet zijn, een printer die na een update zwijgt, een smart-tv die de streamingdienst niet vindt of een nieuwe laptop waar de oude foto’s op moeten. Ook e-mail op de telefoon en de DigiD-app voor de huisarts of de gemeente zetten we samen klaar, in gewone woorden. Via de Heinenoordtunnel en de A29 is het eiland vanuit Rotterdam en Dordrecht goed bereikbaar; we plannen ruim en zijn er meestal binnen 24 uur, ook ’s avonds en in het weekend.',
    highlights: ['Eiland-karakter', 'Tiengemeten natuureiland', 'Hoeksche Waardse dijken', 'Haringvlietbrug']
  },

  // === GOEREE-OVERFLAKKEE ===
  'goeree-overflakkee': {
    population: 50000,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Middelharnis', 'Sommelsdijk', 'Goedereede', 'Ouddorp', 'Dirksland', 'Stellendam', 'Nieuwe-Tonge', 'Oude-Tonge', 'Stad aan het Haringvliet', 'Den Bommel'],
    description: 'Goeree-Overflakkee is het meest zuidwestelijke eiland van Zuid-Holland, waar de dorpen ruim uit elkaar liggen en de dijken en polders de dienst uitmaken. Middelharnis en Sommelsdijk vormen samen het grootste kerngebied, met een oud centrum aan de haven en woonwijken uit latere jaren eromheen. In Ouddorp en Goedereede wonen veel mensen die na hun werkende leven aan de kust zijn gaan wonen, vaak in een vrijstaand huis waar één router niet toereikend is voor de hele woning. Dirksland, Stellendam, Oude-Tonge, Nieuwe-Tonge, Stad aan het Haringvliet en Den Bommel hebben ieder een eigen dorpsgemeenschap, maar geen computerwinkel om de hoek. Daarom komt onze HBO-student naar u toe: voor een tablet die klaar moet zijn om te beeldbellen met familie op het vasteland, een printer die niets meer afdrukt, wifi die in de tuinkamer wegvalt, of een smart-tv die de streamingdienst niet vindt. Ook e-mail op een nieuwe telefoon en de DigiD-app voor de huisarts of het pensioenfonds regelen we samen, in gewone woorden. Omdat het eiland verder van de stad ligt, plannen we ruim via de Haringvlietbrug of de N57 en komen we ook ’s avonds en in het weekend, meestal binnen 24 uur.',
    highlights: ['Strand van Ouddorp', 'Haringvlietsluizen (Deltawerken)', 'Goedereede vestingstadje', 'Grevelingenmeer watersport']
  },

  // === WESTLAND KERNEN ===
  'naaldwijk': {
    population: 19000,
    region: 'Westland',
    neighborhoods: ['Centrum', 'Kruisbroekweg', 'Verspyckstraat', 'Hoogeland', 'Woerd', 'Dijkweg'],
    description: 'Naaldwijk is de hoofdkern van gemeente Westland en het bestuurscentrum van het grootste kassengebied ter wereld. De levendige stad heeft een gezellig marktplein, moderne winkelvoorzieningen en vormt het hart van de tuinbouw­innovatie in Zuid-Holland.',
    highlights: ['Bestuurscentrum Westland', 'Hoogleraar Van Ammersstraat markt', 'Historisch marktplein', 'Nabij Flora Holland veiling']
  },
  'wateringen': {
    population: 17000,
    region: 'Westland',
    neighborhoods: ['Centrum', 'Wateringse Veld', 'Erasmus­kwartier', 'Kwintsheul-grens', 'Meidoornlaan'],
    description: 'Wateringen ligt aan de rand van Den Haag en combineert een gezellig dorpshart met de moderne nieuwbouwwijk Wateringse Veld. De kern is snel gegroeid door de nabijheid van Den Haag én het Westland en biedt goede voorzieningen voor gezinnen.',
    highlights: ['Wateringse Veld nieuwbouw', 'Ambachtelijk dorpshart', 'Op fietsafstand van Den Haag', 'Tuinbouwtraditie']
  },
  's-gravenzande': {
    population: 19500,
    region: 'Westland',
    neighborhoods: ['Centrum', 'De Gravin', 'Oranjewijk', 'Cornelis van der Lelykade', 'Duintuin', 'De Rijnvaart'],
    description: '\'s-Gravenzande is een van de oudste Westlandse kernen, met een historisch centrum rond de Dorpskerk en directe toegang tot de kust bij Ter Heijde. De stad combineert Westland­traditie met een unieke ligging tussen kassen en duinen.',
    highlights: ['Historisch dorpshart', 'Dorpskerk uit de 13e eeuw', 'Nabij strand Ter Heijde', 'Duintuinbeleving']
  },
  'monster': {
    population: 12500,
    region: 'Westland',
    neighborhoods: ['Centrum', 'Molenslag', 'Poeldijksepolder', 'Monsterse duinen', 'Choorstraat'],
    description: 'Monster is een authentiek Westlands kustdorp met eigen strand aan de Noordzee. De kern combineert dorpsleven, glastuinbouw en duinnatuur en is populair bij bezoekers voor de rustige stranden en fietsroutes langs de kust.',
    highlights: ['Strand van Monster', 'Monsterse duinen', 'Karakteristieke Grote Kerk', 'Bunkers Atlantikwall']
  },
  'de-lier': {
    population: 12500,
    region: 'Westland',
    neighborhoods: ['Centrum', 'Liermolen', 'Kralingerhout', 'Sportlaan', 'Achterdijk'],
    description: 'De Lier is een compact Westlands dorp aan de Lee, bekend om de karakteristieke lintbebouwing en de bloeiende tuinbouwsector. De kern biedt dorpsgezelligheid met gemakkelijke toegang tot Delft, Naaldwijk en Rotterdam.',
    highlights: ['Historische molen', 'Lintbebouwing langs De Lee', 'Familie-tuinbouwbedrijven', 'Centraal in het Westland']
  },

  // === LANSINGERLAND ===
  'berkel-en-rodenrijs': {
    population: 30000,
    region: 'Lansingerland',
    neighborhoods: ['Centrum', 'Meerpolder', 'Rodenrijs', 'Berkel-West', 'Wolfsbospolder', 'Westpolder'],
    description: 'Berkel en Rodenrijs is de grootste kern van gemeente Lansingerland en een van de snelst groeiende woongemeenten van Zuid-Holland. Directe RandstadRail-verbinding naar Den Haag en Rotterdam maakt het een geliefde forensen­gemeente.',
    highlights: ['RandstadRail naar Den Haag/Rotterdam', 'Nieuwbouwwijken', 'Sportcomplex De Meerpolder', 'Glastuinbouw']
  },
  'bergschenhoek': {
    population: 20000,
    region: 'Lansingerland',
    neighborhoods: ['Centrum', 'Boterdorp', 'Naardervaart', 'Wilderszijde', 'Parkzoom', 'Vinex-wijken'],
    description: 'Bergschenhoek ligt ingeklemd tussen Rotterdam en Bleiswijk en heeft zich in twee decennia getransformeerd van dorp tot moderne woongemeente. Groene wijken, RandstadRail-station en Rotterdam The Hague Airport op fietsafstand.',
    highlights: ['Rottezoom recreatiegebied', 'RandstadRail-station', 'Rotterdam Airport nabij', 'Moderne Vinex-woningen']
  },
  'bleiswijk': {
    population: 11500,
    region: 'Lansingerland',
    neighborhoods: ['Centrum', 'Prisma', 'Zoetermeerse Meerpolder', 'Dorpsstraat', 'Merenweg'],
    description: 'Bleiswijk is de kleinste Lansingerlandse kern en het glastuinbouw­hart van de gemeente. Prisma bedrijventerrein en de Zoetermeerse Plas grenzen aan het dorp, dat een rustige woonomgeving biedt met goede autobereikbaarheid.',
    highlights: ['Prisma bedrijventerrein', 'Zoetermeerse Plas', 'Bloeiende glastuinbouw', 'Nabij A12']
  },

  // === PIJNACKER-NOOTDORP ===
  'pijnacker': {
    population: 27000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Klapwijk', 'Keijzershof', 'Ackerswoude', 'Tolhek', 'Koningshof', 'Emerald'],
    description: 'Pijnacker is de hoofdkern van gemeente Pijnacker-Nootdorp en heeft de afgelopen jaren een sterke groeispurt doorgemaakt met nieuwbouwwijken Ackerswoude en Keijzershof. RandstadRail verbindt Pijnacker direct met Den Haag Centraal en Rotterdam.',
    highlights: ['RandstadRail Pijnacker Centrum', 'Ackerswoude nieuwbouw', 'Bieslandse Bos recreatie', 'Prachtige tuinbouwlint']
  },
  'nootdorp': {
    population: 16500,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Craeyenburch', 'Nieuw Nootdorp', 'Ypenburg-grens', 'Vlietrand'],
    description: 'Nootdorp is een gezellige woonkern aan de rand van Den Haag, met directe verbinding naar de A12. De historische dorpskern rondom de Kerkweg contrasteert met de nieuwbouwwijk Craeyenburch en biedt een groene, kindvriendelijke omgeving.',
    highlights: ['Historisch dorpshart', 'Craeyenburch nieuwbouw', 'Op fietsafstand van Ypenburg', 'Nabij A12']
  },

  // === VOORNE AAN ZEE ===
  'hellevoetsluis': {
    population: 40000,
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Kooistee', 'Boomgaard', 'Nieuwenhoorn', 'Oudenhoorn', 'Ravense Hoek', 'Struijtenburgh'],
    description: 'Hellevoetsluis groeide in de jaren zeventig en tachtig in korte tijd uit rond de oude vesting aan het Haringvliet. De bewoners van toen wonen er vaak nog steeds, waardoor het een van de plaatsen op Voorne is waar we veel senioren helpen. In wijken als Kooistee, De Struyten en Ravense Hoek staan ruime eengezinswoningen waar de router in de meterkast staat en het signaal op de bovenverdieping wegzakt. In het centrum en rond de haven zijn de woningen ouder en soms lastig van binnen te bekabelen. Wij sturen een HBO-student die rustig meekijkt en de wifi zo neerzet dat u ook in de tuinkamer kunt internetten. Vaak gestelde vragen hier: een tablet klaarmaken om te beeldbellen met de kleinkinderen die in Rotterdam of verder weg wonen, de printer die na een nieuw modem van de provider niets meer afdrukt, e-mail op een nieuwe telefoon zetten en de DigiD-app activeren voor de huisartsenpost of het pensioenfonds. Omdat Hellevoetsluis wat verder van de grote stad ligt, plannen we ruim en komen we ook \'s avonds en in het weekend, meestal binnen 24 uur.',
    highlights: ['Historische vesting Hellevoetsluis', 'Droogdok Jan Blanken', 'Haringvliet strand', 'Watersporthaven']
  },
  'brielle': {
    population: 17000,
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Slagveld', 'Rugge', 'Zwartewaal', 'Vierpolders'],
    description: 'Brielle is een van de best bewaarde vestingsteden van Nederland en de plek waar in 1572 de Watergeuzen de stad innamen — het begin van de Nederlandse onafhankelijkheid. De monumentale binnenstad, complete vestingwallen en waterrijke omgeving maken Brielle uniek.',
    highlights: ['Volledig behouden vestingwal', 'Watergeuzen 1 april', 'Historisch Museum Den Briel', 'Brielse Meer']
  },
  'oostvoorne': {
    population: 9500,
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Nieuwe Achterweg', 'Duinrand', 'Rondeburg', 'Kruining­ergors'],
    description: 'Oostvoorne is een authentiek kustdorp aan de duinen van Voorne, met uitgestrekte natuurgebieden en het brede Oostvoornse Strand. De kern combineert dorpsgezelligheid met de rust van duinen, bos en watersport op de Brielse Meer.',
    highlights: ['Oostvoornse strand', 'Duinen van Voorne (Natura 2000)', 'Nabij Brielse Meer', 'Rustige woonomgeving']
  },
  'rockanje': {
    population: 5000,
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Duinstroom', 'Vissersdijk', 'Bosdreef'],
    description: 'Rockanje is een gemoedelijk kustdorp aan de Voornse Duinen, met het brede Rockanjese Strand en een gezellig centrum. Populair bij campings en tweede-huisbezitters, biedt het dorp jaarrond een rustige zeewaardige woonomgeving.',
    highlights: ['Rockanjese Strand', 'Recreatiepark Molenven', 'Duinen van Rockanje', 'Watersporthaven de Punt']
  },

  // === LEIDSCHENDAM-VOORBURG ===
  'voorburg': {
    population: 41500,
    region: 'Haaglanden',
    neighborhoods: ['Voorburg-Noord', 'Voorburg-West', 'Bovenveen', 'Damsigt', 'Park Leeuwenbergh', 'Voorburgse binnenstad'],
    description: 'Voorburg is een van de oudste plaatsen van Nederland, ooit de Romeinse nederzetting Forum Hadriani. De statige villawijken, monumentale binnenstad en de aanwezigheid van paleis Huygens maken Voorburg tot een van de meest geliefde woonplaatsen in de Haagse regio.',
    highlights: ['Huygens Museum Hofwijck', 'Historische binnenstad', 'Park Vreugd en Rust', 'Romeinse oorsprong Forum Hadriani']
  },
  'leidschendam': {
    population: 35500,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'De Heuvel', 'Duivenvoorde', 'Prinsenhof', 'Zeeheldenwijk', 'Sijtwende'],
    description: 'Leidschendam ligt aan de oude vaartroute tussen Leiden en Delft en dankt zijn naam aan de sluis (dam) die deze verbinding beheerste. Het moderne winkelcentrum Leidsenhage, ruime woonwijken en directe HTM tram­verbinding naar Den Haag maken het populair.',
    highlights: ['Winkelhart Leidsenhage', 'Sluis (rijksmonument)', 'HTM tram naar Den Haag', 'Duivenvoorde bos']
  },

  // === TEYLINGEN ===
  'sassenheim': {
    population: 15500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Woningbouwvereniging Sassenheim', 'Klinkenberg', 'Lubbertijnhof', 'Kagerplassen-zijde'],
    description: 'Sassenheim is de grootste kern van gemeente Teylingen, gelegen in het hart van de bollenstreek tussen Leiden en Haarlem. Beroemd om Kasteel Sassenheim (Teylingen), voorjaarsbloei van tulpenvelden en het treinstation aan de Oude Lijn.',
    highlights: ['Ruïne Teylingen', 'Bollenvelden voorjaar', 'Station Sassenheim (Oude Lijn)', 'Nabij Keukenhof']
  },
  'voorhout': {
    population: 10500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Boekhorst', 'Nieuw Rijnhof', 'Oosthout', 'Bloembol'],
    description: 'Voorhout is een gezellig dorp in de bollenstreek, met de karakteristieke Bartholomeuskerk en tulpenvelden aan alle kanten. De historische Van Pallandtlaan verbindt Voorhout met Noordwijk en de dorpskern biedt goede voorzieningen voor gezinnen.',
    highlights: ['Bartholomeuskerk (rijksmonument)', 'Bollenvelden en tulpen', 'Nabij Keukenhof', 'Historisch dorpshart']
  },
  'warmond': {
    population: 5500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Kaageiland', 'Meerwijk', 'Norremeer', 'Trekvaart'],
    description: 'Warmond ligt aan de Kagerplassen en is een van de mooiste watersportdorpen van Zuid-Holland. Met eigen haven, zeilscholen en de historische Grote Kerk biedt Warmond een unieke combinatie van dorpsleven en waterrecreatie op de Kaag.',
    highlights: ['Kagerplassen watersport', 'Kasteel Oud-Teylingen', 'Norremeer haven', 'Trekvaart naar Leiden']
  },
  'spijkenisse': {
    population: 73000,
    region: 'Voorne-Putten',
    neighborhoods: ['Centrum', 'Sterrenkwartier', 'Waterland', 'Groenewoud', 'Vriesland', 'De Elementen', 'Vogelenzang', 'Maaswijk', 'De Hoek'],
    description: 'Spijkenisse werd vanaf de jaren zeventig in hoog tempo gebouwd als woonstad voor Rotterdam, en de eerste bewoners zijn nu de senioren van Voorne-Putten. In wijken als Groenewoud, Waterland en Sterrenkwartier staan rijtjeshuizen en flats uit die tijd, waar wifi de bovenverdieping vaak niet bereikt. De Elementen en Maaswijk zijn nieuwer en ruimer, met woningen waar de router in de meterkast verstopt zit. Onze HBO-student komt bij u thuis, kijkt waar het signaal wegvalt en zet alles zo neer dat de tablet in de tuin gewoon werkt. In Spijkenisse helpen we vaak mensen die hun eerste tablet hebben gekregen en willen beeldbellen met de kinderen in Rotterdam of daarbuiten. Ook een printer die na een nieuwe telefoon of laptop niet meer meedoet, e-mail die op de telefoon moet, of de DigiD-app voor het Spijkenisse Medisch Centrum en de gemeente pakken we rustig met u op. Met metrolijn C en D vanaf Spijkenisse Centrum en De Akkers zijn we vanuit Rotterdam snel bij u, en we komen ook \'s avonds en in het weekend.',
    highlights: ['Metrolijn D naar Rotterdam', 'Boekenberg (grootste bibliotheek NL)', 'Stadswinkel centrum', 'Uitwaaien in de Bernissepolder']
  },

  'honselersdijk': {
    population: 4500,
    region: 'Westland',
    neighborhoods: ['Centrum', 'Kerkstraat', 'Prinses Julianastraat', 'Bosweg', 'Broekpolder'],
    description: 'Honselersdijk is een compact Westlands kassendorp met een historische kern rond de kerk en het oude paleisterrein. De kern was ooit thuisbasis van paleis Honselersdijk en herbergt tegenwoordig een levendige tuinbouwsector.',
    highlights: ['Voormalig paleisterrein Honselersdijk', 'Historische dorpskern', 'Kassencentrum']
  },
  'poeldijk': {
    population: 6500,
    region: 'Westland',
    neighborhoods: ['Centrum', 'Dorpsplein', 'Julianastraat', 'Verburgh', 'Wittebrug'],
    description: 'Poeldijk is een authentiek Westlands dorp aan de rand van Monster en \'s-Gravenzande, bekend om de Bartholomeuskerk en de karakteristieke lintbebouwing langs de Nieuweweg. Populair bij tuinbouwondernemers en forensen naar Den Haag.',
    highlights: ['Bartholomeuskerk', 'Lintdorpstructuur', 'Nabij strand Ter Heijde']
  },
  'kwintsheul': {
    population: 3500,
    region: 'Westland',
    neighborhoods: ['Centrum', 'Kerkstraat', 'Heulweg', 'Bovendijk'],
    description: 'Kwintsheul is een klein maar bruisend kassendorp in het hart van Westland, met een sterke dorpsgemeenschap en actieve verenigingen. Het dorp ligt strategisch tussen Naaldwijk en Wateringen.',
    highlights: ['Heulweg lintbebouwing', 'Kleinschalige tuinbouw', 'Centraal in Westland']
  },
  'maasdijk': {
    population: 3000,
    region: 'Westland',
    neighborhoods: ['Centrum', 'Oranjeplein', 'Maasdijkseweg', 'Nieuwe Weg'],
    description: 'Maasdijk is een dijkdorp op de grens van Westland en Nieuwe Waterweg, met karakteristieke dijkbebouwing en historische banden met de scheepvaart. De ligging bij de A20 maakt Maasdijk goed bereikbaar.',
    highlights: ['Historische dijkbebouwing', 'Nabij Nieuwe Waterweg', 'Kort bij Maassluis']
  },
  'ter-heijde': {
    population: 900,
    region: 'Westland',
    neighborhoods: ['Centrum', 'Kerkstraat', 'Nieuweweg', 'Boulevard'],
    description: 'Ter Heijde is een klein Westlands kustdorp direct aan zee, populair bij zomergasten en surfers. De kern telt slechts een handvol straten en biedt uniek uitzicht op zee, duinen en kassen.',
    highlights: ['Strand van Ter Heijde', 'Surfspot Noordzeekust', 'Kleinste kustdorp Zuid-Holland']
  },
  'delfgauw': {
    population: 8000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Emerald', 'Delftechpark', 'Ackerdijk'],
    description: 'Delfgauw ligt tussen Delft en Pijnacker en is uitgegroeid tot een moderne woonkern met de wijk Emerald. De kern combineert dorpse rust met de nabijheid van TU Delft en Rotterdam.',
    highlights: ['Emerald nieuwbouwwijk', 'Ackerdijkse Plassen natuurgebied', 'Nabij TU Delft']
  },
  'stompwijk': {
    population: 2500,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Dr. van Noortstraat', 'Meerlaan', 'Klaverblad'],
    description: 'Stompwijk is een landelijk dorp aan de rand van Leidschendam-Voorburg, ingeklemd tussen weilanden en de A4. Het dorp bewaart een dorps karakter met een historische Sint-Laurentiuskerk en agrarische wortels.',
    highlights: ['Sint-Laurentiuskerk', 'Groen weidegebied', 'Agrarische traditie']
  },
  'maasland': {
    population: 7500,
    region: 'Midden-Delfland',
    neighborhoods: ['Centrum', '\'t Hooghe Land', 'Molenpolder', 'Lange Kruisweg'],
    description: 'Maasland is een historisch dijkdorp in Midden-Delfland, met een authentieke dorpskern rond de Oude Kerk. De polders en molens rondom het dorp maken het een geliefde uitvalsbasis voor fietsers en wandelaars.',
    highlights: ['Oude Kerk Maasland', 'Weidepolders Midden-Delfland', 'Commandeurspolder']
  },
  'schipluiden': {
    population: 4500,
    region: 'Midden-Delfland',
    neighborhoods: ['Centrum', 'Dorpshuis', 'Vlaardingsekade', 'De Zweth'],
    description: 'Schipluiden is de hoofdkern van gemeente Midden-Delfland, gelegen aan de Gaag met een pittoresk haventje. Het dorp bewaart een landelijk karakter met historische boerderijen en molens.',
    highlights: ['Haventje aan de Gaag', 'Molen \'t Poeltje', 'Landelijk Midden-Delfland']
  },
  'den-hoorn': {
    population: 6500,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'De Kreek', 'Look-West', 'Harnaschpolder'],
    description: 'Den Hoorn ligt direct ten westen van Delft en is een groeikern met moderne woonwijken zoals De Kreek. Het dorp biedt goede voorzieningen en snelle bereikbaarheid via de A4.',
    highlights: ['De Kreek nieuwbouw', 'Harnaschpolder bedrijventerrein', 'Kort bij Delft centrum']
  },
  'nieuwenhoorn': {
    population: 2500,
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Kerkring', 'Nieuwenhoornsedijk'],
    description: 'Nieuwenhoorn is een klein dijkdorp bij Hellevoetsluis, met een karakteristieke ronde kerk en historische lintbebouwing. Het dorp bewaart landelijke rust in het Voornese polderlandschap.',
    highlights: ['Historische ronde Kerkring', 'Landelijk Voornes polderland', 'Nabij Hellevoetsluis']
  },
  'zwartewaal': {
    population: 1700,
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Havendijk', 'Dorpsstraat'],
    description: 'Zwartewaal is een oud haventje aan de Bernisse tussen Brielle en Rockanje, met een pittoreske dorpshaven en historische visserstraditie. De rust en het uitzicht op het water maken het geliefd.',
    highlights: ['Dorpshaven Zwartewaal', 'Historische visserstraditie', 'Bernisse rivier']
  },
  'abbenbroek': {
    population: 1400,
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Kerkstraat', 'Molendijk'],
    description: 'Abbenbroek is een piepklein Voornes dorp met een monumentale hervormde kerk en historische polderbebouwing. Het dorp ligt centraal op Voorne tussen Spijkenisse en Hellevoetsluis.',
    highlights: ['Hervormde kerk uit de 15e eeuw', 'Historisch dorpshart', 'Polderlandschap']
  },
  'geervliet': {
    population: 1500,
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Kaai', 'Kerkstraat'],
    description: 'Geervliet is een middeleeuws stadje aan de Bernisse, met stadsrechten sinds 1381 en het oudste stadhuis van Voorne. Het intieme historische centrum trekt liefhebbers van middeleeuwse architectuur.',
    highlights: ['Middeleeuws stadhuis', 'Stadsrechten sinds 1381', 'Bernisse haventje']
  },
  'hekelingen': {
    population: 3200,
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Groene Kruisweg', 'Voorstraat'],
    description: 'Hekelingen is een dorp direct bij Spijkenisse, met een sterke agrarische identiteit en het bekende Bernissegebied als achtertuin. De kern combineert dorpse rust met de nabijheid van stedelijke voorzieningen.',
    highlights: ['Bernissegebied recreatie', 'Nabij Spijkenisse', 'Groen buitengebied']
  },
  'zuidland': {
    population: 5500,
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Ring', 'Kloosterweg', 'Beetgatsedijk'],
    description: 'Zuidland is een levendig dorp centraal op Voorne, met een historische Ring rond de kerk en actieve dorpsverenigingen. De ligging bij het Bernisse-gebied maakt het aantrekkelijk voor buitenrecreatie.',
    highlights: ['Historische Ring', 'Bernissegebied', 'Actief dorpsleven']
  },
  'heenvliet': {
    population: 1500,
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Ring', 'Dorpsstraat'],
    description: 'Heenvliet is een monumentaal dorp met de restanten van kasteel Ravestein en een historisch dorpshart rond de Ring. Het dorp is beschermd stadsgezicht en trekt bezoekers voor de sfeervolle sfeer.',
    highlights: ['Kasteel Ravestein (ruïne)', 'Beschermd dorpsgezicht', 'Historische Ring']
  },
  'goudswaard': {
    population: 1500,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Dorpshoek', 'Molendijk'],
    description: 'Goudswaard is een klein Hoeksche Waards dijkdorp met een historische kerk en typische polderbebouwing. De open landschap en rust maken het populair bij wandelaars en fietsers.',
    highlights: ['Historische dijkbebouwing', 'Open polderland', 'Hoeksche Waards karakter']
  },
  'oud-beijerland': {
    population: 24000,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Oost', 'West', 'De Belder', 'Poortwijk', 'Zinkweg'],
    description: 'Oud-Beijerland is de hoofdkern van Hoeksche Waard en het regionale winkel- en zorgcentrum van het eiland. De historische binnenstad rond het Marktplein contrasteert met moderne woonwijken.',
    highlights: ['Regiocentrum Hoeksche Waard', 'Historisch marktplein', 'Ziekenhuis en winkelcentrum']
  },
  'strijen': {
    population: 8500,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Mookhoek', 'Kaai', 'Boomdijk'],
    description: 'Strijen is een van de oudste dorpen van Hoeksche Waard, met een monumentale Grote Kerk en historische banden met de Grafelijkheid. Het dorp bewaart een landelijk karakter tussen weilanden en riviertjes.',
    highlights: ['Historische Grote Kerk', 'Grafelijk verleden', 'Rustig polderdorp']
  },
  'klaaswaal': {
    population: 3500,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Molendijk', 'Kerkstraat'],
    description: 'Klaaswaal is een compact Hoeksche Waards polderdorp, bekend om de karakteristieke ronde kerk en het open landschap. Het dorp biedt rust en ligging tussen Oud-Beijerland en Numansdorp.',
    highlights: ['Ronde kerk Klaaswaal', 'Polderweidegebied', 'Centraal in de Hoeksche Waard']
  },
  'numansdorp': {
    population: 5500,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Buitenom', 'Molendijk', 'Havenkade'],
    description: 'Numansdorp is een levendig dorp aan het Hollands Diep, met een haven, veerpont en het bekende recreatiegebied de Krammer. De ligging aan het water maakt het geliefd bij watersporters.',
    highlights: ['Haven aan Hollands Diep', 'Krammer recreatiegebied', 'Veerpont naar Willemstad']
  },
  'piershil': {
    population: 1700,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Molendijk', 'Kerkring'],
    description: 'Piershil is een minidorp op de rand van Hoeksche Waard aan het Spui, met een sfeervol Kerkring en directe verbinding naar Nissewaard via de brug. Populair bij mensen die rust zoeken aan het water.',
    highlights: ['Historisch Kerkring', 'Uitzicht over het Spui', 'Verbinding naar Nissewaard']
  },
  'zuid-beijerland': {
    population: 3300,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Molendijk', 'Kerkweg'],
    description: 'Zuid-Beijerland is een polderdorp centraal in Hoeksche Waard, met een historische korenmolen en agrarisch verleden. Het dorp biedt rustige woonstraten en het open landschap van de Beijerlanden.',
    highlights: ['Korenmolen Zuid-Beijerland', 'Beijerlands polderland', 'Landelijke rust']
  },
  'puttershoek': {
    population: 7500,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Zomerlanden', 'Suikerplein', 'Dwarsdijk'],
    description: 'Puttershoek is een dorp aan de Oude Maas, ooit thuis van de suikerfabriek waar het Suikerplein aan herinnert. Het dorp is populair bij forensen naar Rotterdam via de Kiltunnel.',
    highlights: ['Voormalige suikerfabriek', 'Uitzicht Oude Maas', 'Kiltunnel naar Dordrecht']
  },
  'maasdam': {
    population: 2700,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Rijkestraat', 'Molendijk'],
    description: 'Maasdam is een gezellig polderdorp centraal op Hoeksche Waard, met korte lijnen naar Oud-Beijerland en Puttershoek. Het dorp staat bekend om de gemoedelijke sfeer en dorpsfeesten.',
    highlights: ['Actieve dorpsvereniging', 'Centraal in Hoeksche Waard', 'Nabij Oude Maas']
  },
  'heinenoord': {
    population: 2700,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Ring', 'Dorpsstraat'],
    description: 'Heinenoord is een historisch polderdorp direct bij de Heinenoordtunnel naar Rotterdam. De strategische ligging maakt het geliefd bij forensen, terwijl de dorpskern rustig blijft.',
    highlights: ['Heinenoordtunnel A29', 'Historisch dorpshart', 'Snelle verbinding Rotterdam']
  },
  'mijnsheerenland': {
    population: 5500,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Lange Wei', 'Kerkstraat', 'De Waag'],
    description: 'Mijnsheerenland is een aantrekkelijk woondorp in Hoeksche Waard, met een historische kern rondom de Lange Wei en moderne uitbreidingen. Het dorp combineert dorpse gezelligheid met goede voorzieningen.',
    highlights: ['Historische Lange Wei', 'Kerktoren monument', 'Hoeksche Waards karakter']
  },
  'nieuw-beijerland': {
    population: 3800,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Molendijk', 'Kerkweg', 'Vaartweg'],
    description: 'Nieuw-Beijerland is een polderdorp aan de rand van Hoeksche Waard, richting het Spui. Het dorp biedt rust en heeft actieve verenigingen die het dorpsleven levendig houden.',
    highlights: ['Molen aan de Molendijk', 'Rust en polders', 'Sterke dorpsgemeenschap']
  },
  'rhoon': {
    population: 12000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Portland', 'De Landsheer', 'Julianastraat', 'De Elementen'],
    description: 'Rhoon is de grootste kern van gemeente Albrandswaard en biedt een unieke mix van kasteel Rhoon, historisch centrum en de moderne wijk Portland. Directe metroverbinding naar Rotterdam.',
    highlights: ['Kasteel Rhoon', 'Portland nieuwbouw', 'Metro naar Rotterdam', 'Rhoonse Grienden natuur']
  },
  'poortugaal': {
    population: 8500,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Delta psychiatrisch', 'Poortugaalse Polder', 'Overhoeken'],
    description: 'Poortugaal is een historisch dijkdorp aan de Oude Maas, bekend om het Delta terrein en de karakteristieke kerktoren. Metrostation Poortugaal verbindt het dorp direct met Rotterdam.',
    highlights: ['Metrostation Poortugaal', 'Delta psychiatrisch centrum', 'Oude Maas dijk', 'Historisch centrum']
  },
  'middelharnis': {
    population: 10000,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Menheerse Weg', 'Vinkendreef', 'Havendijk'],
    description: 'Middelharnis is de bestuurskern van Goeree-Overflakkee en het regionale winkelcentrum van het eiland. De haven aan het Haringvliet en de historische Sint-Michaëlskerk zijn beeldbepalend.',
    highlights: ['Haven Middelharnis', 'Sint-Michaëlskerk', 'Regiocentrum eiland']
  },
  'ouddorp': {
    population: 6500,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Strandweg', 'Klepperstee', 'Vroongronden'],
    description: 'Ouddorp is dé badplaats van Goeree-Overflakkee, met kilometers strand, duinen en talloze campings en vakantieparken. In de zomer telt het dorp veel meer bezoekers dan bewoners.',
    highlights: ['Uitgestrekt Ouddorpse strand', 'Vuurtoren Westhoofd', 'Vakantieparken', 'Klepperstee natuur']
  },
  'dirksland': {
    population: 3500,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Ziekenhuisplein', 'Molenkade'],
    description: 'Dirksland is het zorgcentrum van Goeree-Overflakkee, met het Van Weel-Bethesda Ziekenhuis en een compact dorpshart. Het dorp biedt rust en centraal gelegen voorzieningen op het eiland.',
    highlights: ['Van Weel-Bethesda Ziekenhuis', 'Centraal op Goeree-Overflakkee', 'Polderdorpje']
  },
  'goedereede': {
    population: 2000,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Havenkade', 'Marktveld'],
    description: 'Goedereede is een pittoreske voormalige vestingstad met een monumentaal centrum, ronde havenkom en de karakteristieke Toren van Goedereede. Het stadje verkreeg al in 1312 stadsrechten.',
    highlights: ['Toren van Goedereede', 'Ronde haven', 'Stadsrechten sinds 1312', 'Monumentaal centrum']
  },
  'sommelsdijk': {
    population: 8000,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Simon van der Stelplein', 'Voorstraat'],
    description: 'Sommelsdijk is direct verbonden met Middelharnis en vormt samen het bestuurlijk en commercieel hart van Goeree-Overflakkee. De Voorstraat is een populair winkelgebied.',
    highlights: ['Voorstraat winkelgebied', 'Aansluitend aan Middelharnis', 'Historisch stadhuis']
  },
  'stellendam': {
    population: 3500,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Havenkade', 'Marktveld'],
    description: 'Stellendam ligt aan de Haringvlietsluizen en heeft een levendige vissershaven met een van de grootste vissersvloten van Nederland. Het dorp is vertrekpunt voor watersport op de Noordzee.',
    highlights: ['Vissershaven Stellendam', 'Haringvlietsluizen (Deltawerken)', 'Faassen visafslag']
  },
  'oude-tonge': {
    population: 4000,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Molendijk', 'Voorstraat'],
    description: 'Oude-Tonge is een van de oudste kernen op Goeree-Overflakkee, met een historisch dorpshart en het Watersnoodmonument als herinnering aan 1953. Het dorp biedt landelijke rust.',
    highlights: ['Watersnoodmonument 1953', 'Historisch dorpshart', 'Polderland']
  },
  'nieuwe-tonge': {
    population: 2400,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Dorpsplein', 'Molendijk'],
    description: 'Nieuwe-Tonge is een compact polderdorp in het oosten van Goeree-Overflakkee, met een sfeervolle dorpskerk en agrarische identiteit. De rust en het weidse landschap maken het aantrekkelijk.',
    highlights: ['Dorpskerk Nieuwe-Tonge', 'Agrarisch landschap', 'Rustig karakter']
  },
  'ooltgensplaat': {
    population: 2500,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Havenkade', 'Ring'],
    description: 'Ooltgensplaat is een polderdorp aan het Volkerak, met een gezellige haven en het beroemde Fort Prins Frederik uit de 19e eeuw. Populair bij watersporters op het Volkerakmeer.',
    highlights: ['Fort Prins Frederik', 'Haven aan Volkerak', 'Watersportgebied']
  },
  'den-bommel': {
    population: 1500,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Molendijk', 'Dorpsstraat'],
    description: 'Den Bommel is een klein polderdorp in het oosten van Goeree-Overflakkee, met een authentiek dorpshart en zicht op het Volkerak. Het dorp bewaart landelijke sfeer en rust.',
    highlights: ['Uitzicht Volkerak', 'Landelijke rust', 'Historische dorpskerk']
  },
  'herkingen': {
    population: 700,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Havenweg', 'Dijk'],
    description: 'Herkingen is een piepklein havendorp aan het Grevelingenmeer, populair bij zeilers en watersporters. De haven en de nabijheid van watersportgebieden zijn de belangrijkste trekkers.',
    highlights: ['Haven aan Grevelingenmeer', 'Watersportparadijs', 'Kleinste kern van het eiland']
  },
  'melissant': {
    population: 1600,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Middelweg', 'Molendijk'],
    description: 'Melissant is een klein polderdorp centraal op Goeree-Overflakkee, met een karakteristieke molen en landelijk karakter. Het dorp ligt centraal tussen Dirksland en Stellendam.',
    highlights: ['Molen Melissant', 'Centrale ligging', 'Landelijk karakter']
  },
  'bodegraven': {
    population: 20000,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Vromade', 'Weideveld', 'Broekvelden'],
    description: 'Bodegraven is een levendige plaats in het Groene Hart, aan de Oude Rijn. Bekend om de kaasproductie, de wekelijkse kaasmarkt en directe treinverbinding met Utrecht en Leiden.',
    highlights: ['Kaasmarkt Bodegraven', 'Station op Oude Lijn', 'Reeuwijkse Plassen nabij', 'Oude Rijn']
  },
  'reeuwijk': {
    population: 13000,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Reeuwijkse Plassen', 'Sluipwijk', 'Middelburg'],
    description: 'Reeuwijk staat wereldberoemd om de Reeuwijkse Plassen — een uitgestrekt gebied van 12 aaneengesloten plassen, ideaal voor zeilen, wandelen en fietsen. Een van de mooiste natuurgebieden van het Groene Hart.',
    highlights: ['Reeuwijkse Plassen (12 plassen)', 'Watersport en zeilen', 'Groene Hart natuur', 'Nabij Gouda']
  },
  'driebruggen': {
    population: 1400,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Dorpsstraat', 'Molendijk'],
    description: 'Driebruggen is een klein Groene-Hart dorp aan de Enkele Wiericke, met een landelijk karakter en agrarische wortels. Populair bij mensen die rust en groen zoeken.',
    highlights: ['Enkele Wiericke rivier', 'Weidse polders', 'Landelijk dorpje']
  },
  'schoonhoven': {
    population: 12500,
    region: 'Krimpenerwaard',
    neighborhoods: ['Centrum', 'Wilgenkroon', 'De Bloemendaal', 'De Meent'],
    description: 'Schoonhoven is de zilverstad van Nederland, met een monumentale binnenstad, het Nederlands Zilvermuseum en een rijke edelsmeed-traditie. De stad ligt aan de Lek met een pontverbinding naar Utrecht.',
    highlights: ['Nederlands Zilvermuseum', 'Historische zilverstad', 'Pont over de Lek', 'Vestingwerken']
  },
  'bergambacht': {
    population: 5500,
    region: 'Krimpenerwaard',
    neighborhoods: ['Centrum', 'Middelblok', 'Berkenwoudsedijk'],
    description: 'Bergambacht is een landelijk dijkdorp aan de Lek, met een compacte dorpskern en typisch polderlandschap eromheen. Populair bij fietsers vanwege de Krimpenerwaard-route.',
    highlights: ['Lekdijk uitzicht', 'Krimpenerwaardse polders', 'Compact dorpshart']
  },
  'lekkerkerk': {
    population: 8500,
    region: 'Krimpenerwaard',
    neighborhoods: ['Centrum', 'Zuidbroek', 'Bosman', 'Kerkweg'],
    description: 'Lekkerkerk is een dijkdorp aan de Lek tegenover Krimpen aan de IJssel, met een levendig dorpshart en directe verbinding met de veerpont. Het dorp combineert dorpsleven met stadse nabijheid.',
    highlights: ['Lekveer Lekkerkerk', 'Historisch dijkdorp', 'Lek uitzicht']
  },
  'stolwijk': {
    population: 4500,
    region: 'Krimpenerwaard',
    neighborhoods: ['Centrum', 'Kerkweg', 'Beijersche', 'Bilwijk'],
    description: 'Stolwijk is een boerendorp in het hart van de Krimpenerwaard, bekend om Stolwijker kaas en het typisch open weidelandschap. Rust en boerenerven bepalen het beeld.',
    highlights: ['Stolwijker kaastraditie', 'Open weidegebied', 'Boerenerven']
  },
  'haastrecht': {
    population: 3900,
    region: 'Krimpenerwaard',
    neighborhoods: ['Centrum', 'Bilwijk', 'Vlist', 'Provinciale weg'],
    description: 'Haastrecht is een historisch dorp aan de Vlist en de Hollandse IJssel, met een monumentale kerk en het pittoreske Bisdom van Vliet museum. Vroeger belangrijk aan de handelsroute Gouda-Utrecht.',
    highlights: ['Bisdom van Vliet museum', 'Historisch dorpshart', 'Vlist en Hollandse IJssel']
  },
  'ammerstol': {
    population: 1400,
    region: 'Krimpenerwaard',
    neighborhoods: ['Centrum', 'Voorstraat', 'Lekdijk'],
    description: 'Ammerstol is een klein dijkdorp aan de Lek, ooit belangrijk voor de zalmvisserij. Nu is het een rustig woondorpje met karakteristieke dijkbebouwing.',
    highlights: ['Historische zalmvisserij', 'Karakteristieke Lekdijk', 'Klein dijkdorp']
  },
  'berkenwoude': {
    population: 1900,
    region: 'Krimpenerwaard',
    neighborhoods: ['Centrum', 'Dorpsstraat', 'Molendijk'],
    description: 'Berkenwoude is een klein weidedorp in de Krimpenerwaard, met een landelijk karakter en het open polderlandschap als achtertuin. Populair bij weekendfietsers.',
    highlights: ['Weids weidelandschap', 'Fietsroutes Krimpenerwaard', 'Rustig dorpje']
  },
  'gouderak': {
    population: 3500,
    region: 'Krimpenerwaard',
    neighborhoods: ['Centrum', 'IJsseldijk', 'Middelblok'],
    description: 'Gouderak ligt aan de Hollandse IJssel tussen Gouda en Krimpen. Het dorp heeft een sfeervol dorpshart en biedt uitzicht over de rivier vanaf de IJsseldijk.',
    highlights: ['Hollandse IJssel uitzicht', 'IJsseldijk fietsroute', 'Compact dorpshart']
  },
  'krimpen-aan-de-lek': {
    population: 6500,
    region: 'Krimpenerwaard',
    neighborhoods: ['Centrum', 'Buitenkerk', 'Molendijk', 'Waaier'],
    description: 'Krimpen aan de Lek ligt aan de samenkomst van Lek en Noord, met de Algerabrug als markant punt. Het dorp heeft historische banden met de scheepsbouw.',
    highlights: ['Algerabrug', 'Samenkomst Lek en Noord', 'Scheepsbouwtraditie', 'Historisch dorpshart']
  },
  'ouderkerk-aan-den-ijssel': {
    population: 8000,
    region: 'Krimpenerwaard',
    neighborhoods: ['Centrum', 'IJsseldijk', 'Kromme', 'Lageweg'],
    description: 'Ouderkerk aan den IJssel is een langgerekt dijkdorp langs de Hollandse IJssel, met karakteristieke lintbebouwing en scheepswerftraditie. Het dorp biedt rustige woonstraten en dijkuitzicht.',
    highlights: ['Historische scheepswerf', 'Hollandse IJssel dijk', 'Lintbebouwing', 'Molens aan de IJssel']
  },
  'kinderdijk': {
    population: 500,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Molendijk', 'Molens'],
    description: 'Kinderdijk staat op de UNESCO Werelderfgoedlijst met zijn 19 historische molens die het polderlandschap bepalen. Het dorpje zelf is klein maar trekt jaarlijks honderdduizenden bezoekers.',
    highlights: ['19 molens (UNESCO Werelderfgoed)', 'Molentochten', 'Wereldberoemde skyline', 'Waterschap geschiedenis']
  },
  'nieuw-lekkerland': {
    population: 9500,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Middenweg', 'Lekdijk', 'De Klok'],
    description: 'Nieuw-Lekkerland ligt aan de Lek tegenover Krimpen, met het beroemde Molens van Kinderdijk gebied binnen de gemeente. Het dorp heeft een compact centrum en goede voorzieningen.',
    highlights: ['Molens van Kinderdijk', 'Lek uitzicht', 'Dorpskern', 'Nabij Alblasserdam']
  },
  'groot-ammers': {
    population: 3500,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Fortuinstraat', 'Molendijk'],
    description: 'Groot-Ammers is een dorp aan de Lek in de Alblasserwaard, bekend om het Vogelasiel en het historische dorpshart. De rust en het rivierlandschap zijn de belangrijkste trekkers.',
    highlights: ['Vogelasiel De Wulp', 'Lek uitzicht', 'Historisch centrum']
  },
  'bleskensgraaf': {
    population: 2500,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Kerkweg', 'Molendijk'],
    description: 'Bleskensgraaf is een polderdorp in de Alblasserwaard, met een compact dorpshart en agrarische wortels. Het dorp is bekend om de kaasboerderijen in de omgeving.',
    highlights: ['Kaasboerderijen', 'Weidepolders Alblasserwaard', 'Rustig dorpje']
  },
  'arkel': {
    population: 3800,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Rietveld', 'Kanaaldijk'],
    description: 'Arkel ligt aan het Merwedekanaal tussen Gorinchem en Leerdam, met een historisch dorpshart en watertoren als markant punt. Het dorp heeft eigen station op de Betuweroute.',
    highlights: ['Station Arkel', 'Merwedekanaal', 'Historische watertoren']
  },
  'giessenburg': {
    population: 3000,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Doetsehoek', 'Bovenkerkweg'],
    description: 'Giessenburg is een langgerekt dorp langs de Giessen in de Alblasserwaard, ontstaan door samenvoeging van Giessendam en Giessen-Oudekerk. Landelijk karakter met sterke gemeenschap.',
    highlights: ['Rivier de Giessen', 'Lintbebouwing', 'Alblasserwaards karakter']
  },
  'hoornaar': {
    population: 1500,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Dorpsweg', 'Molendijk'],
    description: 'Hoornaar is een klein polderdorp in de Alblasserwaard, met een monumentale kerk en typisch open weidelandschap. Rustig en landelijk.',
    highlights: ['Historische kerk', 'Open weidegebied', 'Dorpsgemeenschap']
  },
  'nieuwpoort': {
    population: 1200,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Vestingwallen', 'Havenkade'],
    description: 'Nieuwpoort is een van de best bewaarde vestingsteden van Nederland, gelegen aan de Lek en Merwedekanaal. Het minivestingstadje bewaart complete wallen en grachten.',
    highlights: ['Complete vestingwallen', 'Stadsrechten sinds 1283', 'Rijksmonumenten', 'Lek uitzicht']
  },
  'streefkerk': {
    population: 2500,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Lekdijk', 'Middelblok'],
    description: 'Streefkerk is een dijkdorp aan de Lek in de Alblasserwaard, met karakteristieke lintbebouwing en historische molens. De dijkroute is populair bij fietsers.',
    highlights: ['Lekdijk fietsroute', 'Historische molens', 'Karakteristiek dijkdorp']
  },
  'oud-alblas': {
    population: 1800,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Molendijk', 'Landweg'],
    description: 'Oud-Alblas is een klein polderdorp in de Alblasserwaard, met een sfeervolle dorpskerk en het open weidelandschap dat de streek kenmerkt. Rust en groen bepalen het beeld.',
    highlights: ['Historische dorpskerk', 'Weids polderland', 'Rustig dorpje']
  },
  'noordeloos': {
    population: 1500,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Dorpsweg', 'Overslingeland'],
    description: 'Noordeloos is een landelijk dorpje in de Alblasserwaard, met een historisch centrum rond de kerk. Het dorp bewaart de Alblasserwaardse dorpssfeer.',
    highlights: ['Historisch dorpshart', 'Alblasserwaards karakter', 'Groen polderland']
  },
  'schelluinen': {
    population: 1600,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'A15-zijde', 'Dorpsstraat'],
    description: 'Schelluinen ligt strategisch bij de A15 en Betuweroute, met een compact dorpshart en directe autoverbindingen naar Rotterdam en Utrecht. Bekend om het bedrijventerrein A15.',
    highlights: ['Bedrijventerrein A15', 'Nabij Gorinchem', 'Historisch dorpshart']
  },
  'langerak': {
    population: 1500,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Lekdijk', 'Molendijk'],
    description: 'Langerak is een langgerekt dijkdorp aan de Lek in de Alblasserwaard, met karakteristieke lintbebouwing en zicht op de rivier. Rustig en landelijk.',
    highlights: ['Lek uitzicht', 'Lintbebouwing', 'Historische dijk']
  },
  'hardinxveld': {
    population: 10500,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Boven-Hardinxveld', 'Neder-Hardinxveld', 'Waterweg'],
    description: 'Hardinxveld is de westelijke kern van gemeente Hardinxveld-Giessendam, langs de Beneden-Merwede met een sterke scheepvaarttraditie. Het dorp is bekend om de scheepswerven.',
    highlights: ['Scheepswerven Beneden-Merwede', 'Dijkbebouwing', 'Merwede uitzicht']
  },
  'giessendam': {
    population: 8500,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Kerkweg', 'Gieserwaard'],
    description: 'Giessendam is de oostelijke kern van gemeente Hardinxveld-Giessendam, met een eigen dorpshart en agrarische wortels. Samen met Hardinxveld vormt het een dijklint langs de Merwede.',
    highlights: ['Historisch dorpshart', 'Merwede uitzicht', 'Landelijke omgeving']
  },
  'boskoop': {
    population: 15500,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Snijdelwijk', 'Bomenkwekerijen', 'Snijdelwijk-West'],
    description: 'Boskoop is het boomkwekerijencentrum van Nederland, met honderden kwekerijen langs de Gouwe. Het dorp heeft een sterke tuinbouwidentiteit en organiseert jaarlijks het beroemde Grootste Bloemencorso.',
    highlights: ['Boomkwekerij hoofdstad', 'Boomkwekerij museum', 'Bloemencorso', 'Historische Gouwe']
  },
  'hazerswoude-dorp': {
    population: 4500,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Dorpsstraat', 'Rijndijk-Noord'],
    description: 'Hazerswoude-Dorp ligt in het Groene Hart, met een gezellig dorpshart en directe verbinding met de N11. Populair bij forensen naar Leiden en Alphen.',
    highlights: ['Compact dorpshart', 'Nabij N11', 'Groene Hart karakter']
  },
  'hazerswoude-rijndijk': {
    population: 5500,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Rijndijk', 'Buurtschap'],
    description: 'Hazerswoude-Rijndijk is een langgerekte kern langs de Oude Rijn, met karakteristieke lintbebouwing en historische banden met de scheepvaart. Rust en waterrust bepalen het beeld.',
    highlights: ['Oude Rijn dijk', 'Lintbebouwing', 'Nabij Alphen aan den Rijn']
  },
  'benthuizen': {
    population: 3800,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Dorpsstraat', 'Bentwoud'],
    description: 'Benthuizen ligt aan het Bentwoud, een van de grootste jonge bossen van Zuid-Holland. Het dorp is populair bij natuurliefhebbers en fietsers.',
    highlights: ['Het Bentwoud recreatie', 'Groene Hart karakter', 'Rustig woondorp']
  },
  'koudekerk-aan-den-rijn': {
    population: 3800,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Rijndijk', 'De Bulk'],
    description: 'Koudekerk aan den Rijn is een dorp langs de Oude Rijn tussen Leiden en Alphen, met een historisch dorpshart en actieve dorpsvereniging. Landelijke rust dichtbij de stad.',
    highlights: ['Oude Rijn', 'Historische dorpskern', 'Landelijk karakter']
  },
  'zwammerdam': {
    population: 1500,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Rijndijk', 'Dorpsstraat'],
    description: 'Zwammerdam is een klein Rijndijk-dorp bij Bodegraven, met historische betekenis als Romeinse vindplaats. Zes Romeinse riviersepen zijn hier opgegraven.',
    highlights: ['Romeinse vindplaats', 'Rijndijk lint', 'Klein historisch dorpje']
  },
  'aarlanderveen': {
    population: 2200,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Dorpsstraat', 'Molendriegang'],
    description: 'Aarlanderveen is een klein dorp in het Groene Hart met een unieke molendriegang — drie werkende molens op een rij. Deze zeldzaamheid trekt molenliefhebbers uit het hele land.',
    highlights: ['Molendriegang (3 molens op rij)', 'Uniek in Nederland', 'Groene Hart']
  },
  'leimuiden': {
    population: 3500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Braassem', 'Dorpshoek'],
    description: 'Leimuiden ligt aan het Braassemermeer en biedt een dorpse woonomgeving met watersportmogelijkheden. Het dorp heeft een gezellig centrum en directe verbindingen naar Schiphol.',
    highlights: ['Braassemermeer watersport', 'Nabij Schiphol', 'Dorpshart']
  },
  'roelofarendsveen': {
    population: 8500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Alkeburg', 'Braassem-West', 'Meerbaan'],
    description: 'Roelofarendsveen is de hoofdkern van gemeente Kaag en Braassem, met een levendig centrum en directe ligging aan het Braassemermeer. Populair bij forensen naar Leiden en Amsterdam.',
    highlights: ['Braassemermeer', 'Centraal in Kaag en Braassem', 'Winkelvoorzieningen']
  },
  'oude-wetering': {
    population: 2800,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Kerkstraat', 'Havenweg'],
    description: 'Oude Wetering ligt aan het Braassemermeer, aansluitend aan Roelofarendsveen. Het dorp heeft een gezellig dorpshart en biedt watersportmogelijkheden.',
    highlights: ['Braassemermeer', 'Historisch dorpshart', 'Watersporttoegang']
  },
  'woubrugge': {
    population: 2500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Kerkweg', 'Rondom Woudsedijk'],
    description: 'Woubrugge is een authentiek Groene-Hart dorp aan de Woudwetering, met een monumentale kerk en typische polderbebouwing. Rustig en landelijk.',
    highlights: ['Historische kerk', 'Woudwetering', 'Groene Hart']
  },
  'hoogmade': {
    population: 1500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Dorpsstraat', 'Landweg'],
    description: 'Hoogmade is een klein Groene-Hart dorp met een authentiek dorpshart en agrarische wortels. Het dorp bewaart een landelijk karakter tussen Leiden en Alphen.',
    highlights: ['Landelijk karakter', 'Groene Hart', 'Historisch centrum']
  },
  'rijnsburg': {
    population: 15000,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Bloemfontein', 'Vroomstaten', 'Frederiksoord'],
    description: 'Rijnsburg is een levendige kern van gemeente Katwijk, wereldbekend om Bloemenveiling Royal FloraHolland Rijnsburg — de grootste bloemenveiling ter wereld. Historisch banden met Spinoza.',
    highlights: ['Royal FloraHolland Rijnsburg', 'Spinoza museum', 'Bollenstreek', 'Uitloper Oude Rijn']
  },
  'valkenburg-zh': {
    population: 4500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Marinerie', 'Broekpolder'],
    description: 'Valkenburg (ZH) is een kern in gemeente Katwijk, gelegen op de plek van een oud Romeins Castellum. Het voormalige vliegveld Valkenburg wordt getransformeerd tot woonwijk.',
    highlights: ['Romeins Castellum', 'Voormalig Marinevliegveld', 'Nieuwbouw Valkenburg']
  },
  'noordwijkerhout': {
    population: 15500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Zeeburg', 'Zeeburgh', 'Boekhorst'],
    description: 'Noordwijkerhout ligt in het hart van de bollenstreek, tussen Noordwijk en Hillegom. Bekend om de bollenvelden, De Zilk en de gastvrije horeca.',
    highlights: ['Bollenvelden en tulpen', 'Nabij Keukenhof', 'Kust van Noordwijk', 'Historisch centrum']
  },
  'de-zilk': {
    population: 2500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Zilkerbinnenweg', 'Dorpsstraat'],
    description: 'De Zilk is een klein dorpje in de bollenstreek, direct grenzend aan de duinen. Het dorp is populair bij bollenlopers en biedt de rust van de bollenvelden.',
    highlights: ['Bollenvelden aan de duinen', 'Rustig bollendorp', 'Nabij Amsterdam duinen']
  },
  'rozenburg': {
    population: 12500,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Beatrixstraat', 'De Elementen', 'Blankenburg'],
    description: 'Rozenburg is een kern van gemeente Rotterdam, gelegen op het voormalige eiland Rozenburg tussen Nieuwe Waterweg en Calandkanaal. Bekend om de Havenlijn en industrie in de omgeving.',
    highlights: ['Nieuwe Waterweg', 'Rotterdamse havens', 'Kompas De Beer natuurgebied', 'Blankenburgtunnel']
  },
  'hoek-van-holland': {
    population: 10000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Strandweg', 'Nieuwlandsedijk', 'Dorpsstraat'],
    description: 'Hoek van Holland is het strand-stadsdeel van Rotterdam, met eigen strand, ferry-terminal naar Engeland en de Hoekse Lijn metro. Populair bij Rotterdammers voor een dag naar zee.',
    highlights: ['Strand Hoek van Holland', 'Metro Hoekse Lijn', 'Ferryhaven', 'Atlantikwall bunkers']
  },
  'hoogvliet': {
    population: 34000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Zalmplaat', 'Meeuwenplaat', 'Middengebied', 'Nieuw Engeland'],
    description: 'Hoogvliet is een gebiedsdeel van Rotterdam ten zuiden van de Oude Maas, met een winkelcentrum, metroverbinding en gevarieerde woonwijken. Bekend om Botlekbrug en industrie.',
    highlights: ['Metro D en E', 'Winkelcentrum Hoogvliet', 'Botlekbrug', 'Groenzones']
  },
  'ijsselmonde': {
    population: 61000,
    region: 'Rijnmond',
    neighborhoods: ['Beverwaard', 'Groenenhagen', 'Lombardijen', 'Sportdorp', 'Oud-IJsselmonde'],
    description: 'IJsselmonde is een dichtbevolkte deelgemeente in Rotterdam-Zuid, met historische kern Oud-IJsselmonde en moderne wijken zoals Beverwaard. Metroverbinding naar Rotterdam centrum.',
    highlights: ['Oud-IJsselmonde historisch', 'Ahoy Rotterdam nabij', 'Metrolijn D', 'IJsselmondse hoofd']
  },
  'pernis': {
    population: 5000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Pernis-Rotterdam', 'Groene Kruisweg'],
    description: 'Pernis is een klein Rotterdams stadsdeel, ingeklemd tussen de havens van Rotterdam. Bekend als een van de oudste polderdorpen en om de kerk aan de rand van de haven.',
    highlights: ['Oudste Rotterdamse dorpje', 'Havenview', 'Historische kerk']
  },
  'overschie': {
    population: 17500,
    region: 'Rijnmond',
    neighborhoods: ['Kleinpolder', 'Zestienhoven', 'Overschie centrum', 'Landzicht'],
    description: 'Overschie is een groen deelgebied van Rotterdam, met historische banden met de scheepvaart op de Schie. Rotterdam The Hague Airport ligt binnen het gebied.',
    highlights: ['Rotterdam Airport', 'Historische Schie', 'Overschieplein', 'Van Nelle Fabriek (UNESCO)']
  },
  'hillegersberg': {
    population: 22000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Hillegersberg-Zuid', 'Bergse Bos', 'Molenlaan'],
    description: 'Hillegersberg is een groen en welvarend deelgebied van Rotterdam-Noord, met de Bergse Voorplas en Achterplas, monumentale villa\'s en het gezellige Bergse Dorpsstraat.',
    highlights: ['Bergse Voorplas + Achterplas', 'Monumentale villas', 'Bergsche Dorpsstraat', 'Bergse Bos']
  },
  'ter-aar': {
    population: 5500,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Aardam', 'Langeraar', 'Nieuwveenseweg'],
    description: 'Ter Aar is een kern van gemeente Nieuwkoop, aan de Aar tussen Alphen en Nieuwkoop. Het dorp heeft eigen voorzieningen en ligging in het Groene Hart.',
    highlights: ['Rivier de Aar', 'Groene Hart landschap', 'Compact dorpshart']
  },
  'nieuwveen': {
    population: 2400,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Dorpsstraat', 'Molenweg'],
    description: 'Nieuwveen is een klein dorp in het Groene Hart, met een authentiek dorpshart en Nieuwveense Plassen als achtertuin. Populair bij natuurliefhebbers.',
    highlights: ['Nieuwveense Plassen', 'Historisch centrum', 'Groene Hart natuur']
  },
  'noorden': {
    population: 1200,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Dorpsstraat', 'Overkant'],
    description: 'Noorden is een pittoresk plassendorp aan de Nieuwkoopse Plassen, populair bij watersporters en natuurliefhebbers. Het dorp heeft een sfeervolle jachthaven.',
    highlights: ['Nieuwkoopse Plassen', 'Jachthaven Noorden', 'Watersporten']
  },
  'zevenhoven': {
    population: 2500,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Dorpsstraat', 'Molendijk'],
    description: 'Zevenhoven is een klein polderdorp in gemeente Nieuwkoop, met een gezellige dorpskern en agrarische omgeving. Rust en groen bepalen het beeld.',
    highlights: ['Agrarische omgeving', 'Groene Hart karakter', 'Rustig dorpje']
  },
  's-gravendeel': {
    population: 9500,
    region: 'Hoeksche Waard',
    neighborhoods: ['Centrum', 'Molendijk', 'Kiltunnelweg', 'Trekdam'],
    description: '\'s-Gravendeel ligt aan de Dordtse Kil, direct verbonden met Dordrecht via de Kiltunnel. Het dorp heeft een sfeervol dorpshart en is een populaire woonplek voor forensen naar Dordrecht en Rotterdam.',
    highlights: ['Kiltunnel naar Dordrecht', 'Uitzicht Dordtse Kil', 'Compact dorpshart', 'Historische molen']
  },
  'stad-aan-t-haringvliet': {
    population: 1500,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Centrum', 'Havenkade', 'Dorpsstraat'],
    description: 'Stad aan \'t Haringvliet is een klein havendorp aan het Haringvliet, met een pittoreske haven en een authentiek dorpshart. Populair bij zeilers en natuurliefhebbers.',
    highlights: ['Haven aan Haringvliet', 'Authentiek dorpshart', 'Zeilerspardaijs']
  },
}

/**
 * Get city content data by slug.
 * Returns undefined for cities without content data (graceful fallback).
 */
export function getCityContent(slug: string): CityContent | undefined {
  return cityContentData[slug]
}

/**
 * Returns a human-readable population description.
 */
export function getPopulationDescription(population: number): string {
  if (population >= 500000) return `meer dan ${Math.round(population / 100000) * 100}.000 inwoners`
  if (population >= 100000) return `ruim ${Math.round(population / 10000) * 10}.000 inwoners`
  if (population >= 50000) return `circa ${Math.round(population / 5000) * 5}.000 inwoners`
  if (population >= 20000) return `ongeveer ${Math.round(population / 1000) * 1}.000 inwoners`
  if (population >= 10000) return `zo'n ${Math.round(population / 1000) * 1}.000 inwoners`
  return `circa ${Math.round(population / 500) * 500} inwoners`
}

/**
 * Formats neighborhoods into a natural Dutch sentence.
 * E.g. "Of u nu in Centrum, Noord of Zuid woont..."
 */
export function formatNeighborhoods(neighborhoods: string[], cityName: string): string {
  if (neighborhoods.length === 0) return ''
  if (neighborhoods.length === 1) return `Of u nu in ${neighborhoods[0]} woont of elders in ${cityName}`
  if (neighborhoods.length === 2) return `Of u nu in ${neighborhoods[0]} of ${neighborhoods[1]} woont`

  const shown = neighborhoods.slice(0, 5)
  const last = shown.pop()
  return `Of u nu in ${shown.join(', ')} of ${last} woont`
}

/**
 * Get all available city slugs with content.
 */
export function getCitySlugsWithContent(): string[] {
  return Object.keys(cityContentData)
}
