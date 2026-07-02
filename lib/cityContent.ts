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
