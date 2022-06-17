import { getSheetData } from '../../lib/api'
import revalidate from '../../lib/revalidate'
import PageRestaurantImprint from '../../components/PageRestaurantImprint'

export default function ImprintNord() {
  return (
    <PageRestaurantImprint />
  )
}

export async function getStaticProps({ preview = false }) {
  const data = await getSheetData([
    'restaurants',
    'globals',
  ])
  return {
    revalidate,
    props: {
      restaurantSlug: 'nord',
      preview,
      data,
    },
  }
}
