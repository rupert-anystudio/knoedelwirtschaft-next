import { useAppContext } from '../AppContext'
import { useSelect } from 'downshift'
import { PlaceSelectNew } from './PlaceSelect'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'

export const PlaceSelectContainer = () => {
  const {
    slugs = [],
    restaurants = [],
  } = useAppContext()

  const currentSlug = slugs[0]

  const { push } = useRouter()

  const items = useMemo(
    () => restaurants
      .reduce((acc, r) => {
        const item = {
          value: r.slug,
          title: r.city_area,
        }
        if (r.slug === currentSlug) {
          acc.unshift(item)
          return acc
        }
        acc.push(item)
        return acc
      }, []),
    [restaurants]
  )

  const initialSelectedItem = items.find(i => i.value === currentSlug)

  const itemToString = useCallback(i => i?.title || i?.value || '', [])

  const onSelectedItemChange = useCallback(
    ({ selectedItem }) => {
      if (selectedItem?.value === currentSlug) return
      const href = `/${[selectedItem?.value, ...slugs.slice(1)].filter(Boolean).join('/')}`
      push(href)
    },
    [push, currentSlug]
  )

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    hightlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    itemToString,
    initialSelectedItem,
    id: 'placeSelect',
    onSelectedItemChange,
  })

  return (
    <PlaceSelectNew
      isOpen={isOpen}
      selectedItem={selectedItem}
      getToggleButtonProps={getToggleButtonProps}
      getLabelProps={getLabelProps}
      getMenuProps={getMenuProps}
      hightlightedIndex={hightlightedIndex}
      getItemProps={getItemProps}
      items={items}
    />
  )
}