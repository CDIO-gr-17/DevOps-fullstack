<<<<<<< HEAD
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button
            className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-xs rounded"
            onClick={() => loginWithRedirect()}
        >
            Log In
        </button>
    );
};

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button
            className="mt-1 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 text-xs rounded"
            onClick={() => logout()}
        >
            Log Out
        </button>
    );
}

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();
  
    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
  };
  
  export default AuthenticationButton;
=======
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-xs rounded"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="mt-1 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 text-xs rounded"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
>>>>>>> singewarePics
