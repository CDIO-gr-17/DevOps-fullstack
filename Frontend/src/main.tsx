import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./navigation/Routes";
import { Provider } from "react-redux";
import store from "./store";
import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter(routes);

const Main = () => (
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

const authConfig = {
  domain: "dev-ilmn83jst05snfbb.us.auth0.com",
  clientId: "330cs4wFl6J9CqBLi1eaklhmPKf3ShH4",
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: "https://kunsthavn/api",
    scope: "write:auctionwares",
  },
};

createRoot(document.getElementById("root")!).render(
  <Auth0Provider {...authConfig}>
    <Main />
  </Auth0Provider>
);
