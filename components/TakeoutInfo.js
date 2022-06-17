import React from 'react'
import styled from 'styled-components'
import { useAppContext } from './AppContext'

const Wrap = styled.div`
  padding: var(--gutter);
  text-align: center;
  max-width: 42rem;
  margin: 0 auto calc(var(--gutter) * 2) auto;
  strong, p {
    font-weight: normal;
  }
`

const TakeoutInfo = () => {
  const { globals = {} } = useAppContext()
  const { takeoutTitle, takeoutInfo } = globals
  return (
    <Wrap>
      <strong>{takeoutTitle}:</strong>
      <p>{takeoutInfo}</p>
    </Wrap>
  )
}

export default TakeoutInfo
