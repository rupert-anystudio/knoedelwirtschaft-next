import Link from 'next/link'
import styled from 'styled-components'
import useLanguageSelect from '../hooks/useLanguageSelect'
import Button from './Button'

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  > a {
    &:not(:last-child) {
      margin-right: .8em;
    }
  }
`

const LanguageSelect = () => {
  const langs = useLanguageSelect()
  return (
    <Wrap>
      {langs.map(({
        key,
        href,
        locale,
        isActive,
        label,
      }) => (
        <Link
          key={key}
          href={href}
          locale={locale}
          isActive={isActive}
          passHref
          scroll={false}
        >
          <Button
            as='a'
            isActive={isActive}
          >
            {label}
          </Button>
        </Link>
      ))}
    </Wrap>
  )
}

export default LanguageSelect