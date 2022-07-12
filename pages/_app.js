import '../lib/fontfaces.css'
import GlobalStyles from '../components/GlobalStyles'
import { AppContextProvider } from '../components/AppContext'
import Head from '../components/Head'

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
      <Head />
      <GlobalStyles />
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
