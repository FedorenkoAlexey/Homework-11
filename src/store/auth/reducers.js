import { AUTH_LOGIN_TEXT, AUTH_PASSWORD_TEXT } from "./actions";

const defState = {
  login: "",
  password: ""
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
  }
  return state;
};

// export default authReducer;
