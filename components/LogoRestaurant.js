import styled from 'styled-components'
import media from '../lib/media'
import { useAppContext } from './AppContext'

const Wrap = styled.div`
  text-align: center;
  white-space: pre-wrap;
  font-family: 'Suisse Intl';
  font-size: 9rem;
  line-height: 1;
  .nord & {
    font-family: 'Suisse Intl';
    font-size: clamp(9rem, 26vw, 26rem);
    line-height: 1;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    ${media.twoCols} {
      font-size: clamp(18rem, 15vw, 26rem);
    }
  }
  .sued & {
    font-size: clamp(16rem, 46vw, 38rem);
    line-height: 1;
    letter-spacing: -0.01em;
    font-family: 'Grobe Deutschmeister';
    ${media.twoCols} {
      font-size: clamp(15rem, 26vw, 38rem);
    }
  }
`

const LogoRestaurant = ({ name }) => {
  return (
    <Wrap>
      {name}
    </Wrap>
  )
}

export default LogoRestaurant