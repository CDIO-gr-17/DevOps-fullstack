import { RouteObject } from "react-router-dom";
import SupportPage from "../views/support/support-page";
import Home from "../views/home/home";
import SingleItem from "../views/items/lion-painting";
import { Layout } from "./Layout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />, // Use Layout as the root element
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/support",
        element: <SupportPage />,
      },
      {
        path: "/1",
        element: <SingleItem />,
      },
    ],
  },
];
