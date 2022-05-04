import { createGlobalStyle } from 'styled-components'

import fontSizes from '../lib/fontSizes'
import fontStyles from '../lib/fontStyles'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #76FA7B;
    --text-color: #000000;
    --fallback-color: #b7b7b7;
    --bg-color: #ffffff;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }
  body {
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    ${fontStyles.root}
    ${fontSizes.root}
    text-rendering: optimizeLegibility;
    overflow: scroll;
    overflow-x: hidden;
  }
  #__next {
    width: 100%;
    max-width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  html, body, #__next {
    background: var(--bg-color);
    color: var(--text-color);
  }
`

export default GlobalStyles