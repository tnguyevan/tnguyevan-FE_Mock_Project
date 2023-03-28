import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Constants/ActionType";


let initialState = {
    showForm: true,
  };
let FormReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_INPUT_FORM:
        return {
          ...state,
          showForm: true,
        };
      case CLOSE_INPUT_FORM:
        return {
          ...state,
          showForm: false,
        };
      
      default:
        return { ...state };
    }
  };
  export default FormReducer;
  