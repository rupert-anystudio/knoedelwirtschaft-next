import { parseNumber } from '../lib/utils'
import { useAppContext } from '../components/AppContext'

export const useDishes = (category) => {
  const {
    data = {},
    getRestaurantField,
    getLocaleField,
    getIsAvailable,
  } = useAppContext()
  const dishes = (data?.inventory_food || [])
    .filter(entry => entry.category === category)
    .filter(entry => getIsAvailable(entry))
    .map(({ id, ...entry }) => {
      const dish = {
        id,
        name: getLocaleField(entry, 'name'),
      }
      const info = getLocaleField(entry, 'info')
      if (info) { dish.info = info }
      const price = getRestaurantField(entry, 'price')
      if (price) { dish.price = parseNumber(price) }
      const additives = getRestaurantField(entry, 'additives')
      if (additives) { dish.additives = additives }
      return dish
    })
  return dishes
}

export const useDumplingDishes = () => {
  const {
    data = {},
    getRestaurantField,
    getLocaleField,
  } = useAppContext()
  const dishes = (data?.menu_dumplings || [])
    .map(({ id, ...entry }) => {
      return {
        id,
        name: getLocaleField(entry, 'info'),
        price: parseNumber(getRestaurantField(entry, 'price')),
      }
    })
  return dishes
}

export const useDrinksByCategory = () => {
  const {
    data = {},
    restaurantSlug,
    getRestaurantField,
    getLocaleField,
  } = useAppContext()

  if (!restaurantSlug) return []

  const {
    prices_drinks = [],
    inventory_drinks = [],
    categories_drinks = [],
  } = data

  const drinkPrices = prices_drinks.reduce((acc, curr) => {
    const { drink, amount } = curr
    if (!drink) return acc
    const price = getRestaurantField(curr, 'price')
    if (!price) return acc
    const servings = acc[drink] || []
    servings.push({
      amount: parseNumber(amount),
      price: parseNumber(price),
    })
    acc[drink] = servings
    return acc
  }, {})

  const availableDrinks = inventory_drinks
    .filter(drink => drink[`available_${restaurantSlug}`] === 'TRUE')
    .reduce((acc, curr) => {
      const {
        id,
        category,
        labels = '',
        additives = '',
      } = curr
      if (!id || !category) return acc
      const prices = drinkPrices[id]
      if (!prices) return acc
      const name = getLocaleField(curr, 'name')
      const info = getLocaleField(curr, 'info')
      const categoryArr = acc[category] || []
      categoryArr.push({
        id,
        name,
        info,
        prices,
        labels,
        additives,
      })
      acc[category] = categoryArr
      return acc
    }, {})

  const drinksByCategory = categories_drinks.reduce((acc, category) => {
    const { id, unit } = category
    const name = getLocaleField(category, 'name')
    const drinks = availableDrinks[id]
    if (!drinks) return acc
    acc.push({
      id,
      name,
      unit,
      drinks,
    })
    return acc
  }, [])

  return drinksByCategory
}