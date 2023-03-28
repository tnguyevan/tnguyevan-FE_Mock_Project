import { apiPost } from "./api";
// get listAccount API
const addNewCartItem = (cartItem) => {
  return apiPost("POST", "carts/create", cartItem);
};

export { addNewCartItem };
