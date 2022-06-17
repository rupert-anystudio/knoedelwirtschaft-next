import { createGlobalStyle } from 'styled-components'
import media from '../lib/media'
import { useAppContext } from './AppContext'

const Styles = createGlobalStyle`
  :root {
    --txt: ${props => props.txt};
    --bg: ${props => props.bg};
    --btn-shadow: 0px 0px 5px 1px rgba(0,0,0,0.6);
    --btn-shadow-dim: 0px 0px 5px 1px rgba(0,0,0,0.3);
    --ff-title: 'Grobe Deutschmeister';
    --ff-sans: 'Suisse Intl';
    --fs-root: 1.55rem;
    --fs-title: 3.4rem;
    --fs-logo: 4.6rem;
    --fs-logo-name: 12rem;
    --fs-logo-area: 3.4rem;
    --lh-root: 1.4;
    --lh-title: 1;
    --h-header: 0px;
    --maxw-app: 68rem;
  }
  ${media.menuTwoCol} {
    :root {
      --fs-logo: 5.8rem;
      --fs-logo-name: 16.5rem;
      --fs-title: 4.8rem;
      --h-header: 12rem;
      --maxw-app: 144rem;
    }
  }
  ${media.verySmall} {
    :root {
      --fs-root: 1.3rem;
      --fs-logo: 3.8rem;
      --fs-logo-name: 10rem;
      --fs-logo-area: 2.8rem;
      --fs-title: 2.8rem;
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
    background: var(--bg);
    color: var(--txt);
    font-family: var(--ff-sans);
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
  h1, h2, h3, h4, h5, p, ul, ol {
    margin: 0;
    font-size: inherit;
    font-weight: normal;
  }
  ul, ol {
    list-style: none;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

const GlobalStyles = () => {
  const { theme } = useAppContext()
  return (
    <Styles {...theme} />
  )
}

export default GlobalStyles