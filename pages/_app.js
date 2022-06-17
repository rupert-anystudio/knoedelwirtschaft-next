import '../lib/fontfaces.css'
import GlobalStyles from '../components/GlobalStyles'
import { AppContextProvider } from '../components/AppContext'
import themes from '../lib/themes'

function MyApp({ Component, pageProps = {} }) {
  const {
    data = {},
    restaurantSlug = 'default',
  } = pageProps
  const theme = themes[restaurantSlug] || themes.default
  return (
    <AppContextProvider data={data} restaurantSlug={restaurantSlug}>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
