import { getSheetData } from '../lib/api'
import revalidate from '../lib/revalidate'
import RestaurantSelect from '../components/RestaurantSelect'

export default function Index({
  restaurants
}) {
  return (
    <>
      <RestaurantSelect restaurants={restaurants} />
    </>
  )
}

export async function getStaticProps({ preview = false, locale, defaultLocale }) {
  const data = await getSheetData(['restaurants'])
  const { restaurants = [] } = data
  return {
    props: {
      restaurants,
      preview,
    },
    revalidate
  }
}
