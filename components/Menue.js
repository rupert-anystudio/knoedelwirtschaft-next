import styled from 'styled-components'
import media from '../lib/media'

export const Menue = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 6rem;
  ${media.twoCols} {
    grid-template-columns: 1fr 1fr;
  } */
`

export const MenueCol = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 38rem; */
  /* position: sticky;
  top: 0; */
  > div {
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
      border-bottom: 1px solid currentColor;
      background: white;
      ${media.twoCols} {
        top: 0px;
      }
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