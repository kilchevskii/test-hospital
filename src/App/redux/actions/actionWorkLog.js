import { GET_WORKLOG_REQUESTED } from "./actionTypes";

export const getWorklog = (data) => {
  return {
    type: GET_WORKLOG_REQUESTED,
    payload: data,
  };
};
