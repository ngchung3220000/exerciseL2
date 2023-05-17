import {
  ADD_DISTRICT_FAILED,
  ADD_DISTRICT_REQUESTED,
  ADD_DISTRICT_SUCCEEDED,
  DELETE_DISTRICT_FAILED,
  DELETE_DISTRICT_REQUESTED,
  DELETE_DISTRICT_SUCCEEDED,
  EDIT_DISTRICT_FAILED,
  EDIT_DISTRICT_REQUESTED,
  EDIT_DISTRICT_SUCCEEDED,
  GET_DISTRICTS_FAILED,
  GET_DISTRICTS_REQUESTED,
  GET_DISTRICTS_SUCCEEDED,
  SET_DISTRICT,
} from "../constants/districtConstant";
import {
  GET_WARDS_IN_DISTRICT_FAILED,
  GET_WARDS_IN_DISTRICT_REQUESTED,
  GET_WARDS_IN_DISTRICT_SUCCEEDED,
} from "../constants/wardConstant";

export const setDistrict = (payload) => {
  return {
    type: SET_DISTRICT,
    payload: payload,
  };
};

// GET WARDS BY ID
export const getWardsByDistrictIdRequested = (payload) => {
  return {
    type: GET_WARDS_IN_DISTRICT_REQUESTED,
    payload: payload,
  };
};

export const getWardsByDistrictIdSucceeded = (payload) => {
  return {
    type: GET_WARDS_IN_DISTRICT_SUCCEEDED,
    payload: payload,
  };
};

export const getWardsByDistrictIdFailed = (payload) => {
  return {
    type: GET_WARDS_IN_DISTRICT_FAILED,
    payload: payload,
  };
};

// GET ALL DISTRICTS
export const getDistrictsRequested = (payload) => {
  return {
    type: GET_DISTRICTS_REQUESTED,
    payload: payload,
  };
};
export const getDistrictsSucceeded = (payload) => {
  return {
    type: GET_DISTRICTS_SUCCEEDED,
    payload: payload,
  };
};
export const getDistrictsFailed = (payload) => {
  return {
    type: GET_DISTRICTS_FAILED,
    payload: payload,
  };
};

// ADD DISTRICT
export const addDistrictRequested = (payload) => {
  return {
    type: ADD_DISTRICT_REQUESTED,
    payload: payload,
  };
};

export const addDistrictSucceeded = (payload) => {
  return {
    type: ADD_DISTRICT_SUCCEEDED,
    payload: payload,
  };
};

export const addDistrictFailed = (payload) => {
  return {
    type: ADD_DISTRICT_FAILED,
    payload: payload,
  };
};

// EDIT DISTRICT
export const editDistrictRequested = (payload) => {
  return {
    type: EDIT_DISTRICT_REQUESTED,
    payload: payload,
  };
};

export const editDistrictSucceeded = (payload) => {
  return {
    type: EDIT_DISTRICT_SUCCEEDED,
    payload: payload,
  };
};

export const editDistrictFailed = (payload) => {
  return {
    type: EDIT_DISTRICT_FAILED,
    payload: payload,
  };
};

// DELETE DISTRICT
export const deleteDistrictRequested = (payload) => {
  return {
    type: DELETE_DISTRICT_REQUESTED,
    payload: payload,
  };
};

export const deleteDistrictSucceeded = (payload) => {
  return {
    type: DELETE_DISTRICT_SUCCEEDED,
    payload: payload,
  };
};

export const deleteDistrictFailed = (payload) => {
  return {
    type: DELETE_DISTRICT_FAILED,
    payload: payload,
  };
};
