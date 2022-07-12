import React from 'react'
import styled from 'styled-components'
import { min } from '../lib/bp'
import { useAppContext } from './AppContext'

const Wrap = styled.div`
  position: relative;
  max-width: 39rem;
  margin: 0;
  padding: 4rem 0;
  strong, p {
    font-weight: normal;
  }
  ${min.tabletPortrait} {
    text-align: center;
    margin: 0 auto;
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
