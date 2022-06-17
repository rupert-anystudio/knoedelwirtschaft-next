import { useAppContext } from './AppContext'
import RestaurantHeader from './RestaurantHeader'
import Main from './Main'
import Menue, { MenueCol, Section } from './Menue'
import Drinks from './Drinks'
import Dishes from './Dishes'
import { useDishes, useDrinksByCategory, useDumplingDishes } from './menueHooks'

const PageRestaurant = () => {
  const { globals = {}, restaurant } = useAppContext()
  const { menuDumplings, menuSavory, menuDessert, menuDrinks } = globals
  const dumplingDishes = useDumplingDishes()
  const dumplings = useDishes('dumpling')
  const sauces = useDishes('sauce')
  const dishes = useDishes('dish')
  const desserts = useDishes('dessert')
  const drinksByCategory = useDrinksByCategory()
  return (
    <>
      <RestaurantHeader />
      <Main>
        <Menue>
          <MenueCol>
            <Section title={menuDumplings}>
              <Dishes entries={dumplingDishes} isSmall />
              <Dishes entries={dumplings} />
              <Dishes entries={sauces} />
            </Section>
            <Section title={menuSavory}>
              <Dishes entries={dishes} />
            </Section>
            <Section title={menuDessert}>
              <Dishes entries={desserts} />
            </Section>
          </MenueCol>
          <MenueCol>
            <Section title={menuDrinks}>
              <Drinks entries={drinksByCategory} />
            </Section>
          </MenueCol>
        </Menue>
      </Main>
    </>
  )
}

export default PageRestaurant