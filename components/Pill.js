import { forwardRef } from 'react'
import styled from 'styled-components'

const Wrap = styled.span`
  font-size: 2.8rem;
  line-height: 1;
  text-align: center;
  white-space: pre-wrap;
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
  border: 1px solid currentColor;
  background-color: inherit;
  outline: none;
  padding: 0.25em 0.9em 0.15em 0.9em;
  border-radius: 0.8em;
  display: inline-block;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.onClick ? 'pointer' : 'auto'};
  > * {
    &:not(:last-child) {
      margin-right: .4em;
    }
  }
`

const Pill = ({
  children,
  elemAfter = null,
  elemBefore = null,
  ...rest
}, ref) => {
  return (
    <Wrap {...rest} ref={ref}>
      {elemBefore}
      <span>
        {children}
      </span>
      {elemAfter}
    </Wrap>
  )
}

export default forwardRef(Pill)