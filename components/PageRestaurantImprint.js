import { useAppContext } from './AppContext'
import Main from './Main'
import RestaurantHeader from './RestaurantHeader'

const PageRestaurantImprint = () => {
  const { restaurant } = useAppContext()
  return (
    <>
      <RestaurantHeader />
      <Main>
        <h1>{`Imprint ${restaurant.name}`}</h1>
      </Main>
    </>
  )
}

export default PageRestaurantImprint