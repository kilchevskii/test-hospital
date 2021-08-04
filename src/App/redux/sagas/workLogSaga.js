import { call, put, takeEvery } from "redux-saga/effects";
import { getWorklog } from "..//..//..//api";

const geWorkTime = async () => {
  const result = await getWorklog();
  return result;
};

function* fetchWorktime() {
  try {
    const usersTimes = yield call(geWorkTime);
    yield put({ type: "GET_WORKLOG_SUCCESS", payload: usersTimes });
  } catch (error) {
    yield put({ type: "WORKLOG_FAILED", message: error.message });
  }
}

function* workLogSaga() {
  yield takeEvery("GET_WORKLOG_REQUESTED", fetchWorktime);
}

export { workLogSaga };
