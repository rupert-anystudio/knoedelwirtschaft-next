import { forwardRef } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  color: inherit;
  text-decoration: none;
  text-align: center;
  text-rendering: optimizeLegibility;
  font-size: clamp(8rem, 26vw, 24rem);
  margin: 2rem;
`

const KW = styled.div`
  font-size: 0.38em;
  line-height: 0.88;
  white-space: pre-wrap;
  font-family: 'Grobe Deutschmeister';
  font-weight: normal;
`

const Name = styled.div`
  display: block;
  font-size: 1em;
  line-height: 1;
  font-weight: normal;
  text-transform: uppercase;
  margin-top: .25em;
`

const Area = styled.div`
  font-size: .18em;
  line-height: 1;
  font-weight: normal;
  margin-top: -0.45em;
`

const KWLogo = ({
  name,
  area,
}, ref) => {
  return (
    <Wrap ref={ref}>
      <KW>{`Knödel\nwirtschaft`}</KW>
      <Name>{name}</Name>
      <Area>{area}</Area>
    </Wrap>
  )
}

export default forwardRef(KWLogo)