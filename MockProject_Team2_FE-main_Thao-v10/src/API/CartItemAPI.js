import { apiPost } from "./api";

const getCartItemAPI = () => {
  return apiPost("GET", "carts/username", null);
};

export { getCartItemAPI };
