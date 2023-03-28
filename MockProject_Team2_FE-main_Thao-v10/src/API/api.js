import axios from "axios";
import Storage from "../storage/Storage";
let token = localStorage.getItem("token");

const axiosClient1 = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
      "Content-Type": "application/json",
      // 'Accept': 'application/json',
    // "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0bmFtbGEiLCJpYXQiOjE2NzMwOTM5MjAsImV4cCI6MTY3MzE4MDMyMH0.fLpDtWHjBvY0lcJOiHURtsqP_OT5cyER17-tn6JOaieWObISwBAbx7GOTdYOh7pH1OPW0-0rcaezKhomDs3jpw"
  },
});
const axiosClient2 = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
      "Content-Type": "application/json",
      // 'Accept': 'application/json',
    "Authorization": "Bearer "+token
  },
});
export const api = (method, endpoint, payload) => {
  return axiosClient1(endpoint, { method: method, data: payload })
    .then((response) => {
     
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const apiPost = (method, endpoint, payload) => {
  return axiosClient2(endpoint, { method: method, data: payload })
    .then((response) => {
     
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
const axiosClient = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
  // timeout: 5000, // default is `0` (no timeout)
  // responseType: "json",
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  // if token exists then attach token
  const token = Storage.getToken();
  if (token !== null && token !== undefined) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data !== undefined) {
      // only get data
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    if (error.response) {
      throw error.response;
    } else if (error.request) {
      throw error.request;
    } else {
      throw error;
    }
  }
);

export default axiosClient;