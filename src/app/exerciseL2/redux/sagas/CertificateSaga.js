import { SUCCESS } from "app/exerciseL2/constants/constants";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  addEmployeeCertificate,
  getCertificates,
  getEmployeeCertificates,
} from "app/exerciseL2/api/CertificateServices";
import {
  getCertificatesFailed,
  getCertificatesSucceeded,
} from "../actions/CertificateAction";
import {
  addEmployeeCertificateFailed,
  addEmployeeCertificateSucceeded,
  getEmployeeCertificatesFailed,
  getEmployeeCertificatesSucceeded,
} from "../actions/EmployeeCertificateAction";
import { fetchGetEmployees } from "./EmployeeSaga";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GET_CERTIFICATES_REQUESTED } from "../constants/certificateConstant";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function* fetchGetCertificates() {
  try {
    const result = yield call(getCertificates);
    if (result?.data?.code === SUCCESS) {
      yield put(getCertificatesSucceeded(result?.data?.data));
    } else {
      yield put(getCertificatesFailed());
      toast.error(result?.data?.message);
    }
  } catch (error) {
    toast.error("Lỗi máy chủ rồi!!!");
  }
}

export default function* rootCertificateSaga() {
  yield takeEvery(GET_CERTIFICATES_REQUESTED, fetchGetCertificates);
}
