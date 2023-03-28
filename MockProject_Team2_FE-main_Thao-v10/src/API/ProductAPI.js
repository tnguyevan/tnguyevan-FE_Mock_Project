import { api } from "./api";
// get listAccount API
const getProductListAPI = () => {
  return api("GET", "products", null);
};

let getAllByCatalogIdAPI = (catalogId) => {
  return api("GET", `products/allProduct/${catalogId}`, null);
};

export { getProductListAPI, getAllByCatalogIdAPI };
