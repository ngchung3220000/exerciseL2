import {
  ADD_CERTIFICATE_FAILED,
  ADD_CERTIFICATE_REQUESTED,
  ADD_CERTIFICATE_SUCCEEDED,
  DELETE_CERTIFICATE_FAILED,
  DELETE_CERTIFICATE_REQUESTED,
  DELETE_CERTIFICATE_SUCCEEDED,
  EDIT_CERTIFICATE_FAILED,
  EDIT_CERTIFICATE_REQUESTED,
  EDIT_CERTIFICATE_SUCCEEDED,
  GET_CERTIFICATES_FAILED,
  GET_CERTIFICATES_REQUESTED,
  GET_CERTIFICATES_SUCCEEDED,
  SET_CERTIFICATE,
} from "../constants/certificateConstant";

export const setCertificate = (payload) => {
  return {
    type: SET_CERTIFICATE,
    payload: payload,
  };
};

export const getCertificatesRequested = (payload) => {
  return {
    type: GET_CERTIFICATES_REQUESTED,
    payload: payload,
  };
};
export const getCertificatesSucceeded = (payload) => {
  return {
    type: GET_CERTIFICATES_SUCCEEDED,
    payload: payload,
  };
};
export const getCertificatesFailed = (payload) => {
  return {
    type: GET_CERTIFICATES_FAILED,
    payload: payload,
  };
};

// ADD CERTIFICATE
export const addCertificateRequested = (payload) => {
  return {
    type: ADD_CERTIFICATE_REQUESTED,
    payload: payload,
  };
};

export const addCertificateSucceeded = (payload) => {
  return {
    type: ADD_CERTIFICATE_SUCCEEDED,
    payload: payload,
  };
};

export const addCertificateFailed = (payload) => {
  return {
    type: ADD_CERTIFICATE_FAILED,
    payload: payload,
  };
};

// EDIT CERTIFICATE
export const editCertificateRequested = (payload) => {
  return {
    type: EDIT_CERTIFICATE_REQUESTED,
    payload: payload,
  };
};

export const editCertificateSucceeded = (payload) => {
  return {
    type: EDIT_CERTIFICATE_SUCCEEDED,
    payload: payload,
  };
};

export const editCertificateFailed = (payload) => {
  return {
    type: EDIT_CERTIFICATE_FAILED,
    payload: payload,
  };
};

// DELETE CERTIFICATE
export const deleteCertificateRequested = (payload) => {
  return {
    type: DELETE_CERTIFICATE_REQUESTED,
    payload: payload,
  };
};

export const deleteCertificateSucceeded = (payload) => {
  return {
    type: DELETE_CERTIFICATE_SUCCEEDED,
    payload: payload,
  };
};

export const deleteCertificateFailed = (payload) => {
  return {
    type: DELETE_CERTIFICATE_FAILED,
    payload: payload,
  };
};
