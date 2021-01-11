import styled from 'styled-components'

import { slug } from 'utils/strings'
import { Avatar } from './Avatar'

export const UserProfile = ({ children, user }) => {
  return (
    <Container>
      <Avatar user={user} />
      <UserDetails>
        <UserName>{user.name}</UserName>
        <UserInfo>@{slug(user.name)}</UserInfo>
      </UserDetails>

      <UserOptions>{children}</UserOptions>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  height: 80px;
  padding: 0.68rem 1rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 0.42rem;
  z-index: 1;
`

const UserDetails = styled.div``

const UserName = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`

const UserInfo = styled.div`
  color: #718096;
  font-size: 0.82rem;
  font-weight: 400;
`

const UserOptions = styled.div``
