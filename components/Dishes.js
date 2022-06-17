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
  grid-template-columns: 4rem 6fr 4rem;
  align-items: end;
  grid-gap: 1rem;
  h3, p {
    text-align: center;
    grid-column: 2 / 3;
  }
  ${props => !props.isSmall && css`
    h3 {
      font-family: var(--fraktur);
      font-size: var(--fs-title);
      line-height: 1;
    }
  `}
  > strong {
    font-weight: normal;
    text-align: right;
  }
`

const Dishes = ({ entries = [], isSmall }) => {
  return (
    <Wrap>
      {entries.map(({   id, name, info, price }) => {
        return (
          <Dish key={id} isSmall={isSmall}>
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