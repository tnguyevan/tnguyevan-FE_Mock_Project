import { combineReducers } from "redux";
import toastrReducer from "./toastrReducer";
import userLoginInfoReducer from "./userLoginInfoReducer";
import userOrderListReducer from "./userOrderListReducer";
import userOrderDetailReducer from "./userOrderDetailReducer";
import CartReducer from "./CartReducer";
import FormReducer from "./FormReducer";
const rootReducer = combineReducers({
  toastr: toastrReducer,
  userLoginInfo: userLoginInfoReducer,
  userOrderList: userOrderListReducer,
  listProductRedux: CartReducer,
  showFormRedux: FormReducer,
  userOrderDetail: userOrderDetailReducer,
});
export default rootReducer;
