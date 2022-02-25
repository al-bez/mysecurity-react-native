import { combineReducers } from 'redux'
import { createMigrate, persistReducer, persistStore } from 'redux-persist'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import ReduxPersist from '../Config/ReduxPersist'

/* -- PRELOAD REDUX FILES -- */
const AppRedux = require('./AppRedux')
const SessionRedux = require('./SessionRedux')
const NavigationRedux = require('./NavigationRedux')

/* ------------- MIGRATIONS ------------- */
const migrations = {
  0: state => {
    delete state.github
    state.session = Object.assign(SessionRedux.INITIAL_STATE, state.session)
    state.app = Object.assign(AppRedux.INITIAL_STATE, state.app)
    return state
  }
}

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  app: AppRedux.reducer,
  session: SessionRedux.reducer,
  nav: NavigationRedux.reducer,
})

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(
      {
        ...persistConfig,
        migrate: createMigrate(migrations, { debug: false })
      },
      reducers
    )
  }

  const { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)
  const persistor = persistStore(store)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }

  return { store, persistor }
}
