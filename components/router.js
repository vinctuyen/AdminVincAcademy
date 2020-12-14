// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
// core components/views for layout
import Dashboard from "../pages/dashboard";
import Post from "../pages/post";
// import TableDemo from "./pages/TableDemo";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    path: "/post",
    name: "Post",
    icon: PeopleIcon,
    component: Post,
  },
  {
    path: "/",
    name: "Login",
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    path: "/",
    name: "Table",
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    path: "/",
    name: "report",
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    path: "/",
    name: "user",
    icon: DashboardIcon,
    component: Dashboard,
  },
//   {
//     path: "/table",
//     name: "Report",
//     icon: BarChartIcon,
//     component: TableDemo,
//   }
];

export default dashboardRoutes;
