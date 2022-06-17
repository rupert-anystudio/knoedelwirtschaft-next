import Link from 'next/link'
import styled from 'styled-components'
import media from '../lib/media'
import { useAppContext } from './AppContext'
import { LogoArea, LogoMain, LogoRestaurant } from './Logo'
import Main from './Main'

const Restaurants = styled.div`
  position: relative;
  flex: 1 0 50vh;
  display: grid;
  grid-template-columns: 1fr;
  ${media.landingTwoCol} {
    /* grid-template-columns: 1fr 1fr; */
  }
  > div {
    flex: 1 0 auto;
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--txt);
    background: var(--bg);
    > a {
      padding: 4rem 0;
      ${media.landingTwoCol} {
        padding: 8rem 0;
      }
    }
    &.overlay {
      grid-column: 1 / -1;
      &:not(:first-child) {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0.4;;
      }
    }
  }
`

const PageLanding = () => {
  const { restaurants = [] } = useAppContext()
  return (
    <>
      <Main>
        <Restaurants>
          {restaurants.map(({
            id,
            name,
            city_area,
            slug,
          }) => {
            // const theme = themes[slug] || themes.default
            return (
              <div key={id} className={slug}>
                <Link
                  href={`/${slug}`}
                  passHref
                  key={id}
                >
                  <a>
                    <LogoMain>{`Knödel\nwirtschaft`}</LogoMain>
                    <LogoRestaurant>{name}</LogoRestaurant>
                    <LogoArea>{city_area}</LogoArea>
                  </a>
                </Link>
              </div>
            )
          })}
        </Restaurants>
        <Restaurants>
          {restaurants.map(({
            id,
            name,
            city_area,
            slug,
          }) => {
            // const theme = themes[slug] || themes.default
            return (
              <div key={id} className={[slug, 'inverted'].join(' ')}>
                <Link
                  href={`/${slug}`}
                  passHref
                  key={id}
                >
                  <a>
                    <LogoMain>{`Knödel\nwirtschaft`}</LogoMain>
                    <LogoRestaurant>{name}</LogoRestaurant>
                    <LogoArea>{city_area}</LogoArea>
                  </a>
                </Link>
              </div>
            )
          })}
        </Restaurants>
        <Restaurants>
          {restaurants.map(({
            id,
            name,
            city_area,
            slug,
          }) => {
            // const theme = themes[slug] || themes.default
            return (
              <div key={id} className={[slug, 'overlay'].join(' ')}>
                <Link
                  href={`/${slug}`}
                  passHref
                  key={id}
                >
                  <a>
                    <LogoMain>{`Knödel\nwirtschaft`}</LogoMain>
                    <LogoRestaurant>{name}</LogoRestaurant>
                    <LogoArea>{city_area}</LogoArea>
                  </a>
                </Link>
              </div>
            )
          })}
        </Restaurants>
      </Main>
    </>
  )
}

export default PageLanding