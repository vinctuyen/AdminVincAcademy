/**
 * @author Vinc Tuyen
 * TodoSagas
 */

import { put, call } from "redux-saga/effects";

import { login } from "../api/auth";
import AuthAction from "../redux/auth-redux";

const AuthSagas = {
  *login({ data }) {
    let response = yield call(() => {
      return login(data);
    }, data);
    if (response.data) {
      yield put(AuthAction.authSuccess(response.data));
    } else {
      yield put(
        AuthAction.authFailure({
          message: response.message,
          status: response.status,
        })
      );
    }
  },
};

export default AuthSagas;
