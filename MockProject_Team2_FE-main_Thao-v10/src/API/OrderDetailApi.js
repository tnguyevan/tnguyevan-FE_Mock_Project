import Api from "./api";
const url = "/oderDetails";

const getOderDetailByOderId = (oderId) => {
  const parameters = {
    oderId: oderId,
  };
  return Api.get(`${url}`, {
    params: parameters,
  });
};

// export
const OrderDetailApi = {
  getOderDetailByOderId,
};
export default OrderDetailApi;
