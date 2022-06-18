import { useAppContext } from './AppContext'
import HeaderRestaurant from './HeaderRestaurant'
import Main from './Main'
import Menue, { MenueCol, MenueSection } from './Menue'
import Drinks from './Drinks'
import Dishes from './Dishes'
import { useDishes, useDrinksByCategory, useDumplingDishes } from '../hooks/menueHooks'
import Footer from './Footer'
import AnyLink from './AnyLink'
import TakeoutInfo from './TakeoutInfo'
import Booking from './Booking'
import Section from './Section'

const PageRestaurant = () => {
  const { globals = {}, restaurant = {}, restaurantSlug } = useAppContext()
  const { menuDumplings, menuSavory, menuDessert, menuDrinks, pageImprint } = globals
  const dumplingDishes = useDumplingDishes()
  const dumplings = useDishes('dumpling')
  const sauces = useDishes('sauce')
  const dishes = useDishes('dish')
  const desserts = useDishes('dessert')
  const drinksByCategory = useDrinksByCategory()
  return (
    <Main as='div' className={restaurantSlug}>
      <HeaderRestaurant />
      <Main>
        <Section className={`${restaurantSlug}`}>
          <TakeoutInfo />
          <Booking />
        </Section>
        <Section className={`${restaurantSlug}`}>
          <Menue>
            <MenueCol>
              <MenueSection title={menuDumplings}>
                <Dishes entries={dumplingDishes} isSmall />
                <Dishes entries={dumplings} />
                <Dishes entries={sauces} />
              </MenueSection>
              <MenueSection title={menuSavory}>
                <Dishes entries={dishes} />
              </MenueSection>
              <MenueSection title={menuDessert}>
                <Dishes entries={desserts} />
              </MenueSection>
            </MenueCol>
            <MenueCol>
              <MenueSection title={menuDrinks}>
                <Drinks entries={drinksByCategory} />
              </MenueSection>
            </MenueCol>
          </Menue>
        </Section>
      </Main>
      <Footer className={`${restaurantSlug}`}>
        <AnyLink href={`/${restaurantSlug}/imprint`}>{pageImprint}</AnyLink>
      </Footer>
    </Main>
  )
}

export default PageRestaurant