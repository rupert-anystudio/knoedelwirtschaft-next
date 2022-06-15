import RestaurantHeader from '../../components/RestaurantHeader'
import { getRestaurantData, getSheetData } from '../../lib/api'
import revalidate from '../../lib/revalidate'

export default function Sued({ restaurant }) {
  return (
    <>
      <RestaurantHeader {...restaurant} />
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
