import { put, call } from "redux-saga/effects";
import TypesLogin from "../redux/login-demo";

const LoginSagas = {
  *loginDemo(data) {
    let user = { username: "admin", pass: "pass" };
    let errmokup = {
      error: "wrong pass account",
      status: 400
    };

    if (data.username === user.username && data.password === user.pass) {
      yield put(TypesLogin.loginSuccess(user.username));
    } else {
      yield put(TypesLogin.loginFailureDemo(errmokup));
    }
  }
};

export default LoginSagas;