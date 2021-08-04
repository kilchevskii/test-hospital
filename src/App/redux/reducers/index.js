import { combineReducers } from 'redux';
import employeesReducer from './employeesReducer';
import workLogReducer from './workLogReducer';

const rootReducer = combineReducers({
   employees: employeesReducer,
   worklog: workLogReducer,
});

export default rootReducer;
