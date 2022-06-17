import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import media from '../lib/media'
import { useAppContext } from './AppContext'
import Button from './Button'

const CircleButtonWrap = styled.button`
  display: inline-block;
  appearance: none;
  padding: 0;
  border: none;
  background: none;
  pointer-events: none;
  &:not(:last-child) {
    margin-right: var(--gutter);
    margin-bottom: var(--gutter);
  }
  svg {
    width: clamp(20rem, 80vw, 38rem);
    height: clamp(20rem, 80vw, 38rem);
    circle {
      fill: var(--txt);
      stroke: var(--txt);
      pointer-events: auto;
      cursor: pointer;
      pointer-events: auto;
    }
    text {
      fill: var(--bg);
      font-size: 0.6rem;
      font-family: var(--ff-body);
      letter-spacing: 0.04rem;
      pointer-events: none;
      &.center {
        font-size: 3rem;
        text-transform: lowercase;
        font-family: var(--ff-title);
        line-height: 1;
        transform: translate3d(0, calc(var(--ff-title-offset) * var(--offset) + .2em), 0);
      }
    }
  }
`

const WindowWrap = styled.div`
  position: relative;
  align-self: stretch;
  background: var(--txt);
  color: var(--bg);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: calc(var(--gutter) * 2) var(--gutter);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 9999px;
    transform: translateX(-50%);
  }
  p {
    position: relative;
    margin: 0 auto;
  }
  ${media.leftRight} {
    grid-column-start: 1;
    grid-column-end: -1;
    text-align: center;
    p {
      max-width: 38rem;
    }
  }
`

const Iframe = styled.iframe`
  position: relative;
  width: clamp(28rem, 100%, 144rem);
  height: 500px;
  margin: 3rem auto;
  appearance: none;
  border-radius: 8px;
  border: none;
  background-color: var(--bg);
`

const ButtonsWrap = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  text-align: center;
  margin: -1.5rem 0;
`

const windows = {
  booking: 'booking',
  order: 'order',
}

const Booking = ({ i18n }) => {
  const { locale } = useRouter()
  const { globals = {} } = useAppContext()
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

  const [window, setWindow] = useState(null)

  const handleCloseClick = () => {
    setWindow(null)
  }

  const handleBookingClick = () => {
    setWindow(windows.booking)
  }

  if (window === null) {
    return (
      <ButtonsWrap>
        <CircleButton
          as="a"
          href={`https://khora.berlin/${locale}/restaurant/125-knoedelwirtschaft`}
          target="_blank"
          topText={orderButtonTop}
          centerText={orderButtonCenter}
          bottomText={orderButtonBottom}
        />
        <CircleButton
          onClick={handleBookingClick}
          topText={bookButtonTop}
          centerText={bookButtonCenter}
          bottomText={bookButtonBottom}
        />
      </ButtonsWrap>
    )
  }

  return (
    <WindowWrap>
      <Button onClick={handleCloseClick}>{close}</Button>
      {window === windows.booking && (
        <>
          <Iframe src="https://app.resmio.com/knodelwirtschaft/widget?source=localhost&resourceGroup=&backgroundColor=%23fff&color=&linkBackgroundColor=&commentsDisabled=&newsletterSubscribe=&name=&email=&phone=&comment=&nextAvailability=&fontSize=" />
          <p>{bookingDisclaimer}</p>
        </>
      )}
    </WindowWrap>
  )
}

const CircleButton = ({
  as,
  href,
  target,
  onClick = () => {},
  centerText,
  topText,
  bottomText,
  style
}) => (
  <CircleButtonWrap
    as={as}
    href={href}
    target={target}
    onClick={onClick}
    style={style}
  >
    <svg viewBox="0 0 100 100">
      <defs>
        <path id="text-path" d="M5,50a45,45 0 1,0 90,0a45,45 0 1,0 -90,0" />
        <path
          id="text-bottom"
          d="
            M 8,50
            A 42,42
            0
            0
            0
            92,50
          "
        />
        <path
          id="text-top"
          d="
            M 8,50
            A 42,42
            0
            1
            1
            92,50
          "
        />
      </defs>
      <circle cx="50" cy="50" r="49" />
      <text dominantBaseline="middle">
        <textPath xlinkHref="#text-top" startOffset="50%" textAnchor="middle">{topText}</textPath> 
        <textPath xlinkHref="#text-bottom" startOffset="50%" textAnchor="middle">{bottomText}</textPath> 
      </text>
      <text className="center" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{centerText}</text>
    </svg>
  </CircleButtonWrap>
)

export default Booking
