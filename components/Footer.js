import styled from 'styled-components'

const Wrap = styled.footer`
  flex: 0 0 auto;
  width: 100%;
  padding: 0 2rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 12rem 0 9rem 0;
`

const Footer = ({ children, ...rest }) => (
  <Wrap {...rest}>
    <Content>
      {children}
    </Content>
  </Wrap>
)

export default Footer