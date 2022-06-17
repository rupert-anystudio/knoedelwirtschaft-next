import { createGlobalStyle } from 'styled-components'
import media from '../lib/media'

const GlobalStyles = createGlobalStyle`
  :root {
    --btn-shadow: 0px 0px 5px 1px rgba(0,0,0,0.6);
    --btn-shadow-dim: 0px 0px 5px 1px rgba(0,0,0,0.3);
    --ff-title: 'Grobe Deutschmeister';
    --ff-body: 'Suisse Intl';
    --offset: 0.1em;
    --fs-root: clamp(1.4rem,2.8vw,1.6rem);
    --fs-logo: clamp(2.6rem,8vw,5.8rem);
    --fs-title: clamp(2.6rem,8vw,5.8rem);
    --lh-root: 1.45;
    --gutter: 2rem;
    --h-header: 0px;
    --maxw-app: 86rem;
    ${media.leftRight} {
      --h-header: 16rem;
    }
    ${media.large} {
      --maxw-app: 144rem;
    }
  }
  .base {
    --ff-logo: 'Grobe Deutschmeister';
    --ff-name: 'Suisse Intl';
    --ff-title: 'Grobe Deutschmeister';
    --ff-body: 'Suisse Intl';
    --bg: white;
    --txt: black;
    --ff-logo-offset: 1;
    --ff-name-offset: 0;
    --ff-title-offset: 1;
    --ff-body-offset: 0;
    &.inverted {
      --bg: black;
      --txt: white;
    }
  }
  .sued {
    --ff-logo: 'Suisse Intl';
    --ff-name: 'Grobe Deutschmeister';
    --ff-title: 'Grobe Deutschmeister';
    --ff-body: 'Suisse Intl';
    --bg: #00FA00;
    --txt: black;
    --ff-title-offset: 1;
    --ff-name-offset: 1;
    --ff-body-offset: 0;
    --ff-logo-offset: 0;
    &.inverted {
      --bg: black;
      --txt: white;
    }
  }
  .nord {
    --ff-logo: 'Grobe Deutschmeister';
    --ff-name: 'Suisse Intl';
    --ff-title: 'Grobe Deutschmeister';
    --ff-body: 'Suisse Intl';
    --bg: white;
    --txt: #6140F5;
    --ff-logo-offset: 1;
    --ff-name-offset: 0;
    --ff-title-offset: 1;
    --ff-body-offset: 0;
    &.inverted {
      --txt: #6140F5;
      --bg: black;
    }
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
    font-family: var(--ff-body);
    font-size: var(--fs-root);
    line-height: var(--lh-root);
  }
  #__next {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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