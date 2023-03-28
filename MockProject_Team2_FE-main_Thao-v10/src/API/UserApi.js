import Api from "./api";

const url = "/users";

// const getAll = () => {
//   return Api.get(url);
// };

// const getByID = (id) => {
//   return Api.get(`${url}/${id}`);
// };

const existsByEmail = (email) => {
  return Api.get(`${url}/email/${email}`);
};

const existsByUsername = (username) => {
  return Api.get(`${url}/userName/${username}`);
};
const resendEmailToActiveAccount = (email) => {
  const parameters = {
    email: email,
  };
  return Api.get(`${url}/userRegistrationConfirmRequest`, {
    params: parameters,
  });
};

const requestResetPassword = (email) => {
  const parameters = {
    email: email,
  };
  return Api.get(`${url}/resetPasswordRequest`, {
    params: parameters,
  });
};

const resendEmailToResetPassword = (email) => {
  const parameters = {
    email: email,
  };
  return Api.get(`${url}/resetPasswordRequest`, {
    params: parameters,
  });
};

const resetPassword = (token, newPassword) => {
  const parameters = {
    token: token,
    newPassword: newPassword,
  };
  return Api.get(`${url}/resetPassword`, {
    params: parameters,
  });
};

const getProfile = () => {
  return Api.get(`${url}/profile`);
};

const updateAvatar = (avatarUrl) => {
  const body = {
    avatarUrl: avatarUrl,
  };
  return Api.put(`${url}/profile`, body);
};

const create = (firstname, lastname, username, email, password) => {
  const body = {
    firstName: firstname,
    lastName: lastname,
    username: username,
    email: email,
    password: password,
  };
  return Api.post(`auth/signup`, body);
};

const updateInfo = (firstName, lastName, phoneNumber, address) => {
  const body = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    address: address,
  };
  return Api.put(`${url}/fullProfile`, body);
};

// const updateByID = (id, body) => {
//   return Api.put(`${url}/${id}`, body);
// };

// const deleteByID = (id) => {
//   return Api.delete(`${url}/${id}`);
// };

// export
const UserApi = {
  //   getAll,
  //   getByID,
  existsByEmail,
  existsByUsername,
  create,
  resendEmailToActiveAccount,
  requestResetPassword,
  resendEmailToResetPassword,
  resetPassword,
  getProfile,
  updateAvatar,
  updateInfo,
  //   deleteByID,
};
export default UserApi;
