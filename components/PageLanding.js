import Link from 'next/link'
import styled from 'styled-components'
import media from '../lib/media'
import themes from '../lib/themes'
import { useAppContext } from './AppContext'
import { LogoArea, LogoMain, LogoRestaurant } from './Logo'
import Main from './Main'

const Restaurants = styled.div`
  position: relative;
  flex: 1 0 auto;
  background-color: red;
  /* display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr;
  ${media.landingTwoCol} {
    grid-template-columns: 1fr 1fr;
  }
  > div {
    flex: 1 0 auto;
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > a {
      padding: 4rem 0;
      ${media.landingTwoCol} {
        padding: 8rem 0;
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
            const theme = themes[slug] || themes.default
            return (
              <div
                key={id}
                style={{
                  color: theme.txt,
                  backgroundColor: theme.bg,
                }}
              >
                <Link
                  href={`/${slug}`}
                  passHref
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