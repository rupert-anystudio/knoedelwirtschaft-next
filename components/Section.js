import { forwardRef } from 'react'
import styled from 'styled-components'

const Wrap = styled.section`
  width: 100%;
  padding: 0 var(--gutter);
  position: relative;
  background: var(--bg);
  color: var(--txt);
`

const Content = styled.div`
  width: 100%;
  /* border-bottom: 2px solid currentColor; */
  max-width: var(--maxw-app);
  margin: 0 auto;
  padding: calc(var(--gutter) * 4) 0;
  position: relative;
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
