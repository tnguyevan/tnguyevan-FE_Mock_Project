import { GET_LIST_PRODUCT, GET_TOTAL,  UPDATE_QUANTITY } from "../Constants/ActionType";

let initialState = {
    listProduct: [],
    total: 0,
    totalQuantity: 0,
    totalAPI: 0,
    
  };
let CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_PRODUCT:
            console.log(action.payload);
            const listProduct = action.payload;
            const sum = listProduct.content.reduce((a, c) => 
         a + (c.productSalePrice ? c.productSalePrice * c.quantity : c.productPrice * c.quantity)
      , 0 )
            const sumQuantity = listProduct.content.reduce((a,c)=> a + c.quantity,0)
            console.log(sumQuantity);
            return{
                ...state,
                listProduct: action.payload,
                total: sum,
                totalQuantity: sumQuantity 

            }
        
        case UPDATE_QUANTITY:
            let listUpdateQuantity = [...state.listProduct.content];
            console.log(listUpdateQuantity);
            
            let product = listUpdateQuantity.find((product) =>
                product.productId === action.payload.productId
            );
            console.log(product);
            console.log(action.payload);
            product.quantity = action.payload.quantity;
            console.log(product);
            console.log(state.listProduct.content);
            const s = listUpdateQuantity.reduce((a, c) => 
         a + (c.productSalePrice ? c.productSalePrice * c.quantity : c.productPrice * c.quantity)
      , 0 );
            const sQ = listUpdateQuantity.reduce((a,c)=> a + parseInt(c.quantity,10 ), 0);
            console.log(listUpdateQuantity)
            console.log(s)
            console.log(sQ);
            return {
                ...state,
                listProduct: {
                    ...state.listProduct,
                    content: [...listUpdateQuantity]
                },
                total: s,
                totalQuantity: sQ
                
            }
        case GET_TOTAL:
            console.log(action.payload);
            return{
                ...state,
                totalAPI: action.payload
            }
        default:
            return { ...state };
    }
}
export default CartReducer;