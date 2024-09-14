import { RouteObject } from "react-router-dom";
import App from "./App";
import SupportPage from "./views/support/support-page";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/support",
    element: <SupportPage />,
  },
];
