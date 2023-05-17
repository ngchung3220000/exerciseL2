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
  GET_WARDS_IN_DISTRICT_FAILED,
  GET_WARDS_IN_DISTRICT_REQUESTED,
  GET_WARDS_IN_DISTRICT_SUCCEEDED,
  GET_WARDS_REQUESTED,
  GET_WARDS_SUCCEEDED,
} from "../constants/wardConstant";

const initialState = {
  listWard: [],
  loading: false,
  error: false,
};

const WardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WARDS_IN_DISTRICT_REQUESTED:
    case GET_WARDS_REQUESTED:
    case ADD_WARD_REQUESTED:
    case EDIT_WARD_REQUESTED:
    case DELETE_WARD_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_WARDS_IN_DISTRICT_SUCCEEDED:
    case GET_WARDS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        listWard: action.payload,
      };

    case ADD_WARD_SUCCEEDED:
    case EDIT_WARD_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case DELETE_WARD_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };
    case GET_WARDS_IN_DISTRICT_FAILED:
    case GET_WARDS_FAILED:
    case ADD_WARD_FAILED:
    case EDIT_WARD_FAILED:
    case DELETE_WARD_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default WardReducer;
