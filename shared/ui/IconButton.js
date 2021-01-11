import styled from 'styled-components'

export const IconButton = styled.button`
  align-items: center;
  background-color: #e2e8f0;
  border: none;
  border-radius: 0.72rem;
  color: #718096;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  padding: 1rem;
  transition: 0.1s ease-in-out;
  margin-right: 1rem;
  position: relative;
  z-index: 1;

  &:active {
    transform: scale(0.92);
  }

  &:hover {
    color: #2d3748;
  }
`
