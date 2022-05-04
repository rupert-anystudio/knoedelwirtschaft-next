import styled from 'styled-components'
import LanguageSwitch from '../LanguageSwitch'

const Wrap = styled.header``

export const Header = ({ hoursRange, hoursTitle, restaurant }) => {
  const { phone, mail, street, streetNr, postal, city } = restaurant
  return (
    <Wrap>
      <LanguageSwitch />
      <div>
        <p>{hoursTitle}:</p>
        <p>{hoursRange}</p>
      </div>
      <div>
        <a href={`tel:004930${phone}`}>030 / {phone}</a><br />
        <a href={`mailto:${mail}`}>{mail}</a>
        <address>
          <a href={`https://maps.google.com/?q=Knödelwirtschaft,+${street}+${streetNr},+${postal}+${city}`} target="_blank" rel="noopener noreferrer">{`${street} ${streetNr}, ${postal} ${city}`}</a>
        </address>
      </div>
    </Wrap>
  )
}