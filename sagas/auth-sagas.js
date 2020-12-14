/**
 * @author Vinc Tuyen
 * TodoSagas
 */

import { put, call } from "redux-saga/effects";

import { login } from "../api/auth";
import AuthAction from "../redux/auth-redux";

const AuthSagas = {
  *login({ data }) {
    console.log("data", data);
    let response = yield call(login(data));
    let responseData = yield response.json();
    if (response.status == 200) {
      responseData.login = true;
      yield put(AuthAction.authSuccess(responseData));
    } else {
      yield put(AuthAction.authFailure(responseData, response.status));
    }
  },
};

export default AuthSagas;
