<<<<<<< HEAD
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import Spinner from "@/components/spinner";
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const location = useLocation();

  if (isLoading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    // Redirect to Auth0 login page and pass the current route as the `redirect_uri`
    loginWithRedirect({
      appState: { returnTo: location.pathname },
    });
    return null; // Do not render anything while redirecting
  }

  return children;
=======
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading...</div>; // Optionally replace with a loading spinner
  }

  return isAuthenticated ? children : null;
>>>>>>> singewarePics
};

export default ProtectedRoute;
