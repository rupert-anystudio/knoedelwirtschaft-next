import styled from 'styled-components'
import { min } from '../lib/bp'
import { useAppContext } from './AppContext'

const Wrap = styled.div`
  position: relative;
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  color: inherit;
  ${min.tabletPortrait} {
    grid-template-columns: 1fr 1fr;
  }
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  span, a, address {
    display: inline-block;
    white-space: pre-wrap;
    text-decoration: none;
    font-style: normal;
    text-align: inherit;
  }
`

const HoursBlock = styled(Block)``

const ContactBlock = styled(Block)`
  ${min.tabletPortrait} {
    text-align: right;
    align-items: flex-end;
  }
`

const RestaurantInfo = () => {
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
    <Wrap>
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
    </Wrap>
  )
}

export default RestaurantInfo