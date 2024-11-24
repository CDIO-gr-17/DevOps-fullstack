import { RouteObject } from "react-router-dom";
import SupportPage from "../views/support/support-page";
import Home from "../views/home/home";
import Profile from "../views/profile/profile_overview";
import { Layout } from "./Layout";
import ProductCatalogPage from "@/views/product-catalogue/product-catalogue-page";
import PaymentPage from "@/views/PaymentPage/PaymentPage";
import WinnerPage from "@/views/WinnerPage/WinnerPage";
import SingleWare from "@/views/singleWare/singleWare";
import CreateAuction from "@/views/newAuction/newAuctionPage";
import SignUpPage from "@/views/login/signUp";
// import ProtectedRoute from "./protectedRoute";

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
      {
        path: "/products/:id",
        element: <SingleWare />,
      },
      {
        path: "/paymentpage",
        element: <PaymentPage totalAmount={0} itemTitle={""} />,
      },
      { path: "/winners", element: <WinnerPage /> },
      {
        path: "/createAuction",
        element: <CreateAuction />,
      },

      {
        path: "/Sign-Up",
        element: <SignUpPage />,
      },
    ],
  },
];
