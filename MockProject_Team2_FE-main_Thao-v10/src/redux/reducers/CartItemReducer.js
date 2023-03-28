import { GET_CART_NUMBER } from "../Constants/ActionType";

let initialState = {

   CartItem:[]
}
let CartItemReducer = (state=initialState, action) => {
    switch (action.type) {
     
        case GET_CART_NUMBER:
            console.log("CartItem", action);
            return {
                ...state,
                CartItem:action.payload
           }
            
        
        default:
            return state;
    }
};
export { CartItemReducer };