import Api from "./api";
const url = "/oderLists";

const getAll = () => {
  return Api.get(`${url}/username`);
};

const getAllByStatus = (status) => {
  const parameters = {
    status: status,
  };
  return Api.get(`${url}/username/status`, {
    params: parameters,
  });
};

// export
const OrderListApi = {
  getAll,
  getAllByStatus,
};
export default OrderListApi;
