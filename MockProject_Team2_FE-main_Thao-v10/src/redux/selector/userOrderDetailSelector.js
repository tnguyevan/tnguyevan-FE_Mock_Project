import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const userOrderDetailSelector = (state) => state.userOrderDetail;

const selectUserOrderDetailSelector = createSelector(
  userOrderDetailSelector,
  (state) => state.userOrderDetail
);

/** function */
export const selectUserOrderDetail = (state) => {
  return selectUserOrderDetailSelector(state);
};
