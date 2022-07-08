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

const CategoryName = styled.h3`
  position: relative;
  font-family: var(--ff-title);
  font-size: var(--fs-title);
  line-height: var(--lh-title);
`

const Drink = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  padding-top: 1rem;
  &:not(:last-child) {
    border-bottom: 1px solid currentColor;
    padding-bottom: 1rem;
  }
  h4 {

  }
  ul li span {
    text-align: right;
    width: 5rem;
    display: inline-block;
  }
`

const Drinks = ({ entries = [] }) => {
  return (
    <Wrap>
      {entries.map(({ id, name, unit, drinks = [] }) => {
        return (
          <Category key={id}>
            <CategoryName>
              {name}
            </CategoryName>
            <ul>
              {drinks.map(drink => {
                return (
                  <Drink key={drink.id} {...drink}>
                    <h4>{drink.name}</h4>
                    <ul>
                      {drink.prices.map(({ amount, price }) => {
                        return (
                          <li key={`${amount}-${price}`}>
                            {unit && amount && <span>{`${unit === 'cl' ? (amount * 100) : amount} ${unit}`}</span>}
                            <span>{price}</span>
                          </li>
                        )
                      })}
                    </ul>
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