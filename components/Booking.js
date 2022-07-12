import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { maxWidths, minWidths } from '../lib/bp'
import { useAppContext } from './AppContext'
import DumplingButton from './DumplingButton'

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  flex-direction: column;
  > * {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }

  @media ${minWidths.tabletPortrait} and ${maxWidths.macbook13}, ${minWidths.macbook16} {
    flex-direction: row;
    > * {
      &:not(:last-child) {
        margin-bottom: 0;
        margin-right: 2rem;
      }
    }
  }
`

const Frame = styled.div`
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4rem;
  > * {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
  .nord & {
    background: var(--color-nord);
    color: white;
  }
  .sued & {
    background: var(--color-sued);
    color: black;
  }
`

const Close = styled.button`
  appearance: none;
  outline: none;
  margin: 0;
  border: none;
  background: none;
  /* text-transform: uppercase;
  padding: 0.25em 0.9em 0.15em 0.9em;
  border-radius: 0.8em; */

  font-family: var(--ff-root);
  font-size: var(--fs-root);
  line-height: var(--lh-root);
  cursor: pointer;
  &:hover, &:focus {
    text-decoration: underline;
  }
  color: inherit;
`

const Iframe = styled.iframe`
  position: relative;
  width: 100%;
  height: 60rem;
  appearance: none;
  padding: 0;
  border-radius: 1rem;
  border: none;
`

const Disclaimer = styled.p`
  max-width: 40rem;
  text-align: center;
  margin: 0 auto;
`

const resmioIds = {
  nord: 'knodelwirtschaft-nord',
  sued: 'knodelwirtschaft',
}

const woltIds = {
  nord: 'kndelwirtschaft-nord',
  sued: 'kndelwirtschaft',
}

const Booking = () => {
  const { locale } = useRouter()
  const {
    globals = {},
    restaurantSlug,
  } = useAppContext()
  const {
    orderButtonTop,
    orderButtonCenter,
    orderButtonBottom,
    bookButtonTop,
    bookButtonCenter,
    bookButtonBottom,
    close,
    bookingDisclaimer,
  } = globals
  const [frame, setFrame] = useState(null)

  const handleBookClick = useCallback(() => {
    setFrame('booking')
  }, [])

  const handleCloseClick = useCallback(() => {
    setFrame(null)
  }, [])

  const resmioId = resmioIds[restaurantSlug]

  if (frame && resmioId) {
    return (
      <Frame>
        <Close onClick={handleCloseClick} as="button">{close}</Close>
        <Iframe src={`https://app.resmio.com/${resmioId}/widget?source=localhost&resourceGroup=&backgroundColor=%23fff&color=&linkBackgroundColor=&commentsDisabled=&newsletterSubscribe=&name=&email=&phone=&comment=&nextAvailability=&fontSize=`} />
        <Disclaimer>{bookingDisclaimer}</Disclaimer>
      </Frame>
    )
  }

  const woltId = woltIds[restaurantSlug]

  return (
    <Buttons>
      <DumplingButton
        href={`https://wolt.com/${locale}/deu/berlin/restaurant/${woltId}`}
        top={orderButtonTop}
        center={orderButtonCenter}
        bottom={orderButtonBottom}
      />
      <DumplingButton
        onClick={handleBookClick}
        top={bookButtonTop}
        center={bookButtonCenter}
        bottom={bookButtonBottom}
      />
    </Buttons>
  )
}

export default Booking