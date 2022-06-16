import styled from 'styled-components'
import { useAppContext } from './AppContext'
import RestaurantHeader from './RestaurantHeader'

const Wrap = styled.header`
  flex: 0 0 auto;
  background: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

const Header = () => {
  const { restaurant } = useAppContext()
  return (
    <Wrap>
      {restaurant && (
        <RestaurantHeader {...restaurant} />
      )}
    </Wrap>
  )
}

export default Header