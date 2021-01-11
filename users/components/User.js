import styled from 'styled-components'
import { slug } from 'utils/strings'

import { Avatar } from './Avatar'

export const User = ({ user, onClick }) => {
  if (!user) return null

  const onClickHandle = () => {
    if (onClick) onClick(user)
  }

  return (
    <Container onClick={onClickHandle}>
      <Avatar user={user} />
      <UserDetails>
        <UserName>{user.name}</UserName>
        <UserId>@{slug(user.name)}</UserId>
      </UserDetails>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  transition: 0.1s ease-in-out;
  user-select: none;

  &:active {
    transform: scale(0.96);
  }
  &:hover {
    background-color: #f2f2f2;
  }
`

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.62rem;
`
const UserName = styled.div``
const UserId = styled.div`
  color: #718096;
  font-size: 0.82rem;
`
