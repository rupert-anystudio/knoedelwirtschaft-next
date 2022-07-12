import NextHead from 'next/head'
import { useAppContext } from './AppContext'

const Head = () => {
  const { globals = {} } = useAppContext()
  const { yes } = globals
  const description = "Mhm lecker"
  return (
    <NextHead>
      <title>{`${yes} - Knödelwirtschaft`}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={yes} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={yes} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="Any Studio" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
    </NextHead>
  )
}

export default Head