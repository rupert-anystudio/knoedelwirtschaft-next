import { getSheetData } from '../../lib/api'
import revalidate from '../../lib/revalidate'
import PageImprint from '../../components/PageImprint'

export default function ImprintNord() {
  return (
    <PageImprint />
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
