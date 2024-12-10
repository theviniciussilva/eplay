import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding-top: 340px;
  z-index: 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`
export const Precos = styled.p`
  margin-top: 24px;
  font-size: 24px;
  span {
    text-decoration: line-through;
  }
`
