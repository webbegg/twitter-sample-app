import { useContext } from 'react'
import styled from 'styled-components'

import { TwitterContext } from 'store'
import { Panel, PanelContent } from 'shared/styled/Panel'
import { Avatar } from 'users/components/Avatar'
import { formatToHuman } from 'utils/dates'

export const TweetsList = ({ tweets }) => {
  const [{ currentUser }] = useContext(TwitterContext)

  return (
    <Panel>
      <PanelContent>
        <Container>
          {tweets?.map(({ tweet, date }, i) => (
            <Tweet key={i}>
              <Avatar user={currentUser} size={50} />
              <TweetDetails>
                <TweetDate>
                  {currentUser.name} - {formatToHuman(date)}
                </TweetDate>
                <TweetContent>{tweet}</TweetContent>
              </TweetDetails>
            </Tweet>
          ))}
        </Container>
      </PanelContent>
    </Panel>
  )
}

const Container = styled.div`
  overflow: hidden;
`

const Tweet = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.82rem;
  padding: 1rem;
  margin-bottom: 1rem;
`

const TweetDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TweetContent = styled.div`
  color: #4a5568;
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0.24rem;
`

const TweetDate = styled.div`
  color: #718096;
  font-size: 0.74rem;
  text-transform: uppercase;
`
