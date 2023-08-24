import { createBrowserRouter } from "react-router-dom";
import Root from "../App";
import SignUp from "../components/signUp/signUp";
import Home from "../pages/home/home";

export const path = {
  root: { path: "/" },
  signUp: { path: "/sign-up" },
  home: { path: "/home" },
};

const routes = [
  { path: path.root.path, element: <Root /> },
  { path: path.signUp.path, element: <SignUp /> },
  { path: path.home.path, element: <Home /> },
];

export const router = createBrowserRouter(routes);
