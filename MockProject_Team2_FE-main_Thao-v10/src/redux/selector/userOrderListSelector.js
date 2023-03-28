import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const userOrderListSelector = (state) => state.userOrderList;

const selectUserOrderListSelector = createSelector(
  userOrderListSelector,
  (state) => state.userOrderLists
);

/** function */
export const selectUserOrderList = (state) => {
  return selectUserOrderListSelector(state);
};
