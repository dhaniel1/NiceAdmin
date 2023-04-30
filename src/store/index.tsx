import { createBrowserRouter } from "react-router-dom";
import Root from "../App";

const routes = [{ path: "/", element: <Root /> }];

export const router = createBrowserRouter(routes);
