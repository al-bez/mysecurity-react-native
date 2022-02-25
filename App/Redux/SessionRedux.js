import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setUser: ['user', 'loggedIn'],
  setUserProp: ['prop', 'value'],
  setLoggedIn: ['loggedIn'],
  setLoginCredentials: ['credentials'],
  setLoginConfirmation: ['confirmation'],
  updateUser: ['user'],
  login: ['mobile'],
  confirmLogin: ['confirmation']
})

export const SessionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loggedIn: false,
  user: {},
  credentials: { failed: false },
  confirmation: { failed: false }
})

/* ------------- Selectors ------------- */

export const SessionSelectors = {
  getUser: state => state.user,
  isLoggedIn: state => state.loggedIn
}

/* ------------- Reducers ------------- */

// set orientation of app
export const setUser = (state, { user }) => state.merge({ user })

export const setUserProp = (state, { prop, value }) => {
  const user = { ...state.user }
  user[prop] = value
  return state.merge({ user })
}

export const updateUser = (state, { user }) => {
  return state.merge({ user: { ...state.user, ...user } })
}

export const setLoginCredentials = (state, { credentials }) => {
  return state.merge({ credentials })
}

export const setLoginConfirmation = (state, { confirmation }) => {
  const mergedState = { confirmation }
  return state.merge(mergedState)
}

export const setLoggedIn = (state, { loggedIn }) => {
  const user = loggedIn ? state.user : {}
  return state.merge({ user, loggedIn })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
  [Types.SET_USER_PROP]: setUserProp,
  [Types.SET_LOGGED_IN]: setLoggedIn,
  [Types.SET_LOGIN_CREDENTIALS]: setLoginCredentials,
  [Types.SET_LOGIN_CONFIRMATION]: setLoginConfirmation,
  [Types.UPDATE_USER]: updateUser
})
