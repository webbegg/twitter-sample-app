import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { TwitterContext } from 'store'
import { setError, setCurrentUser, delFollower } from 'store/actions'

import { InfoModal } from 'shared/ui/InfoModal'
import { PanelContent } from 'shared/styled/Panel'
import { TweetsList } from 'tweets/components/TweetsList'
import { AddTweet } from 'tweets/components/AddTweet'
import { FollowingContainer } from 'users/containers/FollowingContainer'
import { UsersContainer } from 'users/containers/UsersContainer'
import { UserProfile } from 'users/components/UserProfile'
import { IconButton } from 'shared/ui/IconButton'
import { UnfollowIcon } from 'shared/icons/UnfollowIcon'
import { ProfileIcon } from 'shared/icons/ProfileIcon'

const TweetsContainer = () => {
  const [{ currentUser, profile, users, error }, dispatch] = useContext(
    TwitterContext
  )
  const [follows, setFollows] = useState([])
  const [availableUsers, setAvailableUsers] = useState([])

  useEffect(() => {
    setFollows(
      users
        .filter(({ id }) => profile.follows.includes(id))
        .sort((a, b) => a.name.localeCompare(b.name))
    )

    setAvailableUsers(
      users
        .filter(({ id }) => profile.id !== id && !profile.follows.includes(id))
        .sort((a, b) => a.name.localeCompare(b.name))
    )
  }, [profile.follows])

  const keyDownHandle = ({ key }) => {
    if (error !== '' && key === 'Escape') {
      dispatch(setError(''))
    }
  }

  const showUserProfile = () => {
    dispatch(setCurrentUser(profile))
  }

  const unfollowUserHandle = () => {
    if (!confirm('Are you sure to unfollow the user?')) return
    dispatch(delFollower(currentUser))
  }

  const tweets = currentUser.tweets || []
  const isUserProfileSelected = currentUser.id === profile.id

  return (
    <Container onKeyDown={keyDownHandle} tabIndex="0">
      <LeftPanel>
        <UserProfile user={profile}>
          <IconButton onClick={showUserProfile}>
            <ProfileIcon />
          </IconButton>
        </UserProfile>
        <FollowingContainer followers={follows} />
        <UsersContainer users={availableUsers} />
      </LeftPanel>
      <RightPanel>
        <UserProfile user={currentUser}>
          {!isUserProfileSelected && (
            <IconButton onClick={unfollowUserHandle}>
              <UnfollowIcon />
            </IconButton>
          )}
        </UserProfile>
        <TweetsList tweets={tweets} />
        {isUserProfileSelected && <AddTweet />}
      </RightPanel>
      {error !== '' && <InfoModal />}
    </Container>
  )
}

export default TweetsContainer

const Container = styled.div`
  outline: none;
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: minmax(0, 100vh);
`

const LeftPanel = styled.div`
  border-right: 1px solid #e2e8f0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) minmax(0, 1fr);
`

const RightPanel = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;

  ${PanelContent} {
    background-color: #edf2f7;
    padding: 1rem;
  }
`
