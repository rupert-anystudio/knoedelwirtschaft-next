import styled from 'styled-components'
import media from '../lib/media'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  margin: 8rem auto;
  padding: 0 2rem;
  > div {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 6rem;
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: var(--maxw-app);
    ${media.menuTwoCol} {
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
  > section {
    position: relative;
    > div:first-child {
      position: relative;
      position: sticky;
      top: var(--h-header);
      z-index: 1;
      padding: 2rem 0 1rem 0;
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

export const Section = ({ title, children }) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <span>€</span>
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}

export default Menue