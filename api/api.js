/**
 * @author Nam NH
 * ApiClient to interact with api server
 */

import fetch from "isomorphic-unfetch";
import QueryString from "query-string";
import getConfig from "next/config";

export default class Api {
  constructor(defaultConfig, preRequest) {
    this.defaultConfig = defaultConfig;
    this.preRequest = preRequest;
  }

  request(url, cookies) {
    this.defaultConfig = this.preRequest(this.defaultConfig, cookies);
    const { serverRuntimeConfig } = getConfig();
    let prefix = serverRuntimeConfig.onServer
      ? process.env.BASE_URL + "/api"
      : "/api";
    return fetch(prefix + url, this.defaultConfig);
  }

  get(url, data = null, cookies) {
    this.defaultConfig.method = "GET";
    this.defaultConfig.body = undefined;
    if (data) {
      url += "?" + QueryString.stringify(data);
    }
    return this.request(url, cookies);
  }

  post(url, data) {
    this.defaultConfig.method = "POST";
    if (FormData && data instanceof FormData) {
      delete this.defaultConfig.headers["Content-Type"]      
    } else {
      data = JSON.stringify(data);
      this.defaultConfig.headers["Content-Type"] = "application/json";
    }
    this.defaultConfig.body = data;
    return this.request(url);
  }

  put(url, data) {
    this.defaultConfig.method = "PUT";
    if (FormData && data instanceof FormData) {
      delete this.defaultConfig.headers["Content-Type"]      
    } else {
      data = JSON.stringify(data);
      this.defaultConfig.headers["Content-Type"] = "application/json";
    }
    this.defaultConfig.body = data;
    return this.request(url);
  }

  patch(url, data) {
    this.defaultConfig.method = "PATCH";
    if (FormData && data instanceof FormData) {
      delete this.defaultConfig.headers["Content-Type"]      
    } else {
      data = JSON.stringify(data);
      this.defaultConfig.headers["Content-Type"] = "application/json";
    }
    this.defaultConfig.body = data;
    return this.request(url);
  }

  delete(url) {
    this.defaultConfig.method = "DELETE";
    return this.request(url);
  }
}
