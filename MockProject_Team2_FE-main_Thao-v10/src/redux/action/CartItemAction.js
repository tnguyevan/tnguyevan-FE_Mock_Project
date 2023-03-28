import { getCartItemAPI } from "../../API/CartItemAPI";

import { GET_CART_NUMBER } from "../Constants/ActionType";
export let actionFetchListCartItemAPI = () => {
    return (dispath) => {
        return getCartItemAPI().then((response) => {
            dispath(actionFetchListCartItemRedux(response.data.content));
        })
    }
};
export let actionFetchListCartItemRedux = (listCartItemAPI) => {
    return {
        type: GET_CART_NUMBER,
        payload: listCartItemAPI
    };
};