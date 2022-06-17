import styled from 'styled-components'
import media from '../lib/media'

export const Menue = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 10rem;
  padding: 0 2rem;
  margin: 8rem 0;
  ${media.menuTwoCol} {
    grid-template-columns: 1fr 1fr;
  }
`

export const MenueCol = styled.div`
  position: relative;
  > section {
    position: relative;
    > div:first-child {
      position: relative;
      position: sticky;
      top: var(--h-header);
      z-index: 1;
      padding: 1rem 0;
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid currentColor;
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