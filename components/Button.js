import { forwardRef } from 'react'
import styled, { css } from 'styled-components'

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
  border: 2px solid transparent;
  font-family: inherit;
  line-height: inherit;
  cursor: pointer;
  &[disabled] {
    cursor: default;
  }
    &:hover {
      @media (hover: hover) {
        background: var(--txt);
        color: var(--bg);
      }
    }
  ${props => props.isActive && css`
    cursor: default;
    box-shadow: none;
    border-color: var(--txt);
    span {
      opacity: 0.8;
    }
  `}
  ${props => !props.isActive && css`
    cursor: pointer;
    /* box-shadow: var(--btn-shadow); */
  `}
`

const Button = ({ children, ...rest }, ref) => {
  return (
    <Wrap ref={ref} {...rest}>
      <span>{children}</span>
    </Wrap>
  )
}

export default forwardRef(Button)