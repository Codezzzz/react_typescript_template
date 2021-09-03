import { all } from "redux-saga/effects";
import root from "saga/root";
export default function* rootSaga() {
  yield all([root()]);
}
