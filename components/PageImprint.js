import { useAppContext } from './AppContext'
import Main from './Main'
import HeaderRestaurant from './HeaderRestaurant'

const PageImprint = () => {
  const { restaurant = {}, globals = {} } = useAppContext()
  const { name } = restaurant
  const { pageImprint } = globals
  return (
    <>
      <HeaderRestaurant />
      <Main>
        <h1>{`${pageImprint} ${name}`}</h1>
      </Main>
    </>
  )
}

export default PageImprint