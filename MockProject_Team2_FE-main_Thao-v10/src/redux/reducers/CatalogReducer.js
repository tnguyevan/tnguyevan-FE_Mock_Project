import { FETCH_LIST_CATALOG } from '../Constants/ActionType';
let initialState = {

   catalogList:[]
}
let CatalogReducer = (state=initialState, action) => {
    switch (action.type) {
     
        case FETCH_LIST_CATALOG:
            console.log("listCatalog", action.listCatalogAPI);
            return {
                ...state,
                catalogList:action.payload
           }
            
        
        default:
            return state;
    }
};
export { CatalogReducer };