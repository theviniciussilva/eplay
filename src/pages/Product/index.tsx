import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import zelda from '../../assets/images/zelda.png'
import Gallery from '../../components/Gallery'
import resident from '../../assets/images/resident.png'
import { useEffect, useState } from 'react'
import { Game } from '../Home'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b>
          {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b>
          {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        items={game.media.gallery}
        defaultCover={game.media.cover}
      />
    </>
  )
}

export default Product
