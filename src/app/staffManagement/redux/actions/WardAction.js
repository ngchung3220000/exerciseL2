import {
  ADD_WARD_FAILED,
  ADD_WARD_REQUESTED,
  ADD_WARD_SUCCEEDED,
  DELETE_WARD_FAILED,
  DELETE_WARD_REQUESTED,
  DELETE_WARD_SUCCEEDED,
  EDIT_WARD_FAILED,
  EDIT_WARD_REQUESTED,
  EDIT_WARD_SUCCEEDED,
  GET_WARDS_FAILED,
  GET_WARDS_REQUESTED,
  GET_WARDS_SUCCEEDED,
  SET_WARD,
} from "../constants/wardConstant";

export const setWard = (payload) => {
  return {
    type: SET_WARD,
    payload: payload,
  };
};

// GET ALL WARDS
export const getWardsRequested = (payload) => {
  return {
    type: GET_WARDS_REQUESTED,
    payload: payload,
  };
};
export const getWardsSucceeded = (payload) => {
  return {
    type: GET_WARDS_SUCCEEDED,
    payload: payload,
  };
};
export const getWardsFailed = (payload) => {
  return {
    type: GET_WARDS_FAILED,
    payload: payload,
  };
};

// ADD WARD
export const addWardRequested = (payload) => {
  return {
    type: ADD_WARD_REQUESTED,
    payload: payload,
  };
};

export const addWardSucceeded = (payload) => {
  return {
    type: ADD_WARD_SUCCEEDED,
    payload: payload,
  };
};

export const addWardFailed = (payload) => {
  return {
    type: ADD_WARD_FAILED,
    payload: payload,
  };
};

// EDIT WARD
export const editWardRequested = (payload) => {
  return {
    type: EDIT_WARD_REQUESTED,
    payload: payload,
  };
};

export const editWardSucceeded = (payload) => {
  return {
    type: EDIT_WARD_SUCCEEDED,
    payload: payload,
  };
};

export const editWardFailed = (payload) => {
  return {
    type: EDIT_WARD_FAILED,
    payload: payload,
  };
};

// DELETE WARD
export const deleteWardRequested = (payload) => {
  return {
    type: DELETE_WARD_REQUESTED,
    payload: payload,
  };
};

export const deleteWardSucceeded = (payload) => {
  return {
    type: DELETE_WARD_SUCCEEDED,
    payload: payload,
  };
};

export const deleteWardFailed = (payload) => {
  return {
    type: DELETE_WARD_FAILED,
    payload: payload,
  };
};
