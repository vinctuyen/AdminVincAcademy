/**
 * @author NamNH
 * Saga index: connects action type and saga
 */

import { take, takeLatest, all, takeEvery } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AuthTypes } from "../redux/auth-redux";
import { TypesLogin } from "../redux/login-demo";
/* ------------- Sagas ------------- */
import ErrorsSagas from "./_errors-sagas";
import AuthSagas from "./auth-sagas";
import LoginSagas from "./login-demo-sagas";
/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    //authentication
    takeLatest(AuthTypes.LOGIN_REQUEST, AuthSagas.login),
    takeLatest(AuthTypes.AUTH_FAILURE, ErrorsSagas.raiseError),

    takeLatest(TypesLogin.LOGIN_REQUEST_DEMO, LoginSagas.loginDemo),
    takeLatest(TypesLogin.LOGIN_FAILURE_DEMO, ErrorsSagas.raiseError),
  ]);
}
