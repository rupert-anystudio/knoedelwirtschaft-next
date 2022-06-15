import Link from 'next/link'
import styled from 'styled-components'
import useLanguageSelect from './useLanguageSelect'

const Wrap = styled.div`
  display: flex;
  padding: 2rem;
  a {
    margin: 0 .2rem;
    text-decoration: none;
    background: var(--bg);
    color: var(--txt);
    padding: 0.1rem 0.4rem;
    border-radius: .4rem;
    box-shadow: var(--btn-shadow);
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