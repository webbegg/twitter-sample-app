import { useState, useContext } from 'react'
import styled from 'styled-components'

import { TwitterContext } from 'store'
import { setError, addTweet } from 'store/actions'

import InputField from 'shared/ui/InputField'
import { SendIcon } from 'shared/icons/SendIcon'
import { IconButton } from 'shared/ui/IconButton'

export const AddTweet = () => {
  const [_, dispatch] = useContext(TwitterContext)

  const [tweet, setTweet] = useState('')

  const tweetChangeHandle = (value) => {
    setTweet(value)
  }

  const sendTweet = () => {
    if (tweet.length < 2) {
      dispatch(setError('The tweet must be at least 3 characters'))
    } else {
      dispatch(addTweet(tweet))
      setTweet('')
    }
  }

  return (
    <Container id="add-tweet">
      <InputField
        value={tweet}
        placeholder="Whats happening?"
        onChange={tweetChangeHandle}
        onAction={sendTweet}
      />
      <IconButton onClick={sendTweet}>
        <SendIcon />
      </IconButton>
    </Container>
  )
}

const Container = styled.div`
  background-color: #e2e8f0;
  display: flex;
`
