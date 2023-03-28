import { api } from "./api";
// get listAccount API
const getCatalogListAPI = () => {
  return api("GET", "catalogs", null);
};

export { getCatalogListAPI };
