import axios from "axios";
// import store from "../redux";
// import ErrorsTypes from "../redux/_errors-redux";
// import { ERROR, PAGES } from "../constRouter";
// eslint-disable-next-line no-unused-vars
function CallAPI(token) {
  const service = axios.create({
    baseURL: "http://localhost:7001",
    timeout: 60000,
  });
  // Request interceptors
  service.interceptors.request.use(
    (config) => {
      config.headers["X-Requested-With"] = " XMLHttpRequest";
      config.headers["Content-Type"] = "application/json";
      config.headers["Access-Control-Allow-Origin"] = "*";
      if (token && token != 1 && token != "") {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      // Do something with request error
      Promise.reject(error);
    }
  );

  // response pre-processing
  service.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      // check server not response
      // if (error.response && error.response.message) {
      //   store.dispatch(ErrorsTypes.failure(error.response.message));
      // }
      return error;
    }
  );
  return service;
}

export default CallAPI;
