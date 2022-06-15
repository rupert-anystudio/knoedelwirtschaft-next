import '../lib/fontfaces.css'
import Footer from '../components/Footer'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Main from '../components/Main'
import getTheme from '../lib/getTheme'

function MyApp({ Component, pageProps = {} }) {
  const { restaurant = {} } = pageProps
  const theme = getTheme(restaurant)
  return (
    <>
      <GlobalStyles {...theme} />
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
