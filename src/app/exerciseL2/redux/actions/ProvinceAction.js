import {
  GET_DISTRICTS_IN_PROVINCE_FAILED,
  GET_DISTRICTS_IN_PROVINCE_REQUESTED,
  GET_DISTRICTS_IN_PROVINCE_SUCCEEDED,
} from "../constants/districtConstant";
import {
  ADD_PROVINCE_FAILED,
  ADD_PROVINCE_REQUESTED,
  ADD_PROVINCE_SUCCEEDED,
  DELETE_PROVINCE_FAILED,
  DELETE_PROVINCE_REQUESTED,
  DELETE_PROVINCE_SUCCEEDED,
  EDIT_PROVINCE_FAILED,
  EDIT_PROVINCE_REQUESTED,
  EDIT_PROVINCE_SUCCEEDED,
  GET_PROVINCES_FAILED,
  GET_PROVINCES_REQUESTED,
  GET_PROVINCES_SUCCEEDED,
  SET_PROVINCE,
} from "../constants/provinceConstant";

export const setProvince = (payload) => {
  return {
    type: SET_PROVINCE,
    payload: payload,
  };
};

// GET DISTRICTS BY ID
export const getDistrictsByProvinceIdRequested = (payload) => {
  return {
    type: GET_DISTRICTS_IN_PROVINCE_REQUESTED,
    payload: payload,
  };
};

export const getDistrictsByProvinceIdSucceeded = (payload) => {
  return {
    type: GET_DISTRICTS_IN_PROVINCE_SUCCEEDED,
    payload: payload,
  };
};

export const getDistrictsByProvinceIdFailed = (payload) => {
  return {
    type: GET_DISTRICTS_IN_PROVINCE_FAILED,
    payload: payload,
  };
};

// GET ALL PROVINCES
export const getProvincesRequested = (payload) => {
  return {
    type: GET_PROVINCES_REQUESTED,
    payload: payload,
  };
};

export const getProvincesSucceeded = (payload) => {
  return {
    type: GET_PROVINCES_SUCCEEDED,
    payload: payload,
  };
};

export const getProvincesFailed = (payload) => {
  return {
    type: GET_PROVINCES_FAILED,
    payload: payload,
  };
};

// ADD PROVINCE
export const addProvinceRequested = (payload) => {
  return {
    type: ADD_PROVINCE_REQUESTED,
    payload: payload,
  };
};

export const addProvinceSucceeded = (payload) => {
  return {
    type: ADD_PROVINCE_SUCCEEDED,
    payload: payload,
  };
};

export const addProvinceFailed = (payload) => {
  return {
    type: ADD_PROVINCE_FAILED,
    payload: payload,
  };
};

// EDIT PROVINCE
export const editProvinceRequested = (payload) => {
  return {
    type: EDIT_PROVINCE_REQUESTED,
    payload: payload,
  };
};

export const editProvinceSucceeded = (payload) => {
  return {
    type: EDIT_PROVINCE_SUCCEEDED,
    payload: payload,
  };
};

export const editProvinceFailed = (payload) => {
  return {
    type: EDIT_PROVINCE_FAILED,
    payload: payload,
  };
};

// DELETE PROVINCE
export const deleteProvinceRequested = (payload) => {
  return {
    type: DELETE_PROVINCE_REQUESTED,
    payload: payload,
  };
};

export const deleteProvinceSucceeded = (payload) => {
  return {
    type: DELETE_PROVINCE_SUCCEEDED,
    payload: payload,
  };
};

export const deleteProvinceFailed = (payload) => {
  return {
    type: DELETE_PROVINCE_FAILED,
    payload: payload,
  };
};
