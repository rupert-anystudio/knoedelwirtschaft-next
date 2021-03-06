import { getSheetData } from '../../lib/api'
import revalidate from '../../lib/revalidate'
import PageRestaurant from '../../components/PageRestaurant'

export default function Sued() {
  return (
    <PageRestaurant />
  )
}

export async function getStaticProps({ preview = false }) {
  const data = await getSheetData([
    'restaurants',
    'globals',
    'additives',
    'labels',
    'categories_food',
    'categories_drinks',
    'inventory_drinks',
    'inventory_food',
    'inventory_drinks',
    'prices_drinks',
    'menu_dumplings',
  ])
  return {
    revalidate,
    props: {
      restaurantSlug: 'sued',
      preview,
      data,
    },
  }
}
