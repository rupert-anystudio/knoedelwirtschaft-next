import { getSheetData, getRestaurantData } from '../../lib/api'
import revalidate from '../../lib/revalidate'

export default function ImprintNord() {
  return null
}

export async function getStaticProps({ preview = false, locale, defaultLocale }) {
  const data = await getSheetData(['restaurants'])
  const restaurant = getRestaurantData(data, 'nord')
  return {
    props: {
      restaurant,
      preview,
    },
    revalidate
  }
}
