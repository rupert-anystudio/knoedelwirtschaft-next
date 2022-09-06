import Link from 'next/link'
import Pill from '../Pill'

export const PlaceSelect = ({ href, label }) => {
  return (
    <Link href={href} passHref>
      <a>
        <Pill>{label}</Pill>
      </a>
    </Link>
  )
}