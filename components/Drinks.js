import styled from 'styled-components'

const Wrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
`

const Category = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`

const CategoryName = styled.div`
  position: relative;
  h3 {
    font-family: var(--ff-title);
    font-size: var(--fs-title);
    line-height: 1;
    text-align: center;
  }
  span {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

const Drink = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  span {
    order: 1;
    text-align: left;
  }
  h4 {
    order: 2;
    text-align: center;
  }
  strong {
    order: 3;
    font-weight: normal;
    text-align: right;
  }
`

const Drinks = ({ entries = [] }) => {
  return (
    <Wrap>
      {entries.map(({ id, name, unit, drinks = [] }) => {
        return (
          <Category key={id}>
            <CategoryName>
              <h3>{name}</h3>
              {unit && <span>{unit}</span>}
            </CategoryName>
            <ul>
              {drinks.map(drink => {
                return (
                  <Drink key={drink.id} {...drink}>
                    <h4>{drink.name}</h4>
                    <span>{drink.prices.map(({ amount }) => unit === 'cl' ? (amount * 100) : amount).join(' / ')}</span>
                    <strong>{drink.prices.map(({ price }) => price).join(' / ')}</strong>
                  </Drink>
                )
              })}
            </ul>
          </Category>
        )
      })}
    </Wrap>
  )
}

export default Drinks