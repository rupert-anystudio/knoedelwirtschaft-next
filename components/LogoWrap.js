import styled from 'styled-components'
import media from '../lib/media'

const LogoWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.twoCols} {
    margin-bottom: -6rem;
  }
`

export default LogoWrap