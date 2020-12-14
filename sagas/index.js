/**
 * @author NamNH
 * Saga index: connects action type and saga
 */

import { take, takeLatest, all, takeEvery } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AuthsTypes } from "../redux/_auths-redux";
import { TypesLogin } from "../redux/login-demo";
import { TypesTable } from "../redux/table-demo";
/* ------------- Sagas ------------- */
import ErrorsSagas from "./_errors-sagas";
import AuthsSagas from "./_auths-sagas";
import LoginSagas from "./login-demo-sagas";
import TableDemoSagas from "./table-demo-saga";
/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    //authentication
    takeLatest(AuthsTypes.LOGIN_REQUEST, AuthsSagas.login),
    takeLatest(AuthsTypes.REGISTER_REQUEST, AuthsSagas.register),
    takeLatest(AuthsTypes.FORGOT_PASSWORD_REQUEST, AuthsSagas.forgotPassword),
    takeLatest(AuthsTypes.RESET_PASSWORD_REQUEST, AuthsSagas.resetPassword),
    takeLatest(AuthsTypes.SOCIAL_LOGIN_REQUEST, AuthsSagas.socialLogin),
    takeLatest(AuthsTypes.AUTHS_FAILURE, ErrorsSagas.raiseError),

    takeLatest(TypesLogin.LOGIN_REQUEST_DEMO, LoginSagas.loginDemo),
    takeLatest(TypesLogin.LOGIN_FAILURE_DEMO, ErrorsSagas.raiseError),

    takeLatest(TypesTable.TABLE_REQUEST, TableDemoSagas.getTableDataDemo),
    takeLatest(TypesTable.TABLE_ADD_REQUEST, TableDemoSagas.AddTableData)

    // takeLatest(TypesLogin.TABLE_REQUEST_FAILURE, ErrorsSagas.raiseError),
  ]);
}
