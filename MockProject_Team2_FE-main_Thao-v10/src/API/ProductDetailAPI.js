import { api } from './api';

const getProductByIDAPI = (id) => {
    return api("GET", "products/"+id, null);
}

export { getProductByIDAPI };