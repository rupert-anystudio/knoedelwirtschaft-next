import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import media from '../lib/media'
import { useAppContext } from './AppContext'
import LanguageSelect from './LanguageSelect'
import { LogoArea, LogoMain, LogoRestaurant } from './Logo'
import Section from './Section'

const Intro = styled.div`
  position: relative;
  text-align: center;
  padding: calc(var(--gutter) * 4) 0 0 0;
  background: var(--bg);
  color: var(--txt);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: var(--fs-logo);
`

const Header = styled.header`
  flex: 0 0 auto;
  align-self: stretch;
  position: relative;
  background: var(--bg);
  color: var(--txt);
  ${media.leftRight} {
    z-index: 2;
    position: sticky;
    top: 0;
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: inherit;
      height: 4rem;
      box-shadow: 0px 0 50px -9px rgba(0,0,0,0.8);
    }
  }
  > div {
    position: relative;
    padding: 0 var(--gutter);
    background: var(--bg);
    color: var(--txt);
  }
`

const Content = styled.div`
  width: 100%;
  max-width: var(--maxw-app);
  min-height: var(--h-header);
  padding: var(--gutter) 0 calc(var(--gutter) * 4) 0;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--gutter);
  margin: 0 auto;
  background: var(--bg);
  color: var(--txt);
  /* border-bottom: 1px solid currentColor; */
  ${media.leftRight} {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: end;
    padding-bottom: var(--gutter);
  }
  ${media.large} {
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

const LogoArea_ = styled(LogoArea)`
  z-index: 3;
  ${media.leftRight} {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
`

const StickyArea = styled.span`
  ${media.leftRight} {
    position: sticky;
    top: var(--gutter);
    width: auto;
    margin-bottom: -99999px;
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
        <Link href={hrefRestaurantSwitch} passHref scroll={false}>
          <LogoArea_ as='a'>
            <StickyArea>{city_area}</StickyArea>
          </LogoArea_>
        </Link>
      </Intro>
      <Header>
        <div>
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
        </div>
      </Header>
    </>
  )
}

export default HeaderRestaurant