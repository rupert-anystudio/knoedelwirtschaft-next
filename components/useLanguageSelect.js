import { useRouter } from 'next/router'

const languages = {
  de: 'Deutsch',
  en: 'English'
}

const useLanguageSelect = () => {
  const { locale, locales, asPath } = useRouter()
  return locales.map(loc => ({
    key: loc,
    href: asPath,
    locale: loc,
    isActive: loc === locale,
    label: languages[loc] || loc
  }))
}

export default useLanguageSelect
