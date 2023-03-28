import { TOASTR_HIDE, TOASTR_SHOW } from "../action/actionTypes";
const initialValue = {
  isShow: false,
  title: "",
  message: "",
};
const toastrReducer = (state = initialValue, action) => {
  switch (action && action.type) {
    case TOASTR_SHOW:
      return {
        ...state,
        isShow: true,
        title: action.payload.title,
        message: action.payload.message,
      };
    case TOASTR_HIDE:
      return {
        ...state,
        isShow: false,
      };
    default: {
      return state;
    }
  }
};
export default toastrReducer;
