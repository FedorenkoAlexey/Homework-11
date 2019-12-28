export const AUTH_LOGIN_TEXT = 'AUTH_LOGIN_TEXT'
export const AUTH_PASSWORD_TEXT = 'AUTH_PASSWORD_TEXT'
export const SET_LOGIN_TRUE = 'SET_LOGIN_TRUE'
export const SET_LOGIN_FALSE = 'SET_LOGIN_FALSE'
export const ACTIVE_SPINNER = 'ACTIVE_SPINNER'
export const SPINNER_OFF = 'SPINNER_OFF'

export const setLoginText = login => ({
  type: AUTH_LOGIN_TEXT,
  payload: login
})

export const setPasswordText = password => ({
  type: AUTH_PASSWORD_TEXT,
  payload: password
})

export const setLogin = () => ({
  type: SET_LOGIN_TRUE,
  payload: true
})

export const setLogOut = () => ({
  type: SET_LOGIN_FALSE,
  payload: false
})

export const activateSpinner = () => ({
  type: ACTIVE_SPINNER,
  payload: true
})

export const spinnerOff = () => ({
  type: SPINNER_OFF,
  payload: false
})
