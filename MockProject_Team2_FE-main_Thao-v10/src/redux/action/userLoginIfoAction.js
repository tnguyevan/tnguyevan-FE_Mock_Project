import * as types from "../action/actionTypes";

export function setUserLoginInfo(
  id,
  username,
  email,
  firstName,
  lastName,
  role,
  status
) {
  return {
    type: types.USER_LOGIN_INFO,
    payload: {
      id: id,
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      role: role,
      status: status,
    },
  };
}

export function setTokenLoginInfo(token) {
  return {
    type: types.TOKEN_INFO,
    payload: token,
  };
}
