import {
  ADD_EMPLOYEE_CERTIFICATE_FAILED,
  ADD_EMPLOYEE_CERTIFICATE_REQUESTED,
  ADD_EMPLOYEE_CERTIFICATE_SUCCEEDED,
  EDIT_EMPLOYEE_CERTIFICATE_FAILED,
  EDIT_EMPLOYEE_CERTIFICATE_REQUESTED,
  EDIT_EMPLOYEE_CERTIFICATE_SUCCEEDED,
  GET_EMPLOYEE_CERTIFICATES_FAILED,
  GET_EMPLOYEE_CERTIFICATES_REQUESTED,
  GET_EMPLOYEE_CERTIFICATES_SUCCEEDED,
  SET_EMPLOYEE_CERTIFICATE,
} from "../constants/employeeCertificateConstant";

export const setEmployeeCertificate = (payload) => {
  return {
    type: SET_EMPLOYEE_CERTIFICATE,
    payload: payload,
  };
};

export const getEmployeeCertificatesRequested = (payload) => {
  return {
    type: GET_EMPLOYEE_CERTIFICATES_REQUESTED,
    payload: payload,
  };
};

export const getEmployeeCertificatesSucceeded = (payload) => {
  return {
    type: GET_EMPLOYEE_CERTIFICATES_SUCCEEDED,
    payload: payload,
  };
};

export const getEmployeeCertificatesFailed = (payload) => {
  return {
    type: GET_EMPLOYEE_CERTIFICATES_FAILED,
    payload: payload,
  };
};

// ADD EMPLOYEE-CERTIFICATE
export const addEmployeeCertificateRequested = (payload) => {
  return {
    type: ADD_EMPLOYEE_CERTIFICATE_REQUESTED,
    payload: payload,
  };
};

export const addEmployeeCertificateSucceeded = (payload) => {
  return {
    type: ADD_EMPLOYEE_CERTIFICATE_SUCCEEDED,
    payload: payload,
  };
};

export const addEmployeeCertificateFailed = (payload) => {
  return {
    type: ADD_EMPLOYEE_CERTIFICATE_FAILED,
    payload: payload,
  };
};

// EDIT EMPLOYEE-CERTIFICATE
export const editEmployeeCertificateRequested = (payload) => {
  return {
    type: EDIT_EMPLOYEE_CERTIFICATE_REQUESTED,
    payload: payload,
  };
};

export const editEmployeeCertificateSucceeded = (payload) => {
  return {
    type: EDIT_EMPLOYEE_CERTIFICATE_SUCCEEDED,
    payload: payload,
  };
};

export const editEmployeeCertificateFailed = (payload) => {
  return {
    type: EDIT_EMPLOYEE_CERTIFICATE_FAILED,
    payload: payload,
  };
};
