import { createGlobalStyle } from 'styled-components'
import media from '../lib/media'

const GlobalStyles = createGlobalStyle`
  :root {
    // styles
    --btn-shadow: 0px 0px 5px 1px rgba(0,0,0,0.6);
    --btn-shadow-dim: 0px 0px 5px 1px rgba(0,0,0,0.3);
    // root
    --ff-root: 'Suisse Intl';
    --fs-root: 1.4rem;
    --lh-root: 1.45;
    // title
    --ff-title: 'Grobe Deutschmeister';
    --fs-title: 4.5rem;
    --lh-title: 4.5rem;
    // sizes
    --gutter: 2rem;
    --h-header: 8.2rem;
    // base colors
    --color-nord: #6140F5;
    --color-sued: #00FA00;
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
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    overflow: scroll;
    overflow-x: hidden;
    font-family: var(--ff-root);
    font-size: var(--fs-root);
    line-height: var(--lh-root);
    position: relative;
  }
  #__next {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin: 0 auto;
  }
  h1, h2, h3, h4, h5, p, ul, ol, li, a, div, span, strong {
    margin: 0;
    font-size: inherit;
    font-weight: normal;
    color: inherit;
    background: inherit;
  }
  ul, ol {
    list-style: none;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyles