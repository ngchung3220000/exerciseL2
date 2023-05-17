import { EgretLoadable } from "egret";
import ConstantList from "../../../../appConfig";
import { withTranslation } from "react-i18next";
const Ward = EgretLoadable({
  loader: () => import("./Ward"),
});
const ViewComponent = withTranslation()(Ward);
const WardRoutes = [
  {
    path: ConstantList.ROOT_PATH + "list/ward",
    exact: true,
    component: ViewComponent,
  },
];

export default WardRoutes;
