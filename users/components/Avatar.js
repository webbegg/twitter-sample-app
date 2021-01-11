import styled from 'styled-components'

export const Avatar = ({ user, size = 40 }) => (
  <Container size={size}>
    {user && <Photo src={user.image} alt={user.name} />}
  </Container>
)

const Container = styled.div`
  border-radius: ${({ size }) => size / 2}px;
  height: ${({ size }) => size}px;
  overflow: hidden;
  width: ${({ size }) => size}px;
`

const Photo = styled.img`
  object-fit: cover;
  width: 100%;
`
