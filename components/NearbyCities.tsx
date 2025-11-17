import Link from 'next/link'

interface NearbyCitiesProps {
  currentCity: string
  pageType: 'student-aan-huis' | 'computerhulp-aan-huis'
}

// Mapping van steden naar nabije steden
const nearbyMapping: Record<string, string[]> = {
  'rotterdam': ['schiedam', 'vlaardingen', 'capelle-aan-den-ijssel', 'ridderkerk', 'barendrecht'],
  'den-haag': ['rijswijk', 'leidschendam-voorburg', 'wassenaar', 'delft', 'zoetermeer'],
  'leiden': ['leiderdorp', 'oegstgeest', 'voorschoten', 'zoeterwoude', 'katwijk'],
  'delft': ['den-haag', 'rijswijk', 'pijnacker-nootdorp', 'midden-delfland', 'schiedam'],
  'dordrecht': ['zwijndrecht', 'papendrecht', 'sliedrecht', 'alblasserdam', 'hendrik-ido-ambacht'],
  'zoetermeer': ['den-haag', 'pijnacker-nootdorp', 'waddinxveen', 'gouda', 'leidschendam-voorburg'],
  'gouda': ['waddinxveen', 'zoetermeer', 'bodegraven-reeuwijk', 'moordrecht', 'alphen-aan-den-rijn'],
  'alphen-aan-den-rijn': ['gouda', 'bodegraven-reeuwijk', 'kaag-en-braassem', 'leiden', 'nieuwkoop'],
  'vlaardingen': ['rotterdam', 'schiedam', 'maassluis', 'westland'],
  'schiedam': ['rotterdam', 'vlaardingen', 'delft', 'midden-delfland'],
  'rijswijk': ['den-haag', 'delft', 'leidschendam-voorburg', 'pijnacker-nootdorp'],
  'capelle-aan-den-ijssel': ['rotterdam', 'krimpen-aan-den-ijssel', 'nieuwerkerk-aan-den-ijssel'],
  'gorinchem': ['hardinxveld-giessendam', 'molenlanden', 'giessenlanden'],
  'leidschendam-voorburg': ['den-haag', 'rijswijk', 'voorschoten', 'wassenaar'],
  'katwijk': ['leiden', 'oegstgeest', 'noordwijk', 'teylingen'],
  'pijnacker-nootdorp': ['delft', 'zoetermeer', 'rijswijk', 'lansingerland'],
  'lansingerland': ['rotterdam', 'pijnacker-nootdorp', 'zoetermeer', 'capelle-aan-den-ijssel'],
  'maassluis': ['vlaardingen', 'westland', 'hoek-van-holland'],
  'noordwijk': ['katwijk', 'leiden', 'teylingen', 'hillegom'],
  'ridderkerk': ['rotterdam', 'barendrecht', 'zwijndrecht', 'albrandswaard'],
  'barendrecht': ['rotterdam', 'ridderkerk', 'albrandswaard', 'zwijndrecht'],
  'wassenaar': ['den-haag', 'leidschendam-voorburg', 'leiden', 'katwijk'],
  'leiderdorp': ['leiden', 'zoeterwoude', 'alphen-aan-den-rijn', 'oegstgeest'],
  'voorschoten': ['leiden', 'leidschendam-voorburg', 'wassenaar', 'oegstgeest'],
  'waddinxveen': ['gouda', 'zoetermeer', 'alphen-aan-den-rijn', 'bodegraven-reeuwijk'],
  'bodegraven-reeuwijk': ['gouda', 'waddinxveen', 'alphen-aan-den-rijn'],
  'oegstgeest': ['leiden', 'katwijk', 'voorschoten', 'leiderdorp'],
  'albrandswaard': ['rotterdam', 'barendrecht', 'ridderkerk', 'hoeksche-waard'],
  'papendrecht': ['dordrecht', 'sliedrecht', 'alblasserdam', 'hendrik-ido-ambacht'],
  'zwijndrecht': ['dordrecht', 'ridderkerk', 'hendrik-ido-ambacht', 'papendrecht'],
  'krimpen-aan-den-ijssel': ['capelle-aan-den-ijssel', 'rotterdam', 'krimpenerwaard'],
  'hillegom': ['noordwijk', 'lisse', 'kaag-en-braassem', 'teylingen'],
  'lisse': ['hillegom', 'kaag-en-braassem', 'noordwijk', 'teylingen'],
  'sliedrecht': ['dordrecht', 'papendrecht', 'hardinxveld-giessendam', 'alblasserdam'],
  'alblasserdam': ['dordrecht', 'papendrecht', 'hendrik-ido-ambacht', 'sliedrecht'],
  'hendrik-ido-ambacht': ['dordrecht', 'zwijndrecht', 'papendrecht', 'alblasserdam'],
  'teylingen': ['katwijk', 'noordwijk', 'hillegom', 'lisse'],
  'kaag-en-braassem': ['alphen-aan-den-rijn', 'leiden', 'lisse', 'hillegom'],
  'krimpenerwaard': ['gouda', 'krimpen-aan-den-ijssel', 'molenlanden'],
  'westland': ['vlaardingen', 'maassluis', 'den-haag', 'delft'],
  'midden-delfland': ['delft', 'schiedam', 'rotterdam', 'westland'],
  'hardinxveld-giessendam': ['gorinchem', 'sliedrecht', 'molenlanden'],
  'molenlanden': ['gorinchem', 'hardinxveld-giessendam', 'krimpenerwaard'],
  'hoeksche-waard': ['dordrecht', 'albrandswaard', 'barendrecht'],
  'goeree-overflakkee': ['nissewaard', 'hellevoetsluis'],
  'nissewaard': ['rotterdam', 'vlaardingen', 'goeree-overflakkee'],
  'westvoorne': ['nissewaard', 'hellevoetsluis', 'rotterdam'],
  'zoeterwoude': ['leiden', 'leiderdorp', 'alphen-aan-den-rijn'],
  'nieuwkoop': ['alphen-aan-den-rijn', 'kaag-en-braassem', 'bodegraven-reeuwijk']
}

// Format stad naam voor display
const formatCityName = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default function NearbyCities({ currentCity, pageType }: NearbyCitiesProps) {
  const nearbyCities = nearbyMapping[currentCity] || []

  if (nearbyCities.length === 0) {
    return null
  }

  const titleText = pageType === 'student-aan-huis'
    ? 'Student aan Huis in omliggende steden'
    : 'Computerhulp aan Huis in omliggende steden'

  const parentLink = pageType === 'student-aan-huis'
    ? { url: '/student-aan-huis', text: 'Bekijk alle steden in Zuid-Holland' }
    : { url: '/computerhulp-aan-huis', text: 'Bekijk alle steden in Zuid-Holland' }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {titleText}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {nearbyCities.slice(0, 10).map(city => (
            <Link
              key={city}
              href={`/${pageType}-${city}`}
              className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all group"
            >
              <svg
                className="w-5 h-5 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                {formatCityName(city)}
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href={parentLink.url}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            {parentLink.text}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
