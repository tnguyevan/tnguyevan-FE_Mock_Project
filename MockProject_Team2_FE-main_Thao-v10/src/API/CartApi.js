import { api } from "./api";
import { apiPost } from "./api";
// tạo giỏ hàng mới khi click thêm vào giỏ hàng, tạo theo userId
let createNewCart = (cartNew) => {
  return api("POST", "carts/create", cartNew);
};
// lấy thông tin product theo orderId để lấy giá, tổng, số lượng
let getlistCartAPI = () => {
  return apiPost("GET", "carts/username", null);
};

// hiển thị thông tin trong form thông tin vận chuyển
let addNewInfoUserToOrderListAPI = (newInfoTemp) => {
  //   return api("POST", "carts/create", newInfoTemp);
  return api("POST", "carts/userId/", newInfoTemp);
};

// nút xóa sản phẩm
let deleteProductAPI = (productId) => {
  return apiPost(
    "DELETE",
    "carts/delete/productId?productId=" + productId,
    null
  );
};
// nút xóa tất cả sản phẩm
let deleteAllProductAPI = () => {
  return api("DELETE", "carts/username", null);
};
// update số lượng
let updateQuantityAPI = (productId, quantity) => {
  return api("PUT", `carts/update?productId=${productId}`, {
    quantity,
  });
};
//update address and phonenumber
let updatePaymentProfileAPI = (address, phoneNumber) => {
  return api("PUT", "users/paymentProfile", { address }, { phoneNumber });
};

let getTotalAPI = (userId) => {
  return api("GET", `carts/sum?userId=${userId}`, null);
};

export {
  getlistCartAPI,
  addNewInfoUserToOrderListAPI,
  deleteProductAPI,
  updateQuantityAPI,
  deleteAllProductAPI,
  createNewCart,
  updatePaymentProfileAPI,
  getTotalAPI,
};
