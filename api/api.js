import axios from "axios";
// import { ERROR, PAGES } from "../constRouter";
// eslint-disable-next-line no-unused-vars
function CallAPI(token) {
  const service = axios.create({
    baseURL: "http://localhost:3001",
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
      // if (error.response && error.response.data) {
      //   let data = error.response.data;
      //   let messageGroup = [];
      //   let mockupError = error.response.data;
      //   if (typeof data.message == "object") {
      //     for (let item in data.message) {
      //       messageGroup.push(data.message[item][0]);
      //     }
      //   } else {
      //     messageGroup.push(data.message);
      //   }
      //   mockupError.message = messageGroup;
      //   store.commit("error/SET_ERROR", mockupError);
      // }
      return Promise.reject(error);
    }
  );
  return service;
}

export default CallAPI;
