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
} from "../constants/certificateConstant";

const initialState = {
  listCertificate: [],
  loading: false,
  error: false,
};

const CertificateReducer = (state = initialState, action) => {
  switch (action.type) {
    // Certificate
    case GET_CERTIFICATES_REQUESTED:
    case ADD_CERTIFICATE_REQUESTED:
    case EDIT_CERTIFICATE_REQUESTED:
    case DELETE_CERTIFICATE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_CERTIFICATES_SUCCEEDED:
      return {
        ...state,
        loading: false,
        listCertificate: action.payload,
      };

    case ADD_CERTIFICATE_SUCCEEDED:
    case EDIT_CERTIFICATE_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case DELETE_CERTIFICATE_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };
    case GET_CERTIFICATES_FAILED:
    case ADD_CERTIFICATE_FAILED:
    case EDIT_CERTIFICATE_FAILED:
    case DELETE_CERTIFICATE_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default CertificateReducer;
