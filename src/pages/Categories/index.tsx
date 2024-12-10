import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportsGamesQuery()

  if (actionGames && fightGames && simulationGames && rpgGames && sportGames) {
    return (
      <>
        <ProductsList
          id="action"
          games={actionGames}
          title="Ação"
          background="black"
        />
        <ProductsList
          id="sports"
          games={sportGames}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          id="fight"
          games={fightGames}
          title="Luta"
          background="black"
        />
        <ProductsList id="rpg" games={rpgGames} title="RPG" background="gray" />
        <ProductsList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando..</h4>
}

export default Categories
