import React from "react";
import { Redirect } from "react-router-dom";
import homeRoutes from "./views/home/HomeRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";
import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import administrativeUnitRoutes from "./views/AdministrativeUnit/AdministrativeUnitRoutes";
import UserRoutes from "./views/User/UserRoutes";
import departmentRoutes from "./views/Department/DepartmentRoutes";
import ConstantList from "./appConfig";
import pageLayoutRoutes from "./views/page-layouts/PageLayoutRoutees";
import MenuRoutes from "./views/Menus/MenuRoutes";
import ShiftWorkRouters from "./views/ShiftWork/ShiftWorkRouters";
import TimeSheetRoutes from "./views/TimeSheet/TimeSheetRoutes";
import ColorRoutes from "./views/Color/ColorRoutes";
import CategoryRoutes from "./views/Category/CategoryRoutes";

import EmployeeRoutes from "./exerciseL2/staff/Employee/EmployeeRoutes";
import ProvinceRoutes from "./exerciseL2/staff/Address/Province/ProvinceRoutes";
import WardRoutes from "./exerciseL2/staff/Address/Ward/WardRoutes";
import DistrictRoutes from "./exerciseL2/staff/Address/District/DistrictRoutes";

const redirectRoute = [
  {
    path: ConstantList.ROOT_PATH,
    exact: true,
    component: () => <Redirect to={ConstantList.HOME_PAGE} />, //Luôn trỏ về HomePage được khai báo trong appConfig
  },
];

const errorRoute = [
  {
    component: () => <Redirect to={ConstantList.ROOT_PATH + "session/404"} />,
  },
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  // ...TimeSheetRoutes,
  ...administrativeUnitRoutes,
  // ...departmentRoutes,
  ...pageLayoutRoutes,
  ...MenuRoutes,
  ...EmployeeRoutes,
  ...ProvinceRoutes,
  ...WardRoutes,
  ...DistrictRoutes,
  ...UserRoutes,
  // ...ShiftWorkRouters,
  // ...ColorRoutes,
  ...CategoryRoutes,
  // ...errorRoute,
];

export default routes;
