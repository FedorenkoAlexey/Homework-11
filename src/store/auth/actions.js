export const AUTH_LOGIN_TEXT = "AUTH_LOGIN_TEXT";
export const AUTH_PASSWORD_TEXT = "AUTH_PASSWORD_TEXT";

export const setLoginText = login => ({
  type: AUTH_LOGIN_TEXT,
  payload: login
});

export const setPasswordText = password => ({
  type: AUTH_PASSWORD_TEXT,
  payload: password
});
