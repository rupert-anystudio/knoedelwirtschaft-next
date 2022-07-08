import Link from 'next/link'
import styled from 'styled-components'
import media from '../lib/media'
import { useAppContext } from './AppContext'
import LogoKw from './LogoKw'
import LogoRestaurant from './LogoRestaurant'
import Pill from './Pill'

const Restaurants = styled.div`
  position: relative;
  flex: 1 0 100vh;
  display: grid;
  grid-template-columns: 1fr;
  ${media.twoCols} {
    grid-template-columns: 1fr 1fr;
  }
`

const Restaurant = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.nord {
    background: white;
    color: var(--color-nord);
  }
  &.sued {
    background: var(--color-sued);
    color: black;
  }
  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const PageLanding = () => {
  const { restaurants = [] } = useAppContext()
  return (
    <Restaurants>
      {restaurants.map(({
        id,
        name,
        city_area,
        slug,
      }) => {
        return (
          <Restaurant
            key={id}
            className={slug}
          >
            <Link
              href={`/${slug}`}
              passHref
              key={id}
            >
              <a>
                <LogoKw />
                <LogoRestaurant name={name} />
                <Pill>{city_area}</Pill>
              </a>
            </Link>
          </Restaurant>
        )
      })}
    </Restaurants>
  )
}

export default PageLanding