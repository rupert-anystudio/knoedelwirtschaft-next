import { forwardRef } from 'react'
import styled from 'styled-components'

const Wrap = styled.button`
  position: relative;
  text-decoration: none;
  font-size: inherit;
  line-height: inherit;
  background: var(--bg);
  color: var(--txt);
  padding: .2em .9em .1em .9em;
  border-radius: 1em;
  outline: none;
  appearance: none;
  border: 1px solid transparent;
  &[disabled] {
    cursor: default;
    box-shadow: var(--btn-shadow-dim);
    span {
      opacity: 0.4;
    }
  }
  &:not([disabled]) {
    cursor: pointer;
    box-shadow: var(--btn-shadow);
    &:hover {
      @media (hover: hover) {
        background: var(--txt);
        color: var(--bg);
      }
    }
  }
`

const Button = ({ children, ...rest }, ref) => {
  return (
    <Wrap ref={ref} {...rest}>
      <span>{children}</span>
    </Wrap>
  )
}

export default forwardRef(Button)