import * as types from "../action/actionTypes";

const initialState = {
  userOrderLists: [],
};

export default function reducer(state = initialState, actions) {
  switch (actions && actions.type) {
    case types.USER_ORDER_LIST:
      return {
        ...state,
        userOrderLists: actions.payload,
      };
    default:
      return state;
  }
}
