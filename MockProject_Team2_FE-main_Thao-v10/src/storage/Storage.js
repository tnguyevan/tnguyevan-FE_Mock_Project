// import Api from "../api/Api";
const setRememberMe = (isRememberMe) => {
  localStorage.setItem("isRememberMe", isRememberMe);
};

const isRememberMe = (isRememberMe) => {
  if (
    localStorage.getItem("isRememberMe") === null ||
    localStorage.getItem("isRememberMe") === undefined
  ) {
    return true;
  }
  return JSON.parse(localStorage.getItem("isRememberMe"));
};

const setItem = (key, value) => {
  if (isRememberMe()) {
    localStorage.setItem(key, value);
  } else {
    sessionStorage.setItem(key, value);
  }
};

const getItem = (key) => {
  if (isRememberMe()) {
    return localStorage.getItem(key);
  } else {
    return sessionStorage.getItem(key);
  }
};

const setToken = (token) => {
  setItem("token", token);
};
const getToken = () => {
  return getItem("token");
};

const setUserInfo = (
  id,
  username,
  email,
  firstName,
  lastName,
  role,
  status
) => {
  setItem("id", id);
  setItem("username", username);
  setItem("email", email);
  setItem("firstName", firstName);
  setItem("lastName", lastName);
  setItem("role", role);
  setItem("status", status);
};

const getUserInfo = () => {
  return {
    'id': getItem("id"),
    'username': getItem("username"),
    'email': getItem("email"),
    'firstName': getItem("firstName"),
    'lastName': getItem("lastName"),
    'role': getItem("role"),
    'status': getItem("status"),
    // 'username': getItem("username"),
    // 'email': getItem("email"),
    // 'firstName': getItem("firstName"),
    // 'lastName': getItem("lastName"),
    // 'role': getItem("role"),
    // 'status': getItem("status"),
  };
};

// export
const Storage = {
  setRememberMe,
  isRememberMe,
  setToken,
  getToken,
  setUserInfo,
  getUserInfo,
};
export default Storage;
