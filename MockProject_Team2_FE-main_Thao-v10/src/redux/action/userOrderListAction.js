import * as types from "../action/actionTypes";

export function getUserOrderListAction(userOrderLists) {
  return {
    type: types.USER_ORDER_LIST,
    payload: userOrderLists,
  };
};