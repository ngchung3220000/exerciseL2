import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  addDistrict,
  deleteDistrict,
  editDistrict,
  getDistricts,
} from "app/staffManagement/api/DistrictServices";
import { SUCCESS } from "app/staffManagement/constants/constants";
import { getWardsByDistrictId } from "app/staffManagement/api/EmployeeServices";
import {
  addDistrictFailed,
  addDistrictSucceeded,
  deleteDistrictFailed,
  deleteDistrictSucceeded,
  editDistrictFailed,
  editDistrictSucceeded,
  getDistrictsFailed,
  getDistrictsSucceeded,
  getWardsByDistrictIdFailed,
  getWardsByDistrictIdSucceeded,
} from "../actions/DistrictAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ADD_DISTRICT_REQUESTED,
  DELETE_DISTRICT_REQUESTED,
  EDIT_DISTRICT_REQUESTED,
  GET_DISTRICTS_REQUESTED,
} from "../constants/districtConstant";
import { GET_WARDS_IN_DISTRICT_REQUESTED } from "../constants/wardConstant";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function* fetchGetWardsInDistrict(action) {
  try {
    const result = yield call(getWardsByDistrictId, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield put(getWardsByDistrictIdSucceeded(result?.data?.data));
    } else {
      yield put(getWardsByDistrictIdFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchGetDistricts() {
  try {
    const result = yield call(getDistricts);
    if (result?.data?.code === SUCCESS) {
      yield put(getDistrictsSucceeded(result?.data?.data));
    } else {
      yield put(getDistrictsFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchAddDistrict(action) {
  try {
    const result = yield call(addDistrict, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetDistricts();
      yield put(addDistrictSucceeded());
      toast.success(result?.data?.message);
    } else {
      yield put(addDistrictFailed());
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchEditDistrict(action) {
  try {
    const result = yield call(editDistrict, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetDistricts();
      yield put(editDistrictSucceeded());
      toast.success(result?.data?.message);
    } else {
      yield put(editDistrictFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchDeleteDistrict(action) {
  try {
    const result = yield call(deleteDistrict, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield fetchGetDistricts();
      yield put(deleteDistrictSucceeded(result?.data?.data));
      toast.success(result?.data?.message);
    } else {
      yield put(deleteDistrictFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

export default function* rootDistrictSaga() {
  yield takeEvery(GET_DISTRICTS_REQUESTED, fetchGetDistricts);
  yield takeEvery(ADD_DISTRICT_REQUESTED, fetchAddDistrict);
  yield takeEvery(EDIT_DISTRICT_REQUESTED, fetchEditDistrict);
  yield takeEvery(DELETE_DISTRICT_REQUESTED, fetchDeleteDistrict);
  yield takeEvery(GET_WARDS_IN_DISTRICT_REQUESTED, fetchGetWardsInDistrict);
}
