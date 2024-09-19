import { RouteObject } from "react-router-dom";
import SupportPage from "../views/support/support-page";
import Home from "../views/home/home";
import { Layout } from "./Layout";
import PaymentPage from "@/views/PaymentPage/PaymentPage";

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
        path: "/paymentPage",
        element: <PaymentPage totalAmount={25} itemTitle={"Chessboard"}/>,
      },
    ],
  },
];
