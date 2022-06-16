import { createGlobalStyle } from 'styled-components'

import fontSizes from '../lib/fontSizes'
import fontStyles from '../lib/fontStyles'

const GlobalStyles = createGlobalStyle`
  :root {
    --txt: ${props => props.txt};
    --bg: ${props => props.bg};
    --btn-shadow: 0px 0px 8px 0 rgba(0,0,0,0.2);
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
    -webkit-font-smoothing: antialiased;
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
    background: var(--bg);
    color: var(--txt);
  }
`

export default GlobalStyles