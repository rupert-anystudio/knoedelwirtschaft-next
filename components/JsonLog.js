import styled from 'styled-components'

const Wrap = styled.div`
  font-size: 12px;
  line-height: 1.2;
  font-family: monospace;
  background: var(--txt);
  color: var(--bg);
  display: block;
  padding: 2rem;
  border-radius: 5px;
`

const JsonLog = ({ data, label }) => {
  if (!data) return null
  return (
    <Wrap>
      {label && <span>{label}</span>}
      <code>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </code>
    </Wrap>
  )
}

export default JsonLog