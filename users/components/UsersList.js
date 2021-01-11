import { User } from './User'

export const UsersList = ({ users, onUserSelected }) => (
  <>
    {users.map((user) => (
      <User key={user.id} user={user} onClick={onUserSelected} />
    ))}
  </>
)
