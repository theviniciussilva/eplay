import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`

export const Item = styled.li`
  position: relative;

  > img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`
export const Modal = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  header {
    display: flex;
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }
  header {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  iframe {
    width: 100%;
    height: 480px;
    border: none;
  }
`
