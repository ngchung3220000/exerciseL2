import {
  ADD_EMPLOYEE_CERTIFICATE_FAILED,
  ADD_EMPLOYEE_CERTIFICATE_REQUESTED,
  ADD_EMPLOYEE_CERTIFICATE_SUCCEEDED,
  DELETE_EMPLOYEE_CERTIFICATE_FAILED,
  DELETE_EMPLOYEE_CERTIFICATE_REQUESTED,
  DELETE_EMPLOYEE_CERTIFICATE_SUCCEEDED,
  EDIT_EMPLOYEE_CERTIFICATE_FAILED,
  EDIT_EMPLOYEE_CERTIFICATE_REQUESTED,
  EDIT_EMPLOYEE_CERTIFICATE_SUCCEEDED,
  GET_EMPLOYEE_CERTIFICATES_FAILED,
  GET_EMPLOYEE_CERTIFICATES_REQUESTED,
  GET_EMPLOYEE_CERTIFICATES_SUCCEEDED,
} from "../constants/employeeCertificateConstant";

const initialState = {
  listEmployeeCertificate: [],
  loading: false,
  error: false,
};

const EmployeeCertificateReducer = (state = initialState, action) => {
  switch (action.type) {
    // Employee-certificates
    case GET_EMPLOYEE_CERTIFICATES_REQUESTED:
    case ADD_EMPLOYEE_CERTIFICATE_REQUESTED:
    case EDIT_EMPLOYEE_CERTIFICATE_REQUESTED:
    case DELETE_EMPLOYEE_CERTIFICATE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    // Employee-Certificate
    case GET_EMPLOYEE_CERTIFICATES_SUCCEEDED:
      return {
        ...state,
        loading: false,
        listEmployeeCertificate: action.payload,
      };

    case ADD_EMPLOYEE_CERTIFICATE_SUCCEEDED:
    case EDIT_EMPLOYEE_CERTIFICATE_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case DELETE_EMPLOYEE_CERTIFICATE_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };
    case GET_EMPLOYEE_CERTIFICATES_FAILED:
    case ADD_EMPLOYEE_CERTIFICATE_FAILED:
    case EDIT_EMPLOYEE_CERTIFICATE_FAILED:
    case DELETE_EMPLOYEE_CERTIFICATE_FAILED:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default EmployeeCertificateReducer;
