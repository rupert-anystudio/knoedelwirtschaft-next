import Link from 'next/link'
import styled from 'styled-components'

const Elem = styled.a`

`

const AnyLink = ({ children, ...rest }) => {
  return (
    <Link passHref {...rest}>
      <Elem>{children}</Elem>
    </Link>
  )
}

export default AnyLink