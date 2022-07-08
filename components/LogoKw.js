import styled from 'styled-components'

const Wrap = styled.div`
  font-family: 'Grobe Deutschmeister';
  font-size: clamp(4rem, 11vw, 6rem);
  line-height: 0.98;
  text-align: center;
  white-space: pre-wrap;
  margin-bottom: 0.3em;
`

const LogoKw = () => {
  return (
    <Wrap>
      {`Knödel\nwirtschaft`}
    </Wrap>
  )
}

export default LogoKw