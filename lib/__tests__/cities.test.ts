import {
  cities,
  citySlugs,
  getCityBySlug,
  getCityName,
  getNearbyCities,
  services,
} from '../cities'

describe('cities data', () => {
  it('should have 49 cities', () => {
    expect(cities.length).toBe(49)
  })

  it('should have unique slugs', () => {
    const uniqueSlugs = new Set(cities.map(c => c.slug))
    expect(uniqueSlugs.size).toBe(cities.length)
  })

  it('should have all required properties for each city', () => {
    cities.forEach(city => {
      expect(city).toHaveProperty('slug')
      expect(city).toHaveProperty('name')
      expect(city).toHaveProperty('latitude')
      expect(city).toHaveProperty('longitude')
      expect(typeof city.slug).toBe('string')
      expect(typeof city.name).toBe('string')
      expect(typeof city.latitude).toBe('number')
      expect(typeof city.longitude).toBe('number')
    })
  })

  it('should have valid coordinates', () => {
    cities.forEach(city => {
      // Zuid-Holland latitude range approximately 51.7 - 52.4
      expect(city.latitude).toBeGreaterThan(51.5)
      expect(city.latitude).toBeLessThan(52.5)
      // Zuid-Holland longitude range approximately 4.0 - 5.0
      expect(city.longitude).toBeGreaterThan(3.9)
      expect(city.longitude).toBeLessThan(5.1)
    })
  })
})

describe('citySlugs', () => {
  it('should contain all city slugs', () => {
    expect(citySlugs.length).toBe(49)
    expect(citySlugs).toContain('rotterdam')
    expect(citySlugs).toContain('den-haag')
    expect(citySlugs).toContain('leiden')
  })
})

describe('getCityBySlug', () => {
  it('should return city for valid slug', () => {
    const rotterdam = getCityBySlug('rotterdam')
    expect(rotterdam).toBeDefined()
    expect(rotterdam?.name).toBe('Rotterdam')
    expect(rotterdam?.latitude).toBeCloseTo(51.9225, 3)
  })

  it('should return undefined for invalid slug', () => {
    const unknown = getCityBySlug('unknown-city')
    expect(unknown).toBeUndefined()
  })

  it('should be case sensitive', () => {
    const Rotterdam = getCityBySlug('Rotterdam')
    expect(Rotterdam).toBeUndefined()
  })
})

describe('getCityName', () => {
  it('should return city name for valid slug', () => {
    expect(getCityName('rotterdam')).toBe('Rotterdam')
    expect(getCityName('den-haag')).toBe('Den Haag')
    expect(getCityName('alphen-aan-den-rijn')).toBe('Alphen aan den Rijn')
  })

  it('should return slug for invalid slug', () => {
    expect(getCityName('unknown')).toBe('unknown')
  })
})

describe('getNearbyCities', () => {
  it('should return nearby cities', () => {
    const nearby = getNearbyCities('rotterdam', 5)
    expect(nearby.length).toBe(5)
    expect(nearby.every(c => c.slug !== 'rotterdam')).toBe(true)
  })

  it('should return cities sorted by distance', () => {
    const nearby = getNearbyCities('rotterdam', 3)
    // Schiedam should be very close to Rotterdam
    const slugs = nearby.map(c => c.slug)
    expect(slugs).toContain('schiedam')
  })

  it('should not include the current city', () => {
    const nearby = getNearbyCities('leiden', 10)
    expect(nearby.find(c => c.slug === 'leiden')).toBeUndefined()
  })

  it('should return first N cities for unknown slug', () => {
    const nearby = getNearbyCities('unknown-city', 3)
    expect(nearby.length).toBe(3)
  })

  it('should respect the count parameter', () => {
    expect(getNearbyCities('gouda', 3).length).toBe(3)
    expect(getNearbyCities('gouda', 10).length).toBe(10)
  })
})

describe('services', () => {
  it('should have 9 services', () => {
    expect(services.length).toBe(9)
  })

  it('should include common services', () => {
    expect(services).toContain('computer-laptop-hulp')
    expect(services).toContain('wifi-internet-hulp')
    expect(services).toContain('printer-scanner-hulp')
  })
})
