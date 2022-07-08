import Link from 'next/link'
import { useAppContext } from './AppContext'
import Pill from './Pill'

const PlaceSelect = () => {
  const {
    restaurant = {},
    restaurantSlug,
    slugs,
  } = useAppContext()
  const nextSlug = slugs[0] === 'nord' ? 'sued' : 'nord'
  const hrefRestaurantSwitch = `/${[nextSlug, ...slugs.slice(1)].filter(Boolean).join('/')}`
  const {
    name,
    city_area,
  } = restaurant
  return (
      <Link href={hrefRestaurantSwitch} passHref>
        <a>
          <Pill>{city_area}</Pill>
        </a>
      </Link>
  )
}

export default PlaceSelect