import { RouteObject } from "react-router-dom";
import SupportPage from "../views/support/support-page";
import Home from "../views/home/home";
import { Layout } from "./Layout";
import WinnerPage from "@/views/WinnerPage/WinnerPage";
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
        path: "/winnerpage",
        element: <WinnerPage winnerName={"Lars"} itemTitle={"Chessboard"} auctionEndDate={"12-25-2024"} />,
      },
    ],
  },
];
