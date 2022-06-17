import { createGlobalStyle } from 'styled-components'
import media from '../lib/media'
import { useAppContext } from './AppContext'

const Styles = createGlobalStyle`
  :root {
    --txt: ${props => props.txt};
    --bg: ${props => props.bg};
    --btn-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
    --fraktur: 'Grobe Deutschmeister';
    --sans: 'Suisse Intl';
    --fs-root: 1.3rem;
    --lh-root: 1.4;
    --fs-title: 3.4em;
    --lh-title: 1;
    --fs-logo: 5.8rem;
    --lh-logo: 1;
    --fs-logo-name: 16rem;
    --lh-logo-name: 1;
    --h-header: 0px;
  }
  ${media.menuTwoCol} {
    :root {
      --h-header: 11rem;
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
    font-family: var(--sans);
    font-size: var(--fs-root);
    line-height: var(--lh-root);
  }
  #__next {
    width: 100%;
    max-width: 144rem;
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