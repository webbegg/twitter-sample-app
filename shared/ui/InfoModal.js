import { useContext } from 'react'
import styled from 'styled-components'

import { TwitterContext } from 'store'
import { setError } from 'store/actions'

import { Panel, PanelContent } from 'shared/styled/Panel'
import { CloseIcon } from 'shared/icons/CloseIcon'

export const InfoModal = () => {
  const [{ error }, dispatch] = useContext(TwitterContext)

  const closeHandle = () => {
    dispatch(setError(''))
  }

  return (
    <Container onClick={closeHandle}>
      <Panel onClick={(e) => e.stopPropagation()}>
        <PanelContent>
          <ErrorMessage>{error}</ErrorMessage>
          <CloseButton onClick={closeHandle}>
            <CloseIcon />
          </CloseButton>
        </PanelContent>
      </Panel>
    </Container>
  )
}
const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.32);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;

  ${Panel} {
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 1rem 0.8rem;
    min-width: 300px;
  }
`

const CloseButton = styled.a`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 42px;
  justify-content: center;
  position: absolute;
  right: -8px;
  top: -8px;
  transition: 0.1s ease-in-out;
  width: 42px;

  &:active {
    transform: scale(0.96);
  }
`

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
`
