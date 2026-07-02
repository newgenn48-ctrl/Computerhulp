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
    description: 'Alblasserdam ligt aan de samenvloeiing van de Noord en de Lek en is wereldwijd bekend door de UNESCO-Werelderfgoed molens van Kinderdijk. Dit levendige stadje in de Drechtsteden combineert rijke waterstaathistorie met moderne woonwijken.',
    highlights: ['Molens van Kinderdijk (UNESCO)', 'Rivier de Noord', 'Historische scheepswerf']
  },
  'dordrecht': {
    population: 120000,
    region: 'Drechtsteden',
    neighborhoods: ['Centrum', 'Krispijn', 'Dubbeldam', 'Sterrenburg', 'Stadspolders', 'Wielwijk', 'Reeland', 'De Staart', 'Oud-Krispijn', 'Nieuw-Krispijn'],
    description: 'Dordrecht is de oudste stad van Holland en het kloppend hart van de Drechtsteden. Met ruim 120.000 inwoners biedt deze historische eilandstad een unieke mix van monumentale binnenstad, havens en moderne woonwijken omringd door water.',
    highlights: ['Oudste stad van Holland', 'Grote Kerk', 'Dordts Museum', 'Biesbosch Nationaal Park']
  },
  'hendrik-ido-ambacht': {
    population: 32000,
    region: 'Drechtsteden',
    neighborhoods: ['Centrum', 'Sandelingen-Ambacht', 'Volgerlanden', 'Oostendam', 'De Volgerlanden-West', 'Watervallen'],
    description: 'Hendrik-Ido-Ambacht is een snelgroeiende gemeente in de Drechtsteden, bekend om de moderne nieuwbouwwijk Volgerlanden. Het dorp combineert dorpse gezelligheid met uitstekende verbindingen naar Rotterdam en Dordrecht.',
    highlights: ['Nieuwbouwwijk Volgerlanden', 'Sophiapolder natuurgebied', 'Waal- en IJsselzicht']
  },
  'papendrecht': {
    population: 32500,
    region: 'Drechtsteden',
    neighborhoods: ['Centrum', 'Westpolder', 'Kraaihoek', 'Middenpolder', 'Oostpolder', 'Molenvliet', 'Noordhoek'],
    description: 'Papendrecht is een dynamische gemeente aan de Noord, recht tegenover Dordrecht. De stad is een belangrijk centrum voor maritieme industrie en baggertechnologie en biedt een groene, kindvriendelijke woonomgeving.',
    highlights: ['Maritiem bedrijventerrein', 'Baggermuseum', 'Langs de Noord uiterwaarden']
  },
  'sliedrecht': {
    population: 25500,
    region: 'Drechtsteden',
    neighborhoods: ['Centrum', 'Baanhoek', 'Merwestein', 'Polder Buitenland', 'Westwijk', 'Rivierenbuurt'],
    description: 'Sliedrecht is de wereldhoofdstad van de baggerindustrie, gelegen aan de Beneden-Merwede. Dit nijvere dorp in de Drechtsteden heeft een sterke maritieme identiteit en biedt een hechte gemeenschap met goede voorzieningen.',
    highlights: ['Wereldhoofdstad baggerindustrie', 'Nationaal Baggermuseum', 'Beneden-Merwede rivierfront']
  },
  'zwijndrecht': {
    population: 45000,
    region: 'Drechtsteden',
    neighborhoods: ['Centrum', 'Nederhov', 'Heer Oudelands Ambacht', 'Walburg', 'Kort Ambacht', 'Develstein', 'Meerdervoort'],
    description: 'Zwijndrecht ligt direct ten noorden van Dordrecht, verbonden door de iconische Drechttunnel en Zwijndrechtse brug. De gemeente biedt een rustige woonomgeving met goede OV-verbindingen naar Rotterdam en de Drechtsteden.',
    highlights: ['Drechttunnel naar Dordrecht', 'Develpark', 'Station Zwijndrecht intercitystation']
  },
  'hardinxveld-giessendam': {
    population: 19000,
    region: 'Alblasserwaard',
    neighborhoods: ['Hardinxveld', 'Giessendam', 'Neder-Hardinxveld', 'Boven-Hardinxveld', 'Het Paard'],
    description: 'Hardinxveld-Giessendam is een langgerekte dijkgemeente langs de Merwede in de Alblasserwaard. De twee kernen bieden een dorps karakter met sterke banden met de scheepsbouw en visserij.',
    highlights: ['Dijklint langs de Merwede', 'Scheepsbouwtraditie', 'Visserijhistorie']
  },

  // === RIJNMOND (ROTTERDAM REGIO) ===
  'rotterdam': {
    population: 655000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Kralingen-Crooswijk', 'Delfshaven', 'Feijenoord', 'Noord', 'Hillegersberg-Schiebroek', 'Overschie', 'Prins Alexander', 'Charlois', 'IJsselmonde', 'Hoogvliet', 'Hoek van Holland'],
    description: 'Rotterdam is de tweede stad van Nederland en heeft de grootste haven van Europa. Deze bruisende havenstad staat bekend om zijn spectaculaire skyline, vernieuwende architectuur en multiculturele karakter. Van de Erasmusbrug tot de Markthal — Rotterdam verrast altijd.',
    highlights: ['Erasmusbrug', 'Markthal', 'Euromast', 'Havens van Rotterdam', 'Kubuswoningen']
  },
  'schiedam': {
    population: 80000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Oost', 'West', 'Zuid', 'Nieuwland', 'Groenoord', 'Kethel', 'Woudhoek', 'Spaland'],
    description: 'Schiedam is de jeneverstad van Nederland, met de hoogste windmolens ter wereld en een prachtige historische binnenstad vol grachten. Direct naast Rotterdam gelegen, combineert Schiedam stedelijke voorzieningen met eigen karakter.',
    highlights: ['Hoogste windmolens ter wereld', 'Jenevermuseum', 'Historische grachten', 'Stadskantoor']
  },
  'vlaardingen': {
    population: 73000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Holy', 'Westwijk', 'Vlaardinger Ambacht', 'Babberspolder', 'VOP', 'Oostwijk', 'Rivierzone'],
    description: 'Vlaardingen is een voormalige haringstad aan de Nieuwe Waterweg met een rijke visserijgeschiedenis. De stad ondergaat een grote transformatie met de herontwikkeling van het Rivierzone-gebied en biedt betaalbaar wonen nabij Rotterdam.',
    highlights: ['Visserijmuseum', 'Oude Haven', 'Rivierzone herontwikkeling', 'Broekpolder recreatiegebied']
  },
  'maassluis': {
    population: 33000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Sluispolder', 'Kapelpolder', 'Koningshoek', 'Steendijkpolder', 'Wilgenrijk'],
    description: 'Maassluis is een gezellige havenstad aan de Nieuwe Waterweg, bekend van de sleepboten en de jaarlijkse intocht van Sinterklaas. Met de nieuwe wijk Wilgenrijk groeit de stad, terwijl het historische centrum zijn charme behoudt.',
    highlights: ['Nationaal Sleepvaart Museum', 'Sinterklaasintocht (landelijk)', 'Stadshart aan de haven']
  },
  'capelle-aan-den-ijssel': {
    population: 67000,
    region: 'Rijnmond',
    neighborhoods: ['Schollevaar', 'Schenkel', 'Fascinatio', 'Capelle-West', 'Middelwatering', 'Oostgaarde', '\'s-Gravenland'],
    description: 'Capelle aan den IJssel is een stad direct ten oosten van Rotterdam, gelegen aan de Hollandse IJssel. Bekend om het moderne bedrijventerrein Rivium en de diverse woonwijken, biedt Capelle stedelijk gemak met veel groen en water.',
    highlights: ['Bedrijvenpark Rivium', 'Schollebos park', 'Hollandse IJssel waterfront']
  },
  'krimpen-aan-den-ijssel': {
    population: 29500,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Lansingh', 'Kortland', 'Oud-Krimpen', 'Langeland', 'Stormpolder'],
    description: 'Krimpen aan den IJssel ligt aan de Hollandse IJssel, direct ten oosten van Rotterdam. De Algera-stormvloedkering — een van de Deltawerken — is een markant herkenningspunt. Krimpen biedt dorps wonen op fietsafstand van de stad.',
    highlights: ['Algera-stormvloedkering (Deltawerken)', 'Hollandse IJssel', 'Stormpolder bedrijventerrein']
  },
  'ridderkerk': {
    population: 47000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Drievliet', 'Ridderkerk-West', 'Slikkerveer', 'Bolnes', 'Oostendam', 'Rijsoord'],
    description: 'Ridderkerk is een groene gemeente op het eiland IJsselmonde, centraal gelegen tussen Rotterdam en Dordrecht. Met wijken als Bolnes en Slikkerveer langs het water biedt Ridderkerk een rustige woonomgeving met uitstekende bereikbaarheid.',
    highlights: ['Eiland IJsselmonde', 'Watersportmogelijkheden', 'Knooppunt A15/A16']
  },
  'barendrecht': {
    population: 49000,
    region: 'Rijnmond',
    neighborhoods: ['Centrum', 'Carnisselande', 'Buitenoord', 'Vrijenburg', 'Molenvliet', 'Riederhoek', 'De Stee'],
    description: 'Barendrecht is een welvarende forensengemeente ten zuiden van Rotterdam, bekend om de grote veiling BGB en de Heinenoordtunnel. De moderne wijk Carnisselande en het gezellige oude dorpscentrum maken Barendrecht een populaire woonplaats.',
    highlights: ['Fruit- en groenteveiling', 'Barendrechtse Brug', 'Winkelcentrum Carnisse Veste']
  },
  'albrandswaard': {
    population: 25500,
    region: 'Rijnmond',
    neighborhoods: ['Poortugaal', 'Rhoon', 'Portland'],
    description: 'Albrandswaard bestaat uit de dorpen Poortugaal en Rhoon, gelegen tussen Rotterdam en de Oude Maas. De gemeente biedt een groen en landelijk karakter met kasteel Rhoon als historisch middelpunt, op een steenworp van de Randstad.',
    highlights: ['Kasteel Rhoon', 'Landgoed Rhoon', 'Oude Maas waterfront']
  },
  'lansingerland': {
    population: 65000,
    region: 'Rijnmond',
    neighborhoods: ['Berkel en Rodenrijs', 'Bergschenhoek', 'Bleiswijk', 'Westpolder', 'Meerpolder'],
    description: 'Lansingerland is een jonge, snelgroeiende gemeente gevormd uit Berkel en Rodenrijs, Bergschenhoek en Bleiswijk. Gelegen tussen Rotterdam en Den Haag, met station Lansingerland-Zoetermeer aan de RandstadRail, biedt de gemeente modern wonen in het groen.',
    highlights: ['RandstadRail verbinding', 'Glastuinbouw Bleiswijk', 'Recreatiegebied Rottemeren']
  },
  'nissewaard': {
    population: 85000,
    region: 'Rijnmond',
    neighborhoods: ['Spijkenisse', 'Hekelingen', 'Simonshaven', 'Zuidland', 'Abbenbroek', 'Geervliet', 'Heenvliet'],
    description: 'Nissewaard, met Spijkenisse als grootste kern, is de poort naar Voorne-Putten. De gemeente biedt een mix van stedelijke voorzieningen en landelijke dorpen. Het Waterbus-netwerk verbindt de gemeente snel met Rotterdam.',
    highlights: ['Boekenberg bibliotheek (architectuur)', 'Waterbus naar Rotterdam', 'Bernisse natuurgebied']
  },
  'westvoorne': {
    population: 15000,
    region: 'Rijnmond',
    neighborhoods: ['Rockanje', 'Oostvoorne', 'Tinte', 'Stuifakker', 'De Hoef'],
    description: 'Westvoorne is de kustgemeente op de punt van Voorne-Putten, met de badplaatsen Rockanje en Oostvoorne. Strand, duinen en het Voornes Duin natuurgebied maken dit de groene long van de Rotterdamse regio.',
    highlights: ['Stranden van Rockanje', 'Voornes Duin natuurgebied', 'Fort Brielle nabijheid', 'Oostvoornse Meer']
  },

  // === HAAGLANDEN ===
  'den-haag': {
    population: 550000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Scheveningen', 'Loosduinen', 'Laak', 'Segbroek', 'Escamp', 'Leyenburg', 'Benoordenhout', 'Bezuidenhout', 'Haagse Hout', 'Leidschenveen-Ypenburg', 'Mariahoeve'],
    description: 'Den Haag is de residentiestad van Nederland, zetel van de regering en het Internationaal Gerechtshof. Met de mondaine kust van Scheveningen, het Binnenhof en een bruisend cultureel leven is Den Haag een unieke stad waar politiek, cultuur en strand samenkomen.',
    highlights: ['Binnenhof', 'Vredespaleis', 'Scheveningen strand', 'Mauritshuis', 'Madurodam']
  },
  'delft': {
    population: 104000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Wippolder', 'Voorhof', 'Buitenhof', 'TU-wijk', 'Tanthof', 'Vrijenban', 'Hof van Delft'],
    description: 'Delft is wereldberoemd om het Delfts Blauw aardewerk en de historische banden met het Koninklijk Huis. De stad is ook thuisbasis van de Technische Universiteit Delft en combineert eeuwenoude grachten met innovatieve technologie.',
    highlights: ['Delfts Blauw aardewerk', 'TU Delft campus', 'Nieuwe Kerk (Koninklijke grafkelder)', 'Vermeer Centrum']
  },
  'rijswijk': {
    population: 55000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Bomenbuurt', 'Muziekbuurt', 'Stationskwartier', 'Plaspoelpolder', 'Te Werve', 'Oud Rijswijk'],
    description: 'Rijswijk ligt centraal tussen Den Haag en Delft en is bekend van de Vrede van Rijswijk. Met het vernieuwde Stationskwartier, veel internationale bedrijven en een mix van stadse en dorpse wijken is Rijswijk een veelzijdige gemeente.',
    highlights: ['Vrede van Rijswijk (1697)', 'In de Bogaard winkelcentrum', 'Plaspoelpolder bedrijvengebied']
  },
  'leidschendam-voorburg': {
    population: 76000,
    region: 'Haaglanden',
    neighborhoods: ['Leidschendam-Centrum', 'Voorburg', 'Stompwijk', 'De Heuvel', 'Prinsenhof', 'Duivenvoorde', 'Klein Plaspoelpolder'],
    description: 'Leidschendam-Voorburg is de groene buffer tussen Den Haag en de Vliet. Voorburg noemt zich de oudste stad van Nederland (Romeins Forum Hadriani) en biedt met het Huygenskwartier en de Vlietzone een cultuurrijke woonomgeving.',
    highlights: ['Forum Hadriani (Romeinse stad)', 'Huygenskwartier', 'De Vliet waterweg', 'Mall of the Netherlands']
  },
  'wassenaar': {
    population: 27000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Duinrell', 'De Kieviet', 'Maaldrift', 'Rijksdorp', 'Kerkehout', 'Oud-Wassenaar'],
    description: 'Wassenaar is een welgestelde gemeente tussen Den Haag en Leiden, omgeven door duinen, bossen en landgoederen. Het dorp staat bekend om Duinrell, prachtige villawijken en een landelijk karakter dicht bij de kust.',
    highlights: ['Duinrell attractiepark', 'Landgoed De Horsten', 'Meijendel duingebied', 'Ambassadewijk']
  },
  'pijnacker-nootdorp': {
    population: 55000,
    region: 'Haaglanden',
    neighborhoods: ['Pijnacker', 'Nootdorp', 'Delfgauw', 'Klapwijk', 'Ackerswoude', 'Emerald', 'Keijzershof'],
    description: 'Pijnacker-Nootdorp is een snelgroeiende gemeente tussen Delft en Zoetermeer, verbonden met Den Haag door de RandstadRail. De nieuwe wijk Keijzershof en het dorpse karakter van Nootdorp maken het een gewilde woonlocatie voor jonge gezinnen.',
    highlights: ['RandstadRail haltes', 'Dobbeplas recreatiegebied', 'Glastuinbouwgebied', 'Ackerswoude ecowijk']
  },
  'midden-delfland': {
    population: 20000,
    region: 'Haaglanden',
    neighborhoods: ['Maasland', 'Schipluiden', 'Den Hoorn', 'Woudse Polder'],
    description: 'Midden-Delfland is het groene hart van de Haagse regio, met uitgestrekte polders, koeien en historische dorpskernen. De gemeente bewaart bewust het open landschap tussen Delft, Den Haag en Rotterdam als rustpunt in de Randstad.',
    highlights: ['Open polderlandschap', 'Commandeursmolen Maasland', 'Kanoroutes door polders', 'Boerderijwinkels']
  },
  'westland': {
    population: 112000,
    region: 'Haaglanden',
    neighborhoods: ['Naaldwijk', 'Monster', 's-Gravenzande', 'De Lier', 'Wateringen', 'Honselersdijk', 'Poeldijk', 'Ter Heijde', 'Kwintsheul', 'Maasdijk'],
    description: 'Westland is de glazen stad van Nederland — het grootste aaneengesloten kassengebied ter wereld. Met tien dorpskernen en de kustplaatsen Monster en Ter Heijde biedt Westland een unieke mix van tuinbouwinnovatie, dorpsleven en strand.',
    highlights: ['Grootste kassengebied ter wereld', 'Varend Corso', 'Strand van Monster en Ter Heijde', 'Flora Holland veiling']
  },
  'zoetermeer': {
    population: 127000,
    region: 'Haaglanden',
    neighborhoods: ['Centrum', 'Meerzicht', 'Buytenwegh', 'Seghwaert', 'Stadshart', 'Rokkeveen', 'Oosterheem', 'Palenstein', 'Driemanspolder'],
    description: 'Zoetermeer is in vijftig jaar uitgegroeid van dorp tot de derde stad van Zuid-Holland. Met het moderne Stadshart, SnowWorld en directe RandstadRail naar Den Haag biedt Zoetermeer een jong en dynamisch woonklimaat.',
    highlights: ['SnowWorld indoor skihal', 'Stadshart winkelcentrum', 'RandstadRail naar Den Haag', 'Buytenpark recreatie']
  },

  // === HOLLAND RIJNLAND / LEIDSE REGIO ===
  'leiden': {
    population: 126000,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Leiden-Noord', 'Merenwijk', 'Stevenshof', 'Roomburg', 'De Kooi', 'Pancras-West', 'Mors', 'Professorenwijk', 'Zuidwest'],
    description: 'Leiden is de oudste universiteitsstad van Nederland, geboorteplaats van Rembrandt en thuisbasis van het LUMC. De stad combineert een monumentale binnenstad vol grachten met een levendig studentenleven en wetenschappelijke innovatie.',
    highlights: ['Universiteit Leiden (1575)', 'Rijksmuseum van Oudheden', 'Naturalis', 'Rembrandt geboorteplaats', 'Hortus Botanicus']
  },
  'leiderdorp': {
    population: 27500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Elisabethhof', 'Plantage', 'Ouderzorg', 'Voorhof', 'De Bloemerd', 'Buitenhof'],
    description: 'Leiderdorp grenst direct aan Leiden en biedt een rustige, groene woonomgeving met uitstekende bereikbaarheid. Het winkelcentrum Winkelhof en de nabijheid van het Bio Science Park maken Leiderdorp een populaire woonplaats in de Leidse regio.',
    highlights: ['Winkelcentrum Winkelhof', 'Leidse Hout park', 'Bio Science Park nabijheid', 'DoeMere recreatieplas']
  },
  'oegstgeest': {
    population: 24500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Poelgeest', 'Haaswijk', 'Morsebel', 'Nieuw-Rhijngeest', 'Endegeest'],
    description: 'Oegstgeest is een groen en welgesteld dorp naast Leiden, met historische landgoederen en een dorps karakter. De gemeente biedt rust en ruimte op loopafstand van de Leidse binnenstad, universiteit en het Bio Science Park.',
    highlights: ['Landgoed Endegeest', 'Poelgeest kasteel', 'Rijn- en Schiekanaal', 'Groene villawijken']
  },
  'voorschoten': {
    population: 25500,
    region: 'Holland Rijnland',
    neighborhoods: ['Centrum', 'Krimwijk', 'Bijdorp', 'Leidseweg-Noord', 'Vlietwijk', 'Starrenburg'],
    description: 'Voorschoten is een rustig en groen dorp tussen Leiden en Den Haag, gelegen langs de Vliet. Met historische landhuizen, het Vlietland recreatiegebied en een gezellig dorpscentrum biedt Voorschoten landelijk wonen in de Randstad.',
    highlights: ['Landgoed Berbice', 'Vlietland recreatiegebied', 'Station Voorschoten', 'Duivenvoordecorridor']
  },
  'zoeterwoude': {
    population: 8500,
    region: 'Holland Rijnland',
    neighborhoods: ['Zoeterwoude-Dorp', 'Zoeterwoude-Rijndijk', 'Gelderswoude', 'Weipoort'],
    description: 'Zoeterwoude is de kleinste gemeente in onze regio, bekend als thuisbasis van de Heineken brouwerij. Het polderlandschap en de twee compacte dorpskernen bieden een authentiek Hollands dorpsleven op een steenworp van Leiden.',
    highlights: ['Heineken brouwerij', 'Polderlandschap', 'Zoeterwoude-Dorp historische kern']
  },
  'kaag-en-braassem': {
    population: 27500,
    region: 'Holland Rijnland',
    neighborhoods: ['Roelofarendsveen', 'Leimuiden', 'Rijnsaterwoude', 'Oude Wetering', 'Kaag', 'Bilderdam', 'Hoogmade', 'Woubrugge'],
    description: 'Kaag en Braassem is een waterrijke gemeente rond de Kagerplassen en Braassemermeer. Met pittoreske dorpjes als Kaag en Roelofarendsveen is het een paradijs voor watersporters en liefhebbers van het Groene Hart.',
    highlights: ['Kagerplassen', 'Braassemermeer', 'Eiland van Kaag', 'Watersportcentrum']
  },

  // === BOLLENSTREEK ===
  'noordwijk': {
    population: 43000,
    region: 'Bollenstreek',
    neighborhoods: ['Noordwijk aan Zee', 'Noordwijk-Binnen', 'De Grent', 'Boechorst', 'Offem', 'Zeewijk'],
    description: 'Noordwijk is de badplaats van de Bollenstreek, bekend om het brede zandstrand, de Space Expo en de kleurrijke bollenvelden in het voorjaar. Als congress- en badplaats trekt Noordwijk jaarrond bezoekers en biedt het een uniek kust-woonklimaat.',
    highlights: ['Noordwijk aan Zee strand', 'Space Expo (ESA)', 'Bollenvelden', 'Vuurtoren']
  },
  'katwijk': {
    population: 66000,
    region: 'Bollenstreek',
    neighborhoods: ['Katwijk aan Zee', 'Katwijk aan den Rijn', 'Rijnsburg', 'Valkenburg', 'Hoornes', 'De Noord'],
    description: 'Katwijk is een kustgemeente waar het strand van Katwijk aan Zee overgaat in de Rijnmonding. Met het voormalige vissersdorp, de bloemenveilingtraditie van Rijnsburg en de ruïnes van Valkenburg biedt Katwijk een verrassende diversiteit.',
    highlights: ['Strand van Katwijk', 'Andreaskerk (visserskerk)', 'Ruïne van Valkenburg', 'Rijnmonding bij zee']
  },
  'hillegom': {
    population: 22000,
    region: 'Bollenstreek',
    neighborhoods: ['Centrum', 'Elsbroek', 'Hillegom-Zuid', 'Pastoorslaan-buurt', 'Meer en Duin', 'De Zanderij'],
    description: 'Hillegom is een bloemenbol-gemeente in het hart van de Bollenstreek, gelegen tussen Haarlem en Leiden. In het voorjaar kleuren de velden rond Hillegom in alle tinten, terwijl het dorpscentrum een gezellige winkelstraat biedt.',
    highlights: ['Bollenvelden in voorjaar', 'Keukenhof nabijheid', 'Vogelenzang bosgebied', 'Treslong landgoed']
  },
  'lisse': {
    population: 23000,
    region: 'Bollenstreek',
    neighborhoods: ['Centrum', 'Poelpolder', 'Meer en Dorp', 'Heereweg-gebied', 'Waterbolk', 'Lisserbroek'],
    description: 'Lisse is de thuisbasis van de wereldberoemde Keukenhof en het kloppend hart van de Nederlandse bloembollenteelt. Elk voorjaar is Lisse het middelpunt van de bollentijd met miljoenen bezoekers uit de hele wereld.',
    highlights: ['Keukenhof (7 miljoen bezoekers/jaar)', 'Bloemencorso', 'Museum De Zwarte Tulp', 'Kasteel Keukenhof']
  },
  'teylingen': {
    population: 38000,
    region: 'Bollenstreek',
    neighborhoods: ['Sassenheim', 'Voorhout', 'Warmond', 'De Kagerdreef', 'Sassenheim-Noord', 'Voorhout-West'],
    description: 'Teylingen bestaat uit de kernen Sassenheim, Voorhout en Warmond en ligt op de grens van Bollenstreek en plassenlint. De ruïne van Teylingen en het watersportdorp Warmond aan de Kagerplassen geven de gemeente een bijzonder karakter.',
    highlights: ['Ruïne van Teylingen', 'Warmond aan de Kagerplassen', 'Bloembollencultuur', 'Kasteel Oud Poelgeest']
  },

  // === GROENE HART ===
  'gouda': {
    population: 74000,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Goverwelle', 'Bloemendaal', 'Plaswijck', 'Kort Haarlem', 'Achterwillens', 'Oosterwei', 'Noord'],
    description: 'Gouda is wereldberoemd om de Goudse kaas, stroopwafels en de prachtige Sint-Janskerk met de langste gebrandschilderde ramen van Nederland. De historische kaasmarkt op het Marktplein en Gouda bij Kaarslicht in december trekken jaarlijks duizenden bezoekers.',
    highlights: ['Goudse Waag en kaasmarkt', 'Sint-Janskerk (langste glazen)', 'Gouda bij Kaarslicht', 'Stadhuis (een van de oudste van Nederland)']
  },
  'alphen-aan-den-rijn': {
    population: 112000,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Ridderveld', 'Kerk en Zanen', 'De Baronie', 'Oudshoorn', 'Gnephoek', 'Boskoop', 'Hazerswoude-Dorp', 'Hazerswoude-Rijndijk', 'Benthuizen'],
    description: 'Alphen aan den Rijn is de grootste stad van het Groene Hart, gelegen aan de Oude Rijn. Met Archeon, het Avifauna vogelpark en de fusie met Boskoop (stad van de boomkwekerij) biedt Alphen een veelzijdige woonomgeving in het groen.',
    highlights: ['Archeon themapark', 'Avifauna vogelpark', 'Boskoop boomkwekerijen', 'Zegerplas recreatieplas']
  },
  'bodegraven-reeuwijk': {
    population: 35000,
    region: 'Groene Hart',
    neighborhoods: ['Bodegraven', 'Reeuwijk-Brug', 'Reeuwijk-Dorp', 'Driebruggen', 'Waarder', 'Nieuwerbrug'],
    description: 'Bodegraven-Reeuwijk is een groene gemeente in het hart van het Groene Hart, met de beroemde Reeuwijkse Plassen. Bodegraven is een levendig centrum met Kaasstad-traditie, terwijl de Reeuwijkse Plassen een oase van rust bieden.',
    highlights: ['Reeuwijkse Plassen', 'Kaasstad Bodegraven', 'Groene Hart fietsroutes', 'Broekvelden natuurgebied']
  },
  'waddinxveen': {
    population: 30000,
    region: 'Groene Hart',
    neighborhoods: ['Centrum', 'Zuidplas', 'Bomenwijk', 'Groenswaard', 'Triangel', 'Park Triangel'],
    description: 'Waddinxveen is een groeiend dorp aan de Gouwe, op het kruispunt van het Groene Hart. De nieuwe wijk Park Triangel en goede verbindingen met Gouda en de Randstad maken Waddinxveen populair bij jonge gezinnen.',
    highlights: ['Park Triangel nieuwbouwwijk', 'Gouwe waterweg', 'Station Waddinxveen', 'Petteplas recreatie']
  },
  'nieuwkoop': {
    population: 28000,
    region: 'Groene Hart',
    neighborhoods: ['Nieuwkoop', 'Nieuwveen', 'Ter Aar', 'Zevenhoven', 'Noorden', 'Woerdense Verlaat', 'Langeraar'],
    description: 'Nieuwkoop is een waterrijke gemeente met de Nieuwkoopse Plassen als natuurjuweel. De diverse dorpskernen liggen verspreid door het veenweidelandschap van het Groene Hart en bieden een authentiek Hollands dorpsleven.',
    highlights: ['Nieuwkoopse Plassen (Natura 2000)', 'Veenweidelandschap', 'Ter Aar dorpskern', 'Kanoroutes']
  },
  'krimpenerwaard': {
    population: 56000,
    region: 'Groene Hart',
    neighborhoods: ['Schoonhoven', 'Bergambacht', 'Lekkerkerk', 'Ammerstol', 'Stolwijk', 'Haastrecht', 'Vlist', 'Gouderak', 'Ouderkerk aan den IJssel'],
    description: 'Krimpenerwaard is een uitgestrekte poldergemeente met de zilverstad Schoonhoven als historisch centrum. Van het Nederlands Zilvermuseum tot de open polders langs de Lek en Hollandse IJssel — de Krimpenerwaard is het Groene Hart op zijn mooist.',
    highlights: ['Zilverstad Schoonhoven', 'Nederlands Zilvermuseum', 'Polderlandschap langs de Lek', 'Haastrecht historisch stadje']
  },

  // === ALBLASSERWAARD-VIJFHEERENLANDEN ===
  'gorinchem': {
    population: 37000,
    region: 'Alblasserwaard',
    neighborhoods: ['Centrum', 'Haarwijk', 'Wijdschild', 'Stalkaarsen', 'Gildenwijk', 'De Helling', 'Gorinchem-Oost', 'Laag Dalem'],
    description: 'Gorinchem, ook wel Gorkum genoemd, is een vestingstad aan de Merwede met een van de best bewaarde vestingwallen van Nederland. De stad is de poort tussen de Alblasserwaard en de Betuwe en biedt een sfeervolle historische binnenstad.',
    highlights: ['Vestingwallen (17e eeuw)', 'Grote Toren (Toren van Gorkum)', 'Merwedefront', 'Vestingmuseum']
  },
  'molenlanden': {
    population: 45000,
    region: 'Alblasserwaard',
    neighborhoods: ['Groot-Ammers', 'Bleskensgraaf', 'Brandwijk', 'Molenaarsgraaf', 'Oud-Alblas', 'Nieuw-Lekkerland', 'Streefkerk', 'Wijngaarden', 'Hoornaar', 'Giessenlanden'],
    description: 'Molenlanden is de grootste poldergemeente van Zuid-Holland, een landschap van dijken, molens en rivieren in de Alblasserwaard. De vele dorpskernen langs de Lek en het open polderlandschap maken Molenlanden tot het authentieke platteland van Zuid-Holland.',
    highlights: ['Open polderlandschap', 'Dijkdorpen langs de Lek', 'Kinderdijk nabijheid', 'Ruilverkavelingswegen']
  },

  // === HOEKSCHE WAARD ===
  'hoeksche-waard': {
    population: 90000,
    region: 'Hoeksche Waard',
    neighborhoods: ['Oud-Beijerland', 'Strijen', 's-Gravendeel', 'Numansdorp', 'Puttershoek', 'Piershil', 'Klaaswaal', 'Maasdam', 'Mijnsheerenland', 'Westmaas'],
    description: 'De Hoeksche Waard is een eiland tussen de grote rivieren, bereikbaar via de Haringvlietbrug en Heinenoordtunnel. Met Oud-Beijerland als centrale kern biedt het eiland een mix van agrarisch landschap, dijkdorpen en een sterke lokale gemeenschap.',
    highlights: ['Eiland-karakter', 'Tiengemeten natuureiland', 'Hoeksche Waardse dijken', 'Haringvlietbrug']
  },

  // === GOEREE-OVERFLAKKEE ===
  'goeree-overflakkee': {
    population: 50000,
    region: 'Goeree-Overflakkee',
    neighborhoods: ['Middelharnis', 'Sommelsdijk', 'Goedereede', 'Ouddorp', 'Dirksland', 'Stellendam', 'Nieuwe-Tonge', 'Oude-Tonge', 'Stad aan het Haringvliet', 'Den Bommel'],
    description: 'Goeree-Overflakkee is het meest zuidwestelijke eiland van Zuid-Holland, met de populaire badplaats Ouddorp en de pittoreske havenplaats Goedereede. Het eiland biedt uitgestrekte stranden, Deltawerken en een eigen eilandcultuur.',
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
    description: 'Hellevoetsluis is een levendige havenstad aan het Haringvliet, ooit de belangrijkste marinehaven van de Republiek. De historische vestingwerken, het gezellige havenkwartier en de directe ligging aan het water maken het populair bij watersporters.',
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
    region: 'Voorne aan Zee',
    neighborhoods: ['Centrum', 'Sterrenkwartier', 'Waterland', 'Groenewoud', 'Vriesland', 'De Elementen', 'Vogelenzang', 'Maaswijk', 'De Hoek'],
    description: 'Spijkenisse is de grootste stad van gemeente Voorne aan Zee en groeide vanaf 1970 uit tot een moderne woonstad met eigen metroverbinding naar Rotterdam. Het centrum rondom de Stadswinkel, de Boekenberg-bibliotheek en het Metrostation bieden alle stedelijke voorzieningen aan de rand van Voorne.',
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
