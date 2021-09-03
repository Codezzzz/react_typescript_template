import { PayloadAction } from "@reduxjs/toolkit";
import { fork, put, takeLatest } from "redux-saga/effects";
import {
  getRootRequest,
  getRootSuccess,
  getRootFailure,
} from "store/modules/root";

function* getRoot(action: PayloadAction<string>) {
  try {
    yield put({ type: getRootSuccess.type, payload: "" });
  } catch (e) {
    yield put({ type: getRootFailure.type, payload: "" });
  }
}

function* watchRoot() {
  yield takeLatest(getRootRequest.type, getRoot);
}

export default function* rootSaga() {
  yield fork(watchRoot);
}
