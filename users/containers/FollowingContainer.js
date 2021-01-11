import { TwitterContext } from 'store'
import { setCurrentUser } from 'store/actions'

import { ErrorInfo } from 'shared/styled/ErrorInfo'
import { Panel, PanelContent, PanelTitle } from 'shared/styled/Panel'
import { UsersList } from 'users/components/UsersList'
import { useContext } from 'react'

export const FollowingContainer = ({ followers }) => {
  const [_, dispatch] = useContext(TwitterContext)

  const userSelectedHandle = (user) => {
    dispatch(setCurrentUser(user))
  }

  return (
    <Panel>
      <PanelTitle>Following ({followers?.length})</PanelTitle>
      <PanelContent>
        {followers?.length ? (
          <UsersList users={followers} onUserSelected={userSelectedHandle} />
        ) : (
          <ErrorInfo>
            You still don't follow anyone. Follow users from users panel.
          </ErrorInfo>
        )}
      </PanelContent>
    </Panel>
  )
}
