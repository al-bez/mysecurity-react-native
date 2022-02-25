import CONFIG from 'react-native-config'
// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import { ORGANIZATION_ID, VOC_KEY, TOKEN, ERRORS } from './ApiConstants'
import { AUTH, PATIENTS } from './ApiURIs'

// API reusable objects
const org = {}
org[ORGANIZATION_ID] = CONFIG.ORGANIZATION_ID
const voc = {}
voc[VOC_KEY] = CONFIG.VOC_KEY
const token = {}
token[TOKEN] = CONFIG.TOKEN
const mandatory = { ...token, ...org }

const createFormData = data => {
  const formData = new FormData()
  Object.keys(data).forEach(key => formData.append(key, data[key]))
  return formData
}

// our "constructor"
const create = (baseURL = CONFIG.API_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 25e3
  })

  // add monitor for errors
  api.addMonitor(response => {
    console.log('API RESPONSE', response)
  })
  // add transformer
  api.addResponseTransform(response => {
    try {
      if (!response.ok || !response.data.success) {
        const { problem } = response
        if (!response.data) response.data = {}
        if (!response.data.data) response.data.data = {}
        response.data.error =
          response.data.message ||
          response.data.data.message ||
          ERRORS[problem] ||
          ERRORS.UNKNOWN_ERROR
      }
    } catch (e) {
      response.data.error = ERRORS.UNKNOWN_ERROR
    }
    console.log('TRANSFORMED response', response)
    return response
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const apis = {}

  // logins
  const { GENERATE_TOKEN, LOGIN, LOGIN_CONFIRMATION } = AUTH
  apis.generateToken = () => api.get(GENERATE_TOKEN, { ...org, ...voc })
  apis.login = params =>
    api.post(LOGIN, createFormData({ ...mandatory, ...params }))
  apis.loginConfirmation = params =>
    api.post(LOGIN_CONFIRMATION, createFormData({ ...mandatory, ...params }))


  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  // a list of the API functions from step 2
  return apis
}

// let's return back our create method as the default.
export default {
  create
}
