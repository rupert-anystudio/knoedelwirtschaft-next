import styled, { css } from 'styled-components'

const Wrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`

const Dish = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 4rem;
  align-items: end;
  grid-gap: 1rem;
  h3, p {
    grid-column: 1 / 2;
  }
  ${props => !props.isSmall && css`
    h3 {
      font-family: var(--ff-title);
      font-size: var(--fs-title);
      line-height: var(--lh-title);
      grid-column: 1 / 3;
    }
  `}
  ${props => !props.noBorder && css`
    padding-bottom: 1rem;
    &:not(:last-child) {
      border-bottom: 1px solid currentColor;
    }
    &:not(:first-child) {
      padding-top: .5rem;
    }
  `}
  > strong {
    font-weight: normal;
    text-align: right;
  }
`

const Dishes = ({ entries = [], isSmall, noBorder }) => {
  return (
    <Wrap>
      {entries.map(({ id, name, info, price }) => {
        return (
          <Dish key={id} isSmall={isSmall} noBorder={noBorder}>
            <h3>{name}</h3>
            {info && <p>{info}</p>}
            {price && (
              <strong>{price}</strong>
            )}
          </Dish>
        )
      })}
    </Wrap>
  )
}

export default Dishes