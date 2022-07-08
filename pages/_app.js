import '../lib/fontfaces.css'
import GlobalStyles from '../components/GlobalStyles'
import { AppContextProvider } from '../components/AppContext'

function MyApp({ Component, pageProps = {} }) {
  const {
    data = {},
    restaurantSlug = null,
  } = pageProps
  return (
    <AppContextProvider
      data={data}
      restaurantSlug={restaurantSlug}
    >
      <GlobalStyles />
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
