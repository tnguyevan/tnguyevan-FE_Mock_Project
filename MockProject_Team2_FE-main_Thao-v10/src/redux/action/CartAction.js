import { createNewCart, deleteAllProductAPI, deleteProductAPI, getlistCartAPI, getTotalAPI, updatePaymentProfileAPI, updateQuantityAPI } from "../../API/CartApi";
import { GET_LIST_PRODUCT, GET_TOTAL, UPDATE_ADDRESS_PHONE, UPDATE_QUANTITY } from "../Constants/ActionType";

export let actionCreateNewCartAPI = (cartNew) =>{
    return(dispath)=>{
        return createNewCart(cartNew).then((response)=>{
            //dispath action get cart API 
            console.log(response);
            dispath(actionListProductRedux(response));
        })
    }
}

export let actionGetListProductAPI = (userId) =>{
    return(dispath) => {
        return getlistCartAPI(userId).then((response) =>{
            // console.log('List Cart: ', response);
            dispath(actionListProductRedux(response));
        })
    }
}

export let actionListProductRedux = (listProductAPIParam) =>{
    return {type: GET_LIST_PRODUCT, payload: listProductAPIParam};
}

export let actionDeleteProductAPI =  (idProductDelete) =>{
    return(dispatch) =>{
        return deleteProductAPI(idProductDelete).then((response)=>{
            dispatch(actionGetListProductAPI("1"));//userId là 1
        })
    }
}


export let actionDeleteAllProduct = (userId_delete) =>{
    return (dispatch)=>{
        return deleteAllProductAPI(userId_delete).then((response)=>{
            dispatch(actionGetListProductAPI("1"));
        })
    }
}


export let actionUpdateQuantityAPI = (productId, userId,quantityNew)=>{
    return (dispatch) =>{
        return updateQuantityAPI(productId, userId,quantityNew).then((response)=>{
            dispatch(actionUpdateQuantityRedux(productId,quantityNew));
        })
    }

}

//update quantity
export let actionUpdateQuantityRedux = (productId,quantity) =>{
    return {type: UPDATE_QUANTITY, payload: {
        productId, quantity
    }};
}

//get sum
export let actionGetTotalAPI = (userId)=>{
    return(dispatch)=>{
        return getTotalAPI(userId).then((response) => {
            console.log(response);
            dispatch(actionGetTotalAPI(response));
        }
    )}
}

export let actionTotalRedux = (totalAPIParam) =>{
    return {type: GET_TOTAL, payload: totalAPIParam};
}

//update profile
export let actionUpdateAddressPhoneAPI = (address, phoneNumber) =>{
    return(dispatch) => {
        return updatePaymentProfileAPI(address, phoneNumber).then((response) =>{
            dispatch(actionUpdateAddressPhoneRedux(address, phoneNumber));
        })
    }
}
export let actionUpdateAddressPhoneRedux = (address, phoneNumber) =>{
    return {type: UPDATE_ADDRESS_PHONE, payload: {
        address, phoneNumber
    }};
}