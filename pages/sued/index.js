import { getSheetData } from '../../lib/api'
import revalidate from '../../lib/revalidate'

export default function Sued() {
  return null
}

export async function getStaticProps({ preview = false }) {
  const data = await getSheetData(['restaurants', 'globals', 'additives', 'labels', 'categories_food', 'categories_drinks'])
  return {
    props: {
      data,
      restaurantSlug: 'sued',
      preview,
    },
    revalidate
  }
}
