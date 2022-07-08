import styled from 'styled-components'
import media from '../lib/media'
import { useAppContext } from './AppContext'
import LanguageSelect from './LanguageSelect'
import LogoRestaurant from './LogoRestaurant'
import LogoKw from './LogoKw'
import PlaceSelect from './PlaceSelect'
import Link from 'next/link'

const Wrap = styled.div`
  flex: 1 0 auto;
  position: relative;
`

const Header = styled.div`
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sued & {
    background-color: var(--color-sued);
    color: black;
  }
  .nord & {
    background-color: white;
    color: var(--color-nord);
  }
  ${media.twoCols} {
    position: fixed;
    top: 0;
    width: 50vw;
    height: 100vh;
    .nord & {
      left: 0;
      border-right: 1px solid var(--color-nord);
    }
    .sued & {
      right: 0;
      border-left: 1px solid var(--color-sued);
    }
  }
`

const Lang = styled.div`
  padding: 6rem 0;
  ${media.twoCols} {
    position: absolute;
    bottom: 100%;
  }
`

const PlaceSelectMobile = styled.div`
  height: var(--h-header);
  z-index: 200;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid transparent;
  .sued & {
    background-color: var(--color-sued);
    border-color: var(--color-sued);
    color: black;
  }
  .nord & {
    background-color: white;
    border-color: var(--color-nord);
    color: var(--color-nord);
  }
  ${media.twoCols} {
    display: none;
  }
`

const PlaceSelectDesktop = styled.div`
  display: none;
  ${media.twoCols} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Main = styled.main`
  .nord & {
    color: var(--color-nord);
  }
  .sued & {
    color: black;
  }
  ${media.twoCols} {
    .nord & {
      padding-left: 50vw;
    }
    .sued & {
      padding-right: 50vw;
    }
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 12rem 2rem 9rem 2rem;
  .nord & {
    color: var(--color-nord);
  }
  .sued & {
    color: black;
  }
  ${media.twoCols} {
    .nord & {
      padding-left: 50vw;
    }
    .sued & {
      padding-right: 50vw;
    }
  }
`

const LayoutRestaurant = ({ children, footer = null }) => {
  const {
    globals = {},
    restaurant = {},
    restaurantSlug,
  } = useAppContext()
  const {
    name,
  } = restaurant
  return (
    <Wrap className={restaurantSlug}>
      <Header>
        <div>
          <Lang>
            <LanguageSelect />
          </Lang>
          <Link href='/' passHref>
            <a>
              <LogoKw />
            </a>
          </Link>
          <LogoRestaurant name={name} />
          <PlaceSelectDesktop>
            <PlaceSelect />
          </PlaceSelectDesktop>
        </div>
      </Header>
      <PlaceSelectMobile>
        <PlaceSelect />
      </PlaceSelectMobile>
      <Main>
        {children}
      </Main>
      <Footer>
        {footer}
      </Footer>
    </Wrap>
  )
}

export default LayoutRestaurant