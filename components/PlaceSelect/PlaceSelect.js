import Link from 'next/link'
import Pill from '../Pill'

const ArrowDown = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 6L10 14L18 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
  </svg>
)

export const PlaceSelect = ({ href, label }) => {
  return (
    <Link href={href} passHref>
      <a>
        <Pill elemAfter={<ArrowDown />}>{label}</Pill>
      </a>
    </Link>
  )
}