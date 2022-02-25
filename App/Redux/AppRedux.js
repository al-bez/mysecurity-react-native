import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import CONFIG from 'react-native-config'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setOrientation: ['orientation'],
  setStatusBarTheme: ['theme'],
  setLoading: ['loading'],
  setToken: ['token'],
  getToken: []
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loading: false,
  orientation: 'portrait',
  statusBarTheme: 'dark-content',
  token: CONFIG.TOKEN
})

/* ------------- Selectors ------------- */

export const AppSelectors = {
  getOrientation: state => state.app.orientation,
  getToken: state => state.app.token
}

/* ------------- Reducers ------------- */

// set orientation of app
export const setLoading = (state, { loading }) => state.merge({ loading })

export const setOrientation = (state, { orientation }) =>
  state.merge({ orientation })

export const setStatusBarTheme = (state, { theme }) => {
  const statusBarTheme = theme === 'light' ? 'light-content' : 'dark-content'
  return state.merge({ statusBarTheme })
}

export const setToken = (state, { token }) => state.merge({ token })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
  [Types.SET_ORIENTATION]: setOrientation,
  [Types.SET_STATUS_BAR_THEME]: setStatusBarTheme,
  [Types.SET_TOKEN]: setToken
})
