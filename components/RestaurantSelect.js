import Link from 'next/link'
import styled from 'styled-components'

const Wrap = styled.div`
  flex: 1 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
`

const Restaurant = styled.a`
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

const Name = styled.div`
  font-size: 8vw;
  color: inherit;
`

const RestaurantSelect = ({ restaurants }) => {
  return (
    <Wrap>
      {restaurants.map(({
        id,
        name,
        color_txt,
        color_bg,
        slug,
      }) => {
        const style = {
          color: color_txt,
          backgroundColor: color_bg
        }
        return (
          <Link href={`/${slug}`} passHref>
            <Restaurant
              key={id}
              style={style}
            >
              <Name>{name}</Name>
            </Restaurant>
          </Link>
        )
      })}
    </Wrap>
  )
}

export default RestaurantSelect