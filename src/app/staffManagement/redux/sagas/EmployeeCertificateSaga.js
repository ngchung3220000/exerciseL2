import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addEmployeeCertificate,
  editEmployeeCertificate,
  getEmployeeCertificates,
} from "app/staffManagement/api/CertificateServices";
import { SUCCESS } from "app/staffManagement/constants/constants";
import {
  addEmployeeCertificateFailed,
  addEmployeeCertificateSucceeded,
  editEmployeeCertificateFailed,
  editEmployeeCertificateSucceeded,
  getEmployeeCertificatesFailed,
  getEmployeeCertificatesSucceeded,
} from "../actions/EmployeeCertificateAction";
import {
  ADD_EMPLOYEE_CERTIFICATE_REQUESTED,
  EDIT_EMPLOYEE_CERTIFICATE_REQUESTED,
  GET_EMPLOYEE_CERTIFICATES_REQUESTED,
} from "../constants/employeeCertificateConstant";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function* fetchGetEmployeeCertificates(action) {
  try {
    const result = yield call(getEmployeeCertificates);
    if (result?.data?.code === SUCCESS) {
      yield put(getEmployeeCertificatesSucceeded(result?.data?.data));
    } else {
      yield put(getEmployeeCertificatesFailed());
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchAddEmployeeCertificate(action) {
  try {
    const result = yield call(addEmployeeCertificate, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield put(addEmployeeCertificateSucceeded(result?.data?.data));
      yield fetchGetEmployeeCertificates();
      toast.success(result?.data?.message);
    } else {
      yield put(addEmployeeCertificateFailed());
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

function* fetchEditEmployeeCertificate(action) {
  try {
    const result = yield call(editEmployeeCertificate, action.payload);
    if (result?.data?.code === SUCCESS) {
      yield put(editEmployeeCertificateSucceeded(result?.data?.data));
      yield fetchGetEmployeeCertificates();
    } else {
      yield put(editEmployeeCertificateFailed());
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

export default function* rootEmployeeCertificateSaga() {
  yield takeEvery(
    GET_EMPLOYEE_CERTIFICATES_REQUESTED,
    fetchGetEmployeeCertificates
  );
  yield takeEvery(
    ADD_EMPLOYEE_CERTIFICATE_REQUESTED,
    fetchAddEmployeeCertificate
  );
  yield takeEvery(
    EDIT_EMPLOYEE_CERTIFICATE_REQUESTED,
    fetchEditEmployeeCertificate
  );
}
