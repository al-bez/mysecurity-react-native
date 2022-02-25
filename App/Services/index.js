import CONFIG from 'react-native-config'
// import Api from './Api'
import Api from './Api'
import ApiURIs from './ApiURIs'
import ApiConstants from './ApiConstants'
import FixtureApi from './FixtureApi'

export default {
  API: Api.create(CONFIG.API_URL),
  ApiURIs,
  ApiConstants,
  FixtureApi
}
