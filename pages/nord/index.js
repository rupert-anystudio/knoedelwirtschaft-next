import RestaurantHeader from '../../components/RestaurantHeader'
import { getSheetData, getRestaurantData } from '../../lib/api'
import revalidate from '../../lib/revalidate'

export default function Nord({ restaurant }) {
  return (
    <>
      <RestaurantHeader {...restaurant} />
    </>
  )
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
