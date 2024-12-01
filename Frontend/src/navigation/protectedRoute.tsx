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
};

export default ProtectedRoute;
