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
  GET_DISTRICTS_IN_PROVINCE_FAILED,
  GET_DISTRICTS_IN_PROVINCE_REQUESTED,
  GET_DISTRICTS_IN_PROVINCE_SUCCEEDED,
  GET_DISTRICTS_REQUESTED,
  GET_DISTRICTS_SUCCEEDED,
} from "../constants/districtConstant";

const initialState = {
  listDistrict: [],
  loading: false,
  error: false,
};

const DistrictReducer = (state = initialState, action) => {
  switch (action.type) {
    // District
    case GET_DISTRICTS_IN_PROVINCE_REQUESTED:
    case GET_DISTRICTS_REQUESTED:
    case ADD_DISTRICT_REQUESTED:
    case EDIT_DISTRICT_REQUESTED:
    case DELETE_DISTRICT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_DISTRICTS_SUCCEEDED:
    case GET_DISTRICTS_IN_PROVINCE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        listDistrict: action.payload,
      };

    case ADD_DISTRICT_SUCCEEDED:
    case EDIT_DISTRICT_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case DELETE_DISTRICT_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case GET_DISTRICTS_IN_PROVINCE_FAILED:
    case GET_DISTRICTS_FAILED:
    case ADD_DISTRICT_FAILED:
    case EDIT_DISTRICT_FAILED:
    case DELETE_DISTRICT_FAILED:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default DistrictReducer;
