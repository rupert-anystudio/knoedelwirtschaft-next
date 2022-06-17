import styled from 'styled-components'

const Wrap = styled.footer`
  flex: 0 0 auto;
  width: 100%;
  padding: 0 var(--gutter);
  background: var(--bg);
  color: var(--txt);
`

const Content = styled.div`
  max-width: var(--maxw-app);
  margin: 0 auto;
  padding: calc(var(--gutter) * 8) 0 calc(var(--gutter) * 2) 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

const Footer = ({ children, ...rest }) => (
  <Wrap {...rest}>
    <Content>
      {children}
    </Content>
  </Wrap>
)

export default Footer