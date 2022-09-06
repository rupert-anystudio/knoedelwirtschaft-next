import Link from 'next/link'
import styled from 'styled-components'
import Pill from '../Pill'
import { ArrowDown } from './ArrowDown'

const Wrap = styled.div`
  position: relative;
`

const PillList = styled.ul`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  background: none;
  /* li {
    white-space: pre;
    &:not(:first-child) {
      border-top: 1px solid currentColor;
    }
  } */
`

const PillEntry = styled(Pill).attrs({ as: 'li' })`
`

export const PlaceSelectNew = ({
  isOpen,
  selectedItem,
  getToggleButtonProps,
  getLabelProps,
  getMenuProps,
  hightlightedIndex,
  getItemProps,
  items,
}) => {
  return (
    <Wrap>
      {/* <label {...getLabelProps()}>Restaurant</label> */}
      <Pill
        aria-label='toggle menu'
        type='button'
        as='button'
        {...getToggleButtonProps()}
        // elemAfter={isOpen
        //   ? <span>&#8593;</span>
        //   : <span>&#8595;</span>
        // }
      >
        {selectedItem?.title ?? 'Select'}
      </Pill>
      {isOpen && (
        <PillList {...getMenuProps()}>
          {items.map((item, index) => (
            <Pill
              key={`${item.value}${index}`}
              {...getItemProps({item, index})}
              as='li'
            >
              {item.title}
            </Pill>
          ))}
        </PillList>
      )}
    </Wrap>
  )
}

export const PlaceSelect = ({ href, label }) => {
  return (
    <Link href={href} passHref>
      <a>
        <Pill elemAfter={<ArrowDown />}>{label}</Pill>
      </a>
    </Link>
  )
}