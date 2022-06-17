import { useRouter } from 'next/router'
import { createContext, useCallback, useContext } from 'react'
import themes from '../lib/themes'

export const AppContext = createContext(null)

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({ children, data = {}, restaurantSlug }) => {
  const {
    locale,
    defaultLocale,
    pathname,
  } = useRouter()

  const slugs = pathname.slice(1).split('/').filter(Boolean)

  const restaurant = data?.restaurants?.find(restr => restr.slug === restaurantSlug)
  const theme = themes[restaurantSlug] || themes.default

  const getRestaurantField = useCallback((entry = {}, field = 'value') => {
    return entry[`${field}_${restaurantSlug}`] || null
  }, [restaurantSlug])

  const getLocaleField = useCallback((entry = {}, field = 'value') => {
    return entry[`${field}_${locale}`] || entry[`${field}_${defaultLocale}`] || null
  }, [locale, defaultLocale])

  const getIsAvailable = useCallback((entry = {}) => {
    return getRestaurantField(entry, 'available') === 'TRUE'
  }, [getRestaurantField])

  const globals = data?.globals?.reduce((acc, { id, ...entry }) => {
    if (!id) return acc
    acc[id] = getLocaleField(entry, 'value')
    return acc
  }, {})

  const additives = data?.additives?.reduce((acc, { id, ...entry }) => {
    if (!id) return acc
    acc[id] = getLocaleField(entry, 'value')
    return acc
  }, {})

  const labels = data?.labels?.reduce((acc, { id, ...entry }) => {
    if (!id) return acc
    acc[id] = getLocaleField(entry, 'name')
    return acc
  }, {})

  return (
    <AppContext.Provider
      value={{
        data,
        restaurantSlug,
        restaurant,
        restaurants: data.restaurants,
        globals,
        labels,
        additives,
        theme,
        getLocaleField,
        getRestaurantField,
        getIsAvailable,
        slugs,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}