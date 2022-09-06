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
  border: 1px solid currentColor;
  padding: 0;
  font-size: 2.8rem;
  line-height: 1;
  display: block;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border-radius: 0.8em;
  background: none;
  overflow: hidden;
  li {
    padding: 0.25em 0.9em 0.15em 0.9em;
    white-space: pre;
    text-align: center;
    cursor: pointer;
    .sued & {
      background-color: var(--color-sued);
    }
    .nord & {
      background-color: white;
    }
    &:not(:first-child) {
      border-top: 1px solid currentColor;
    }
  }
`

export const PlaceSelectNew = ({
  isOpen,
  selectedItem,
  getToggleButtonProps,
  // getLabelProps,
  // hightlightedIndex,
  getMenuProps,
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
            <li
              key={`${item.value}${index}`}
              {...getItemProps({item, index})}
              as='li'
            >
              {item.title}
            </li>
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