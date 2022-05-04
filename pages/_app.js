import Footer from '../components/Footer'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Main from '../components/Main'

function MyApp({ Component, pageProps = {} }) {
  // const { appData = {} } = pageProps
  // const { globals = {}, restaurants = {} } = appData
  // const { hoursRange, hoursTitle } = globals
  // const restaurant = restaurants.fulda
  return (
    <>
      <GlobalStyles />
      {/* <Header
        hoursRange={hoursRange}
        hoursTitle={hoursTitle}
        restaurant={restaurant}
      /> */}
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
