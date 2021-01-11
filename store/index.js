import React, { useReducer, createContext } from 'react'
import { v4 as uuid } from 'uuid'

import profile from './data/profile'
import users from './data/users'

export const TwitterContext = createContext()

const initState = {
  error: '',
  currentUser: profile,
  profile,
  users,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
      }
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.user,
      }
    case 'ADD_TWEET': {
      const { profile } = state
      const tweets = [
        {
          id: uuid(),
          tweet: action.tweet,
          date: new Date(),
          user: state.profile,
        },
        ...profile.tweets,
      ]
      profile.tweets = tweets

      return {
        ...state,
        profile,
      }
    }
    case 'ADD_FOLLOWER': {
      const { profile } = state
      const actual = state.profile.follows.find((id) => id === action.user.id)
      const follows = [...profile.follows, action.user.id]
      profile.follows = follows

      return !actual
        ? { ...state, profile }
        : { ...state, error: 'You already follow this user' }
    }
    case 'DEL_FOLLOWER': {
      const { profile } = state
      const follows = state.profile.follows.filter(
        (id) => id !== action.user.id
      )
      profile.follows = follows

      return { ...state, profile, currentUser: profile }
    }
    default:
      throw new Error(`${action.type} not exists!`)
  }
}

export const TwitterContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <TwitterContext.Provider value={[state, dispatch]}>
      {props.children}
    </TwitterContext.Provider>
  )
}
