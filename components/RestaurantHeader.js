import Link from 'next/link'
import styled from 'styled-components'

const Wrap = styled.div`
  flex: 0 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  background: var(--bg);
  padding: 2rem;
  a {
    color: var(--txt)
  }
`

const RestaurantHeader = ({ name, city_area }) => {
  return (
    <Wrap>
      <Link href='/' passHref>
        <a>
          <div>
            <span>Knödel</span>
            <span>wirtschaft</span>
          </div>
          <strong>{name}</strong>
          <i>{city_area}</i>
        </a>
      </Link>
    </Wrap>
  )
}

export default RestaurantHeader