import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Recherche from "views/Recherche";
import Icons from "views/Icons.js";
import login from "views/login.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  
  //{
   // path: "/login",
   // name: "login",
   // icon: "users_single-02",
   // component: login,
    //layout: "/admin",
  //},
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "design_app",
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/recheche",
  //   name: "Recheche",
  //   icon: "design_app",
  //   component: Recherche,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "design_image",
  //   component: Icons,
  //   layout: "/admin",
  // },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/recheche",
    name: "Recheche",
    icon: "ui-1_zoom-bold",
    component: Recherche,
    layout: "/admin",
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "ui-1_bell-53",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "users_single-02",
  //   component: UserPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/extended-tables",
  //   name: "Table List",
  //   icon: "files_paper",
  //   component: TableList,
  //   layout: "/admin",
  // },
];
export default dashRoutes;
