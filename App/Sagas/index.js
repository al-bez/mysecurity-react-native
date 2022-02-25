import { takeLatest, all } from 'redux-saga/effects'
// import API from '../Services/Api'
// import FixtureAPI from '../Services/FixtureApi'
// import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { SessionTypes } from '../Redux/SessionRedux'
import { AppTypes } from '../Redux/AppRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login, confirmLogin, getToken } from './SessionSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(SessionTypes.LOGIN, login),
    takeLatest(SessionTypes.CONFIRM_LOGIN, confirmLogin),
    takeLatest(AppTypes.GET_TOKEN, getToken),
  ])
}
