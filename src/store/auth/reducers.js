import {
  AUTH_LOGIN_TEXT,
  AUTH_PASSWORD_TEXT,
  SET_LOGIN_TRUE,
  SET_LOGIN_FALSE
} from "./actions";

const defState = {
  authLogin: "Alex",
  authPassword: "123",
  login: "",
  password: "",
  isAuth: false
};

export const authReducer = (state = defState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_TEXT:
      return {
        ...state,
        login: action.payload
      };
    case AUTH_PASSWORD_TEXT:
      return {
        ...state,
        password: action.payload
      };
    case SET_LOGIN_TRUE:
      return {
        ...state,
        isAuth: action.payload
      };
    case SET_LOGIN_FALSE:
      return {
        ...state,
        isAuth: action.payload
      };
  }
  return state;
};

// export const loginReducer = (satte = defState, action) => {
//   switch (action.type) {
//     case SET_LOGIN_TRUE:
//       return {
//         ...satte,
//         isAuth: action.payload
//       };
//   }
// };

// export default authReducer;
