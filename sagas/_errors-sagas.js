import { put } from "redux-saga/effects";

import ErrorsActions from "../redux/_errors-redux";

const ErrorsSagas = {
  *raiseError({ error, status }) {
    yield put(ErrorsActions.failure(error, status));
  },
};

export default ErrorsSagas;
