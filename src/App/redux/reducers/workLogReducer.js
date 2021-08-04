import {
    GET_WORKLOG_REQUESTED,
    GET_WORKLOG_SUCCESS,
    WORKLOG_FAILED,
  } from "../actions/actionTypes";
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  export default function workLogReducer(state = initialState, action) {
    switch (action.type) {
      case GET_WORKLOG_REQUESTED:
        return { ...state, loading: true };
      case GET_WORKLOG_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case WORKLOG_FAILED:
        return {
          ...state,
          error: action.message,
        };
  
      default:
        return state;
    }
  }
    