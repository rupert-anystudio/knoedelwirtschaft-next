import { getSheetData } from '../lib/api'
import revalidate from '../lib/revalidate'
import RestaurantSelect from '../components/RestaurantSelect'

export default function Index({ data }) {
  return (
    <>
      <RestaurantSelect restaurants={data.restaurants} />
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const data = await getSheetData(['restaurants', 'globals'])
  return {
    props: {
      data,
      preview,
    },
    revalidate
  }
}
