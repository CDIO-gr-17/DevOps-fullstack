import { RouteObject } from "react-router-dom";
import SupportPage from "../views/support/support-page";
import Home from "../views/home/home";
import Profile from "../views/profile/profile_overview";
import { Layout } from "./Layout";
import ProductCatalogPage from "@/views/product-catalogue/product-catalogue-page";

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
        path: "/products",
        element: <ProductCatalogPage />,
      },
      {
        path: "/support",
        element: <SupportPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];
