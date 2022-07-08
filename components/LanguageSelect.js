import Link from 'next/link'
import styled, { css } from 'styled-components'
import useLanguageSelect from '../hooks/useLanguageSelect'

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid currentColor;
  padding: 0.5rem;
  border-radius: 3rem;
  > a {
    text-transform: uppercase;
    &:not(:last-child) {
      margin-right: .5rem;
    }
  }
`

const Option = styled.a`
  position: relative;
  text-decoration: none;
  background: none;
  color: currentColor;
  padding: .3em .7em .08em .7em;
  border-radius: 1em;
  outline: none;
  appearance: none;
  border: 1px solid transparent;
  font-size: var(--fs-root);
  font-family: var(--ff-root);
  line-height: var(--lh-root);
  cursor: pointer;
  &[disabled] {
    cursor: default;
  }
  &.active {
    pointer-events: none;
    cursor: default;
    .nord & {
      background: var(--color-nord);
      color: white;
    }
    .sued & {
      background: black;
      color: var(--color-sued);
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
      }) => (
        <Link
          key={key}
          href={href}
          locale={locale}
          passHref
          scroll={false}
        >
          <Option className={isActive ? 'active' : ''}>
            {locale}
          </Option>
        </Link>
      ))}
    </Wrap>
  )
}

export default LanguageSelect