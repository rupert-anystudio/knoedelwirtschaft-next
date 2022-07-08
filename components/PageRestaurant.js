import { useAppContext } from './AppContext'
import { useDishes, useDrinksByCategory, useDumplingDishes } from '../hooks/menueHooks'
import RestaurantInfo from './RestaurantInfo'
import Section from './Section'
import Menue, { MenueCol, MenueSection } from './Menue'
import Drinks from './Drinks'
import Dishes from './Dishes'
import Booking from './Booking'
import LayoutRestaurant from './LayoutRestaurant'
import TakeoutInfo from './TakeoutInfo'
import Link from 'next/link'

const PageRestaurant = () => {
  const {
    globals = {},
    restaurantSlug,
  } = useAppContext()
  const {
    menuDumplings,
    menuSavory,
    menuDessert,
    menuDrinks,
    pageImprint,
  } = globals
  const dumplingDishes = useDumplingDishes()
  const dumplings = useDishes('dumpling')
  const sauces = useDishes('sauce')
  const dishes = useDishes('dish')
  const desserts = useDishes('dessert')
  const drinksByCategory = useDrinksByCategory()
  return (
    <LayoutRestaurant
      footer={<Link href={`/${restaurantSlug}/imprint`} passHref><a>{pageImprint}</a></Link>}
    >
      <Section>
        <RestaurantInfo />
      </Section>
      <Section>
        <TakeoutInfo />
        {/* <Booking /> */}
      </Section>
      <Section>
        <Menue>
          <MenueCol>
            <MenueSection title={menuDumplings}>
              <Dishes entries={dumplingDishes} isSmall />
              <Dishes entries={dumplings} noBorder />
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
    </LayoutRestaurant>
  )
}

export default PageRestaurant