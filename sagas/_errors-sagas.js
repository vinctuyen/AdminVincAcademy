import { put } from "redux-saga/effects";

import ErrorsActions from "../redux/_errors-redux";

const ErrorsSagas = {
  *raiseError({ error, status }) {
    console.log(error, status);
    if (status == 401) {
      console.log(1);
    }
    yield put(ErrorsActions.failure(error, status));
  },
};

export default ErrorsSagas;
