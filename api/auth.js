import CallAPI from "./request.js";
import URL from "./constAPI";

const login = (params) => {
  let service = CallAPI(
    params.store,
    params.url,
    null,
    params.cookies,
    params.router
  );
  let data = params.data;
  let formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);

  return service({
    url: URL.AUTH.LOGIN,
    method: "POST",
    data: formData,
  });
};
const basicLogin = (params) => {
  let service = CallAPI(
    params.store,
    params.url,
    null,
    params.cookies,
    params.router
  );
  let data = params.data;
  return service({
    url: URL.AUTH.BASIC_LOGIN,
    method: "POST",
    data: data,
  });
};

const logout = (params) => {
  let service = CallAPI(
    params.store,
    params.url,
    params.token,
    params.cookies,
    params.router
  );

  return service({
    url: URL.AUTH.LOGOUT,
    method: "POST",
  });
};
const basicLogout = (params) => {
  let service = CallAPI(
    params.store,
    params.url,
    params.token,
    params.cookies,
    params.router
  );

  return service({
    url: URL.AUTH.BASIC_LOGOUT,
    method: "POST",
  });
};

const forgotPassword = (params) => {
  let service = CallAPI(
    params.store,
    params.url,
    null,
    params.cookies,
    params.router
  );
  let data = params.data;
  return service({
    url: URL.AUTH.FORGOT_PASSWORD,
    method: "POST",
    data: data,
  });
};

const forgotPasswordCommit = (params) => {
  let service = CallAPI(
    params.store,
    params.url,
    null,
    params.cookies,
    params.router
  );
  let data = params.data;
  return service({
    url: URL.AUTH.FORGOT_PASSWORD_COMMIT,
    method: "POST",
    params: data,
    data: data,
  });
};

const checkToken = (params) => {
  let service = CallAPI(
    params.store,
    params.url,
    params.token,
    params.cookies,
    params.router
  );
  let data = params.data;
  return service({
    url: URL.AUTH.CHECK_TOKEN,
    method: "POST",
    params: data,
    data: data,
  });
};

export {
  login,
  logout,
  forgotPassword,
  forgotPasswordCommit,
  checkToken,
  basicLogin,
  basicLogout,
};
