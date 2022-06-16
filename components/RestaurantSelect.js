import Link from 'next/link'
import styled from 'styled-components'
import KWLogo from './KWLogo'

const Wrap = styled.div`
  flex: 1 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Restaurant = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

const RestaurantSelect = ({ restaurants }) => {
  return (
    <Wrap>
      {restaurants.map(({
        id,
        name,
        city_area,
        color_txt,
        color_bg,
        slug,
      }) => {
        return (
          <Link
            href={`/${slug}`}
            passHref
            key={id}
          >
            <Restaurant
              style={{
                color: color_txt,
                backgroundColor: color_bg
              }}
            >
              <KWLogo
                name={name}
                area={city_area}
              />
            </Restaurant>
          </Link>
        )
      })}
    </Wrap>
  )
}

export default RestaurantSelect