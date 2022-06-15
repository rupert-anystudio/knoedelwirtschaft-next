import { getSheetData, getRestaurantData } from '../../lib/api'
import revalidate from '../../lib/revalidate'

export default function ImprintSued({ restaurant }) {
  return (
    <>
      Imprint Sued
    </>
  )
}

export async function getStaticProps({ preview = false, locale, defaultLocale }) {
  const data = await getSheetData(['restaurants'])
  const restaurant = getRestaurantData(data, 'sued')
  return {
    props: {
      restaurant,
      preview,
    },
    revalidate
  }
}
