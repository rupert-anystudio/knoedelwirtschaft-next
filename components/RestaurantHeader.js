import styled from 'styled-components'
import media from '../lib/media'
import { useAppContext } from './AppContext'
import LanguageSelect from './LanguageSelect'

const Header = styled.header`
  flex: 0 0 auto;
  align-self: stretch;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 0 2rem;
  ${media.leftRight} {
    min-height: var(--h-header);
    background: var(--bg);
    z-index: 2;
    position: sticky;
    top: 0;
  }
`

const Blocks = styled.div`
  width: 100%;
  position: relative;
  padding: 2em 0;
  border-bottom: 1px dashed currentColor;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1em;
  ${media.leftRight} {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: end;
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

const Logo = styled.div`
  font-size: var(--fs-logo);
  line-height: var(--lh-logo);
  white-space: pre-wrap;
  font-family: var(--fraktur);
  text-align: center;
  margin-bottom: 0.8em;
  margin-top: 1.2em;
`

const Name = styled.div`
  font-size: var(--fs-logo-name);
  line-height: var(--lh-logo-name);
  text-transform: uppercase;
  white-space: pre-wrap;
  font-family: var(--sans);
  text-align: center;
  margin-bottom: -0.1em;
`

const Kiez = styled.div`
  font-size: var(--fs-title);
  line-height: var(--lh-title);
  ${media.leftRight} {
    z-index: 3;
    position: sticky;
    top: 1rem;
  }
`

const RestaurantHeader = () => {
  const {
    globals = {},
    restaurant = {},
    getLocaleField,
  } = useAppContext()
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
      <Logo>{`Knödel\nwirtschaft`}</Logo>
      <Name>{name}</Name>
      <Kiez>{city_area}</Kiez>
      <Header>
        <Blocks>
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
        </Blocks>
      </Header>
    </>
  )
}

export default RestaurantHeader