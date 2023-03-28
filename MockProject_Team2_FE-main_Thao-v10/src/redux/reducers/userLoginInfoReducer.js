import * as types from "../action/actionTypes";
import Storage from "../../storage/Storage";

const initialState = {
  userInfo: Storage.getUserInfo(),
  token: Storage.getToken(),
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.USER_LOGIN_INFO:
      return {
        ...state,
        userInfo: actions.payload,
      };
    case types.TOKEN_INFO:
      return {
        ...state,
        token: actions.payload,
      };
    default:
      return state;
  }
}
