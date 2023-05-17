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
} from "../constants/provinceConstant";

const initialState = {
  listProvince: [],
  loading: false,
  error: false,
};

const ProvinceReducer = (state = initialState, action) => {
  switch (action.type) {
    //Province
    case GET_PROVINCES_REQUESTED:
    case ADD_PROVINCE_REQUESTED:
    case EDIT_PROVINCE_REQUESTED:
    case DELETE_PROVINCE_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case GET_PROVINCES_SUCCEEDED:
      return {
        ...state,
        loading: false,
        listProvince: action.payload,
      };

    case ADD_PROVINCE_SUCCEEDED:
    case EDIT_PROVINCE_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case DELETE_PROVINCE_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case GET_PROVINCES_FAILED:
    case ADD_PROVINCE_FAILED:
    case EDIT_PROVINCE_FAILED:
    case DELETE_PROVINCE_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default ProvinceReducer;
