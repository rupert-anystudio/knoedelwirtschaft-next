import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import media from '../lib/media'
import { useAppContext } from './AppContext'
import LanguageSelect from './LanguageSelect'
import { LogoArea, LogoMain, LogoRestaurant } from './Logo'

const Header = styled.header`
  flex: 0 0 auto;
  align-self: stretch;
  position: relative;
  padding: 0 2rem;
  ${media.menuTwoCol} {
    z-index: 2;
    position: sticky;
    top: 0;
    /* border-bottom: 1px solid currentColor; */
  }
`

const Content = styled.div`
  width: 100%;
  max-width: var(--maxw-app);
  min-height: var(--h-header);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 2rem 0 1rem 0;
  margin: 0 auto;
  background: var(--bg);
  ${media.leftRight} {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: end;
  }
  ${media.menuTwoCol} {
    /* border-bottom: 1px solid currentColor; */
  }
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  span, a, address {
    display: inline-block;
    white-space: pre-wrap;
    text-decoration: none;
    font-style: normal;
    text-align: inherit;
  }
`

const HoursBlock = styled(Block)`
  ${media.leftRight} {
    align-items: flex-start;
    text-align: left;
    order: 1;
  }
`

const ContactBlock = styled(Block)`
  ${media.leftRight} {
    align-items: flex-end;
    text-align: right;
    order: 3;
  }
`

const ActionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  ${media.leftRight} {
    order: 2;
  }
`

const Intro = styled.div`
  position: relative;
  text-align: center;
  margin: 4rem 0 0 0;
  a {
    display: block;
  }
`

const StickyArea = styled.div`
  margin-bottom: 1.8em;
  ${media.menuTwoCol} {
    z-index: 3;
    position: sticky;
    top: 2rem;
  }
`

const HeaderRestaurant = () => {
  const {
    globals = {},
    restaurant = {},
    getLocaleField,
    slugs,
  } = useAppContext()
  const nextSlug = slugs[0] === 'nord' ? 'sued' : 'nord'
  const hrefRestaurantSwitch = [nextSlug, ...slugs.slice(1)].filter(Boolean).join('/')
  const {
    hoursTitle
  } = globals
  const {
    name,
    city_area,
    phone,
    mail,
    street,
    street_nr,
    postal,
    city,
    ...entry
  } = restaurant
  const hours = getLocaleField(entry, 'hours')
  return (
    <>
      <Intro>
        <Link href='/' passHref>
          <LogoMain as='a'>{`Knödel\nwirtschaft`}</LogoMain>
        </Link>
        <Link href={hrefRestaurantSwitch} passHref scroll={false}>
          <LogoRestaurant as='a'>{name}</LogoRestaurant>
        </Link>
      </Intro>
      <StickyArea>
        <Link href={hrefRestaurantSwitch} passHref scroll={false}>
          <LogoArea as='a'>{city_area}</LogoArea>
        </Link>
      </StickyArea>
      <Header>
        <Content>
          <HoursBlock>
            <span>{hoursTitle}:</span>
            <span>{hours}</span>
          </HoursBlock>
          <ContactBlock>
            <a href={`tel:004930${phone}`}>{`030 / ${phone}`}</a>
            <a href={`mailto:${mail}`}>{mail}</a>
            <address>
              <a
                href={`https://maps.google.com/?q=Knödelwirtschaft,+${street}+${street_nr},+${postal}+${city}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`${street} ${street_nr}, ${postal} ${city}`}
              </a>
            </address>
          </ContactBlock>
          <ActionsBlock>
            {/* <Restaurant>{city_area}</Restaurant> */}
            <LanguageSelect />
          </ActionsBlock>
        </Content>
      </Header>
    </>
  )
}

export default HeaderRestaurant