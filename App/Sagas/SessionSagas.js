import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import SessionRedux from '../Redux/SessionRedux'
import AppRedux from '../Redux/AppRedux'
import Services from '../Services'

const { API } = Services

export function * login ({ mobile }) {
  // set loading
  yield put(AppRedux.setLoading(true))
  yield put(SessionRedux.setLoginCredentials({}))
  // make the call to the api
  const apiCall = yield call(API.login, mobile)
  const response = path(['data'], apiCall)

  let credentials = { failed: true }

  // set success response or failure response
  if (apiCall.ok && response.success) credentials = path(['data'], response)
  else credentials.error = path(['error'], response)

  // update credentials
  yield put(SessionRedux.setLoginCredentials(credentials))
  // set loading
  yield put(AppRedux.setLoading(false))
}

export function * confirmLogin ({ confirmation }) {
  // set loading
  yield put(AppRedux.setLoading(true))
  yield put(SessionRedux.setLoginConfirmation({}))
  // make the call to the api
  const apiCall = yield call(API.loginConfirmation, confirmation)
  const response = path(['data'], apiCall)

  let confirmed = { failed: true }

  // set success response or failure
  if (apiCall.ok && response.success) confirmed = path(['data'], response)
  else confirmed.error = path(['error'], response)

  // update confirmation
  yield put(SessionRedux.setLoginConfirmation(confirmed))
  // set loading
  yield put(AppRedux.setLoading(false))
}

export function * getToken () {
  const apiCall = yield call(API.generateToken)
  const response = path(['data'], apiCall)
  // set success response or failure
  if (apiCall.ok && response.success) {
    const token = path(['data', 'token'], response)
    yield put(AppRedux.setToken(token))
  }
}
