import { forwardRef } from 'react'
import styled from 'styled-components'
import { min } from '../lib/bp'

const Wrap = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 100rem;
  padding: 0 2rem;
  ${min.tabletPortrait} {
    padding: 0 4rem;
  }
`

const Content = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background: inherit;
  color: inherit;
`

const Section = ({ children, contentStyles, ...rest }, ref) => (
  <Wrap {...rest} ref={ref}>
    <Content contentStyles={contentStyles}>
      {children}
    </Content>
  </Wrap>
)

export default forwardRef(Section)
