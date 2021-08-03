import { call, put, takeEvery } from "redux-saga/effects";
import { getEmployees } from "..//..//..//api";


const getData = async () => {
    const result = await getEmployees()
    return result.sort((a, b) => a.lastname > b.lastname ? 1 : -1);
    };

function* fetchEmployees() {
  try {
    const usersModules = yield call(getData);
    yield put({ type: "GET_EMPLOYEES_SUCCESS", payload: usersModules });
  } catch (error) {
    yield put({ type: "EMPLOYEES_FAILED", message: error.message });
  }
}

function* employeesSaga() {
  yield takeEvery("GET_EMPLOYEES_REQUESTED", fetchEmployees);
}

export { employeesSaga };
