export const setError = (error) => {
  return {
    type: 'SET_ERROR',
    error,
  }
}

export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user,
  }
}

export const addTweet = (tweet) => {
  return {
    type: 'ADD_TWEET',
    tweet,
  }
}

export const addFollower = (user) => {
  return {
    type: 'ADD_FOLLOWER',
    user,
  }
}

export const delFollower = (user) => {
  return {
    type: 'DEL_FOLLOWER',
    user,
  }
}
