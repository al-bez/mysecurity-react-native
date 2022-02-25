import i18n from 'react-native-i18n'

export const ID = 'id'
export const TOKEN = 'token'
export const ORGANIZATION_ID = 'organization_id'
export const VOC_KEY = 'voc_key'
export const MOBILE = 'mobile'
export const REQUEST_ID = 'request_id'
export const PIN_CODE = 'pin_code'
export const PATIENT_ID = 'patient_id'
export const ERRORS = {
  CLIENT_ERROR: i18n.t('messages.clientError'),
  SERVER_ERROR: i18n.t('messages.serverError'),
  TIMEOUT_ERROR: i18n.t('messages.timeoutError'),
  CONNECTION_ERROR: i18n.t('messages.connectionError'),
  NETWORK_ERROR: i18n.t('messages.networkError'),
  CANCEL_ERROR: i18n.t('messages.cancelError'),
  UNKNOWN_ERROR: i18n.t('messages.unknownError')
}
