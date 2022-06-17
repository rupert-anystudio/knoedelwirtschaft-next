import { getSheetData } from '../lib/api'
import revalidate from '../lib/revalidate'
import PageLanding from '../components/PageLanding'

export default function Landing() {
  return (
    <PageLanding />
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
      preview,
      data,
    },
  }
}
