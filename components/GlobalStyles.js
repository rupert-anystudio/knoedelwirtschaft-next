import { createGlobalStyle } from 'styled-components'
import { useAppContext } from './AppContext'

const Styles = createGlobalStyle`
  :root {
    --txt: ${props => props.txt};
    --bg: ${props => props.bg};
    --btn-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
    --fraktur: 'Grobe Deutschmeister';
    --sans: 'Suisse Intl';
    --fs-root: clamp(1.3rem, 1.15vw, 1.55rem);
    --fs-title: clamp(4.6rem, 8vw, 6.2rem);
    --fs-logo: clamp(4.6rem, 8vw, 6.2rem);
    --fs-name: 30rem;
    --h-header: 11rem;
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
    font-family: var(--sans);
    font-size: var(--fs-root);
    line-height: 1.3;
    flex-direction: column;
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
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
  }
  html, body, #__next {
    background: var(--bg);
    color: var(--txt);
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