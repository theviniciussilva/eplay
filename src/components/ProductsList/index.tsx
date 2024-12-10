import { Game } from '../../pages/Home'
import Product from '../Product'
import { Cointainer, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const ProductsList = ({ title, background, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }
    return tags
  }

  return (
    <Cointainer id={id} background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                system={game.details.system}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                title={game.name}
              />
            </li>
          ))}
        </List>
      </div>
    </Cointainer>
  )
}
export default ProductsList