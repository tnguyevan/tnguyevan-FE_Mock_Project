import * as types from "./actionTypes";

export function getUserOrderDetailAction(userOrderDetail) {
  return {
    type: types.USER_ORDER_DETAIL,
    payload: userOrderDetail,
  };
};