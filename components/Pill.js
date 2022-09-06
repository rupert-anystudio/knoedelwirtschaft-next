import styled from 'styled-components'

const Wrap = styled.span`
  font-size: 2.8rem;
  line-height: 1;
  text-align: center;
  white-space: pre-wrap;
  border: 1px solid currentColor;
  padding: 0.25em 0.9em 0.15em 0.9em;
  border-radius: 0.8em;
  display: inline-block;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
}) => {
  return (
    <Wrap>
      {elemBefore}
      <span>
        {children}
      </span>
      {elemAfter}
    </Wrap>
  )
}

export default Pill