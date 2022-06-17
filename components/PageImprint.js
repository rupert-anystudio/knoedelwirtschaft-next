import { useAppContext } from './AppContext'
import Main from './Main'
import HeaderRestaurant from './HeaderRestaurant'
import Footer from './Footer'
import AnyLink from './AnyLink'

const PageImprint = () => {
  const { restaurant = {}, globals = {}, restaurantSlug } = useAppContext()
  const { name } = restaurant
  const { pageImprint } = globals
  return (
    <Main as='div' className={`${restaurantSlug}`}>
      <HeaderRestaurant />
      <Main>
        <h1>{`${pageImprint} ${name}`}</h1>
      </Main>
      <Footer>
        <AnyLink href={`/${restaurantSlug}`}>{'BACK'}</AnyLink>
      </Footer>
    </Main>
  )
}

export default PageImprint