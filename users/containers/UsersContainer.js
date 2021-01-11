import { useContext, useState } from 'react'

import { TwitterContext } from 'store'
import { addFollower } from 'store/actions'

import { ErrorInfo } from 'shared/styled/ErrorInfo'
import { Panel, PanelContent } from 'shared/styled/Panel'
import { UsersList } from 'users/components/UsersList'
import InputField from 'shared/ui/InputField'

export const UsersContainer = ({ users }) => {
  const [_, dispatch] = useContext(TwitterContext)
  const [filter, setFilter] = useState('')

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  )

  const filterChangeHandle = (value) => {
    setFilter(value)
  }

  const userSelectedHandler = (user) => {
    dispatch(addFollower(user))
  }

  return (
    <Panel id="users-list">
      <InputField
        value={filter}
        placeholder="Search users to follow ..."
        onChange={filterChangeHandle}
      />
      <PanelContent>
        {filteredUsers?.length ? (
          <UsersList
            users={filteredUsers}
            onUserSelected={userSelectedHandler}
          />
        ) : (
          <ErrorInfo>
            {filter !== '' ? (
              <>
                <div>No results found</div>
                <small>
                  <strong>ESC</strong> to clear filter
                </small>
              </>
            ) : (
              <div>Fowllowing all the users!</div>
            )}
          </ErrorInfo>
        )}
      </PanelContent>
    </Panel>
  )
}
