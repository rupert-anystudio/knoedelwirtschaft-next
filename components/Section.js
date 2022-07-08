import { forwardRef } from 'react'
import styled from 'styled-components'

const Wrap = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 2rem;
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
