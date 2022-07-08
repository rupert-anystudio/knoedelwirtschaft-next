/* eslint-disable react/display-name */
import Link from 'next/link'
import { forwardRef } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  pointer-events: none;
  svg {
    width: 28rem;
    height: 28rem;
    circle {
      stroke: none;
      pointer-events: auto;
      cursor: pointer;
      .nord & {
        fill: var(--color-nord);
      }
      .sued & {
        fill: var(--color-sued);
      }
    }
    text {
      fill: white;
      font-size: 0.6rem;
      font-family: 'Suisse Intl', sans-serif;
      letter-spacing: 0.04rem;
      &.center {
        font-size: 3rem;
        text-transform: lowercase;
        font-family: 'Grobe Deutschmeister';
      }
      .nord & {
        fill: white;
      }
      .sued & {
        fill: black;
      }
    }
  }
`

const Dumpling = forwardRef(({
  top = 'top',
  center = 'center',
  bottom = 'bottom',
  ...rest
}, ref) => {
  return (
    <Wrap {...rest} ref={ref}>
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
          <textPath xlinkHref="#text-top" startOffset="50%" textAnchor="middle">{top}</textPath> 
          <textPath xlinkHref="#text-bottom" startOffset="50%" textAnchor="middle">{bottom}</textPath> 
        </text>
        <text
          className="center"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          dy="0.15em"
        >
          {center}
        </text>
      </svg>
    </Wrap>
  )
})

const DumplingButton = forwardRef(({
  href,
  ...rest
}, ref) => {
  if (href) {
    return (
      <Link
        href={href}
        passHref
      >
        <Dumpling
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          ref={ref}
          {...rest}
        />
      </Link>
    )
  }
  return (
    <Dumpling
      ref={ref}
      {...rest}
    />
  )
})

export default DumplingButton