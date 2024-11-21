import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const location = useLocation();

  if (isLoading) {
    // Optionally render a loading spinner while Auth0 checks the user's auth state
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Redirect to Auth0 login page and pass the current route as the `redirect_uri`
    loginWithRedirect({
      appState: { returnTo: location.pathname },
    });
    return null; // Do not render anything while redirecting
  }

  // Render the child component if authenticated
  return children;
};

export default ProtectedRoute;
