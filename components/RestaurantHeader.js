import Link from 'next/link'
import styled from 'styled-components'
import KWLogo from './KWLogo'

const Wrap = styled.div`
  flex: 0 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  a {
    text-decoration: none;
    color: inherit;
  }
`

const RestaurantHeader = ({
  name,
  city_area,
}) => {
  return (
    <Wrap>
      <Link
        href='/'
        passHref
      >
        <a>
          <KWLogo
            name={name}
            area={city_area}
          />
        </a>
      </Link>
    </Wrap>
  )
}

export default RestaurantHeader