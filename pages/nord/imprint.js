import { getSheetData } from '../../lib/api'
import revalidate from '../../lib/revalidate'

export default function ImprintNord() {
  return null
}

export async function getStaticProps({ preview = false }) {
  const data = await getSheetData(['restaurants', 'globals'])
  return {
    props: {
      data,
      restaurantSlug: 'nord',
      preview,
    },
    revalidate
  }
}
