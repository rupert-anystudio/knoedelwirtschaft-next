import Link from 'next/link'
import styled from 'styled-components'
import { useAppContext } from './AppContext'
import KWLogo from './KWLogo'
import LanguageSelect from './LanguageSelect'

const Wrap = styled.div`
  flex: 1 0 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  a {
    flex: 0 0 auto;
    text-decoration: none;
    color: inherit;
  }
`

const InfoBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1024px;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2rem;
  div {
    span, a, address {
      display:block;
      white-space: pre-wrap;
      text-decoration: none;
      font-style: normal;
    }
    &:first-child {
      text-align: left;
    }
    &:last-child {
      text-align: right;
    }
  }
`

const RestaurantHeader = ({
  name,
  city_area,
  phone,
  mail,
  street,
  street_nr,
  postal,
  city,
  hours,
}) => {
  const { globals } = useAppContext()
  return (
    <Wrap>
      <LanguageSelect />
      <Link
        href='/'
        passHref
      >
        <a>
          <KWLogo
            name={name}
            area={city_area}
          />
        </a>
      </Link>
      <InfoBar>
        <div>
          <span>{globals.hoursTitle}:</span>
          <span>{hours}</span>
        </div>
        <div>
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
        </div>
      </InfoBar>
    </Wrap>
  )
}

export default RestaurantHeader