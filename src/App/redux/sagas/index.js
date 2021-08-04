import { all } from 'redux-saga/effects';
import { employeesSaga } from './employeesSaga';
import { workLogSaga } from './workLogSaga';

export default function* rootSaga() {

   yield all([
    employeesSaga(),
    workLogSaga(),
   ]);

}