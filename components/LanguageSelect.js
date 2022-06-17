import Link from 'next/link'
import styled from 'styled-components'
import useLanguageSelect from './useLanguageSelect'

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  a {
    text-decoration: none;
    background: var(--bg);
    color: var(--txt);
    padding: 0.1rem 0.4rem;
    border-radius: .4rem;
    box-shadow: var(--btn-shadow);
    &:not(:last-child) {
      margin-right: .5rem;
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
        >
          <a className={isActive ? 'isActive' : 'isInactive'}>{label}</a>
        </Link>
      ))}
    </Wrap>
  )
}

export default LanguageSelect