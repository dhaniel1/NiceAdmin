import { createBrowserRouter } from "react-router-dom";
import Root from "../App";
import SignUp from "../components/signUp/signUp";
import Dashboard from "../pages/dashboard/dashboard";
import Home from "../pages/home/home";

export const path = {
  root: { path: "/" },
  signUp: { path: "/sign-up" },
  home: { path: "/home" },
  dashboard: { path: "/dashboard" },
};
const routes = [
  { path: path.root.path, element: <Root /> },
  { path: path.signUp.path, element: <SignUp /> },
  { path: path.home.path, element: <Home/> },
  { path: path.dashboard.path, element: <Dashboard /> },
];

export const router = createBrowserRouter(routes);
