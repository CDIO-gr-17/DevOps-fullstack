import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";
import NavigationMenu from "./components/navigation-menu.tsx";
import Footer from "./components/footer.tsx";

const router = createBrowserRouter(routes);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavigationMenu />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
