import Api from "./api";

const login = (username, password) => {
  const body = {
    username: username,
    password: password,
  };
  return Api.post(`/auth/signin`, body);
};

// export
const LoginApi = {
  login,
};
export default LoginApi;