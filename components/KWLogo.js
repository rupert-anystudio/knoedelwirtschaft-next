import Link from 'next/link'
import styled from 'styled-components'

const Logo = styled.div`
  color: inherit;
  text-decoration: none;
  text-align: center;
  text-rendering: optimizeLegibility;
  font-size: clamp(8em, 26vw, 24em);
`

const KW = styled.div`
  font-size: 0.38em;
  line-height: 0.88;
  white-space: pre-wrap;
  font-family: var(--fraktur);
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
  href,
  ...rest
}) => {
  const logo = (
    <>
      <KW>{`Knödel\nwirtschaft`}</KW>
      <Name>{name}</Name>
      {/* <Area>{area}</Area> */}
    </>
  )
  if (!href) return (
    <Logo {...rest}>
      {logo}
    </Logo>
  )
  return (
    <Logo {...rest}>
      <Link passHref href={href}>
        <a>{logo}</a>
      </Link>
    </Logo>
  )
}

export default KWLogo