import '../lib/fontfaces.css'
import Footer from '../components/Footer'
import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import LanguageSelect from '../components/LanguageSelect'
import RestaurantHeader from '../components/RestaurantHeader'
import Main from '../components/Main'
import getTheme from '../lib/getTheme'

function MyApp({ Component, pageProps = {} }) {
  const {
    restaurant,
    isLanding = false,
  } = pageProps
  const theme = getTheme(restaurant)
  return (
    <>
      <GlobalStyles {...theme} />
      <Header>
        {!isLanding && <LanguageSelect />}
      </Header>
      <Main>
        {restaurant && (
          <RestaurantHeader {...restaurant} />
        )}
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
