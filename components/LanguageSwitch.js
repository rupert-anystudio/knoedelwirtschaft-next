import { useRouter } from 'next/router'
import Link from 'next/link'

const LanguageSwitch = () => {
  const { locale, locales, asPath } = useRouter()
  return (
    <div>
      {locales.map(loc => (
        <Link
          key={loc}
          href={asPath}
          locale={loc}
          isActive={loc === locale}
          scroll={false}
          passHref
        >
          <a>{loc}</a>
        </Link>
      ))}
    </div>
  )
}

export default LanguageSwitch
