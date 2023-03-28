import * as types from "../action/actionTypes";

const initialState = {
  userOrderDetail: [],
};

export default function reducer(state = initialState, actions) {
  switch (actions && actions.type) {
    case types.USER_ORDER_DETAIL:
      return {
        ...state,
        userOrderDetail: actions.payload,
      };
    default:
      return state;
  }
}
