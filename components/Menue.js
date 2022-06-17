import styled from 'styled-components'
import media from '../lib/media'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  > div {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: calc(var(--gutter) * 3);
    position: relative;
    width: 100%;
    margin: 0 auto;
    /* max-width: var(--maxw-app); */
    ${media.large} {
      grid-template-columns: 1fr 1fr;
    }
  }
`

export const Menue = ({ children }) => {
  return (
    <Wrap>
      <div>
        {children}
      </div>
    </Wrap>
  )
}

export const MenueCol = styled.div`
  position: relative;
  > div {
    position: relative;
    > div:first-child {
      position: relative;
      position: sticky;
      top: var(--h-header);
      z-index: 1;
      padding: var(--gutter) 0 1rem 0;
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 2px solid currentColor;
      background: var(--bg);
    }
    > div:last-child {
      position: relative;
      margin: 4rem 0;
    }
  }
`

export const MenueSection = ({ title, children }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <span>€</span>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Menue