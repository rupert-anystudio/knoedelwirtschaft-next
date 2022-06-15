import styled from 'styled-components'
import LanguageSelect from '../LanguageSelect'

const Wrap = styled.header`
  flex: 0 0 auto;
`

export const Header = ({ }) => {
  return (
    <Wrap>
      <LanguageSelect />
    </Wrap>
  )
}