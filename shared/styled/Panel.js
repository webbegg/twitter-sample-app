import styled from 'styled-components'

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const PanelTitle = styled.h2`
  color: #cbd5e0;
  display: ${({ children }) => (!children ? 'hidden' : 'flex')};
  font-size: 1.2rem;
  margin: 0;
  padding: 0.42rem 1rem;
`

export const PanelContent = styled.div`
  display: ${({ children }) => (!children ? 'hidden' : 'block')};
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0.42rem 1rem;
`
