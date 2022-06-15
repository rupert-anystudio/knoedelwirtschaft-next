import JsonLog from '../components/JsonLog'
import { getAppData, getMenuData } from '../lib/api'

export default function Index({ appData, menuData }) {
  // console.log('appData', appData)
  // console.log('menuData', menuData)
  return (
    <div>
      <JsonLog data={menuData} label='menuData' />
      <JsonLog data={appData} label='appData' />
    </div>
  )
}

export async function getStaticProps({ preview = false, locale, defaultLocale }) {
  const appData = await getAppData(locale)
  const menuData = await getMenuData(locale)
  return {
    props: {
      appData,
      menuData,
      preview,
    },
    revalidate: 300, // every 5 minutes
  }
}
