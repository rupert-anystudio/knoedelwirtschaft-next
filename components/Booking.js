import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useAppContext } from './AppContext'
import DumplingButton from './DumplingButton'
import Pill from './Pill'

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Frame = styled.div`
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  text-transform: uppercase;
  padding: 0.25em 0.9em 0.15em 0.9em;
  border-radius: 0.8em;
  font-family: var(--ff-root);
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
  .nord & {
    background: white;
    color: var(--color-nord);
  }
  .sued & {
    background: black;
    color: var(--color-sued);
  }
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

const Booking = () => {
  const { locale } = useRouter()
  const {
    globals = {}
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

  if (frame) {
    return (
      <Frame>
        <Close onClick={handleCloseClick} as="button">{close}</Close>
        <Iframe src="https://app.resmio.com/knodelwirtschaft/widget?source=localhost&resourceGroup=&backgroundColor=%23fff&color=&linkBackgroundColor=&commentsDisabled=&newsletterSubscribe=&name=&email=&phone=&comment=&nextAvailability=&fontSize=" />
        <Disclaimer>{bookingDisclaimer}</Disclaimer>
      </Frame>
    )
  }

  return (
    <Buttons>
      <DumplingButton
        href={`https://wolt.com/${locale}/deu/berlin/restaurant/kndelwirtschaft`}
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