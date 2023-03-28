import { getCatalogListAPI } from "../../API/CatalogAPI";
import { FETCH_LIST_CATALOG } from "../Constants/ActionType";
export let actionFetchListCatalogAPI = () => {
    return (dispath) => {
        return getCatalogListAPI().then((response) => {
            dispath(actionFetchListCatalogRedux(response.data.content));
        })
    }
};
export let actionFetchListCatalogRedux = (listCatalogAPI) => {
    return {
        type: FETCH_LIST_CATALOG,
        payload: listCatalogAPI
    };
};