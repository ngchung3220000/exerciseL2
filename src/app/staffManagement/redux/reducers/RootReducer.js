import { combineReducers } from "redux";
import LoginReducer from "../../../redux/reducers/LoginReducer";
import UserReducer from "../../../redux/reducers/UserReducer";
import LayoutReducer from "../../../redux/reducers/LayoutReducer";
import ScrumBoardReducer from "../../../redux/reducers/ScrumBoardReducer";
import NotificationReducer from "../../../redux/reducers/NotificationReducer";
import EcommerceReducer from "../../../redux/reducers/EcommerceReducer";

import EmployeeReducer from "app/staffManagement/redux/reducers/EmployeeReducer";
import ProvinceReducer from "./ProvinceReducer";
import DistrictReducer from "./DistrictReducer";
import WardReducer from "./WardReducer";
import EmployeeCertificateReducer from "./EmployeeCertificateReducer";
import CertificateReducer from "./CertificateReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notification: NotificationReducer,
  ecommerce: EcommerceReducer,

  employee: EmployeeReducer,
  province: ProvinceReducer,
  district: DistrictReducer,
  ward: WardReducer,
  employeeCertificate: EmployeeCertificateReducer,
  certificate: CertificateReducer,
});

export default RootReducer;
