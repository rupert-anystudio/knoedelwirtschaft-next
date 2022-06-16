export function getTheme(restaurant = {}) {
  return {
    txt: restaurant?.color_txt || '#000000',
    bg: restaurant?.color_bg || '#ffffff',
  }
}

export function getUnits(arr = []) {
  return arr.reduce((acc, curr) => {
    const { id, unit } = curr
    if (!id || !unit) return acc
    acc[id] = unit
    return acc
  }, {})
}

export function getDrinks(prices_drinks = [], inventory_drinks = [], restaurantSlug, locale, defaultLocale) {
  if (!restaurantSlug) return null

  const priceKey = `price_${restaurantSlug}`
  const prices = prices_drinks.reduce((acc, curr) => {
    const { drink, amount, ...rest } = curr
    if (!drink) return acc
    const price = rest[priceKey]
    if (!price) return acc
    const servings = acc[drink] || []
    acc[drink] = [
      ...servings,
      {
        amount,
        price,
      }
    ]
    return acc
  }, {})

  const availableKey = `available_${restaurantSlug}`
  const drinks = inventory_drinks
    .filter(drink => drink[availableKey] === 'TRUE')
    .reduce((acc, curr) => {
      const { id, category, labels, additives, ...rest } = curr
      if (!id || !category) return acc
      const servings = prices[id]
      if (!servings) return acc
      const name = rest[`name_${locale}`] || rest[`name_${defaultLocale}`]
      const info = rest[`info_${locale}`] || rest[`info_${defaultLocale}`]
      const categoryArr = acc[category] || []
      acc[category] = [
        ...categoryArr,
        {
          id,
          name,
          info,
          servings,
          labels,
          additives,
        }
      ]
      return acc
    }, {})
  

  return drinks
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