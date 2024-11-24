import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getUserToken = async () => {
      const domain = "dev-ilmn83jst05snfbb.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });
        console.log("Access token: " + accessToken);
      } catch (e) {
        console.log((e as Error).message);
      }
    };

    getUserToken();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated && (
      <div>
        {user && <img src={user.picture} alt={user.name} />}
        <h3 className="text-4xl font-bold">Welcome, {user?.name}</h3>
        <h2>User name: {user?.name ?? "Unknown"}</h2>
        <p>User email: {user?.email}</p>
      </div>
    )
  );
};

export default Profile;
