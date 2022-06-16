export function getTheme(restaurant = {}) {
  return {
    txt: restaurant?.color_txt || '#000000',
    bg: restaurant?.color_bg || '#ffffff',
  }
}

export function getRestaurantData(restaurants = [], slug, locale, defaultLocale) {
  if (!slug) return null
  const currentRestaurant = restaurants.find(r => r.slug === slug)
  if (!currentRestaurant) return null
  const { hours_de, hours_en, ...restaurant } = currentRestaurant
  const hours = {
    de: hours_de,
    en: hours_en,
  }
  return {
    ...restaurant,
    hours: hours[locale] || hours[defaultLocale],
  }
}

export function translateValues(arr = [], locale, defaultLocale) {
  return arr.reduce((acc, curr) => {
    const { id, value_de, value_en, name_de, name_en } = curr
    if (!id) return acc
    const values = {
      en: value_en || name_en,
      de: value_de || name_de,
    }
    acc[id] = values[locale] || values[defaultLocale]
    return acc
  }, {})
}