import { all } from "redux-saga/effects";
import rootCertificateSaga from "./CertificateSaga";
import rootDistrictSaga from "./DistrictSaga";
import rootEmployeeCertificateSaga from "./EmployeeCertificateSaga";
import rootEmployeeSaga from "./EmployeeSaga";
import rootProvinceSaga from "./ProvinceSaga";
import rootWardSaga from "./WardSaga";

export default function* RootSaga() {
  yield all([
    rootEmployeeSaga(),
    rootProvinceSaga(),
    rootWardSaga(),
    rootDistrictSaga(),
    rootCertificateSaga(),
    rootEmployeeCertificateSaga(),
  ]);
}
