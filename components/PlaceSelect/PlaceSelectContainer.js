import { useAppContext } from '../AppContext'
import { PlaceSelect } from './PlaceSelect'

export const PlaceSelectContainer = () => {
  const {
    restaurant = {},
    slugs,
    // restaurants,
  } = useAppContext()
  // console.log('Restaurants', restaurants)
  const nextSlug = slugs[0] === 'nord' ? 'sued' : 'nord'
  const href = `/${[nextSlug, ...slugs.slice(1)].filter(Boolean).join('/')}`
  const { city_area } = restaurant
  return (
    <PlaceSelect
      label={city_area}
      href={href}
    />
  )
}