import '../lib/fontfaces.css'
import Footer from '../components/Footer'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Main from '../components/Main'
import JsonLog from '../components/JsonLog'
import { AppContextProvider } from '../components/AppContext'
import { getRestaurantData, translateValues, getTheme, getUnits, getDrinks } from '../lib/utils'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps = {} }) {
  const {
    data = {},
    restaurantSlug,
    preview = false,
  } = pageProps
  const {
    globals = [],
    restaurants = [],
    additives = [],
    labels = [],
    categories_food = [],
    categories_drinks = [],
    prices_drinks = [],
    menu_dumplings = [],
    inventory_drinks = [],
    inventory_food = [],
  } = data
  const {
    locale,
    defaultLocale,
  } = useRouter()
  const value = {
    restaurant: getRestaurantData(restaurants, restaurantSlug, locale, defaultLocale),
    globals: translateValues(globals, locale, defaultLocale),
    labels: translateValues(labels, locale, defaultLocale),
    additives: translateValues(additives, locale, defaultLocale),
    categories_food: translateValues(categories_food, locale, defaultLocale),
    categories_drinks: translateValues(categories_drinks, locale, defaultLocale),
    units_drinks: getUnits(categories_drinks),
    drinks: getDrinks(prices_drinks, inventory_drinks, restaurantSlug, locale, defaultLocale),
  }
  return (
    <AppContextProvider value={value}>
      <GlobalStyles {...getTheme(value.restaurant)} />
      <Header />
      <Main>
        <Component {...pageProps} />
        <JsonLog data={value} />
      </Main>
      <Footer />
    </AppContextProvider>
  )
}

export default MyApp
