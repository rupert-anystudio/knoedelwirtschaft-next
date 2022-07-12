import styled from 'styled-components'
import { min } from '../lib/bp'

const LogoWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${min.macbook13} {
    margin-bottom: -6rem;
  }
`

export default LogoWrap