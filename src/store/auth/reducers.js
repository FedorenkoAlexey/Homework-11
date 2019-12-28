import {
  AUTH_LOGIN_TEXT,
  AUTH_PASSWORD_TEXT,
  SET_LOGIN_TRUE,
  SET_LOGIN_FALSE,
  ACTIVE_SPINNER,
  SPINNER_OFF
} from './actions'

const defState = {
  authLogin: 'Geekhub',
  authPassword: 's9',
  login: '',
  password: '',
  isAuth: false,
  isLoading: false
}

export const authReducer = (state = defState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_TEXT:
      return {
        ...state,
        login: action.payload
      }
    case AUTH_PASSWORD_TEXT:
      return {
        ...state,
        password: action.payload
      }
    case SET_LOGIN_TRUE:
      return {
        ...state,
        isAuth: action.payload
      }
    case SET_LOGIN_FALSE:
      return {
        ...state,
        isAuth: action.payload
      }
    case ACTIVE_SPINNER:
      return {
        ...state,
        isLoading: action.payload
      }
    case SPINNER_OFF:
      return {
        ...state,
        isLoading: action.payload
      }
  }
  return state
}
