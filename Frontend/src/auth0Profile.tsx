import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const {
    user,
    isAuthenticated,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
  } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const domain = "dev-ilmn83jst05snfbb.us.auth0.com";

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        let accessToken;

        try {
          // Try getting the token silently
          accessToken = await getAccessTokenSilently({
            authorizationParams: {
              audience: `https://${domain}/api/v2/`,
              scope: "read:users read:users_app_metadata",
            },
          });
        } catch (error) {
          if ((error as any).error === "consent_required") {
            console.warn("Consent required, triggering popup...");
            // Trigger consent popup
            accessToken = await getAccessTokenWithPopup({
              authorizationParams: {
                audience: `https://${domain}/api/v2/`,
                scope: "read:users read:users_app_metadata",
              },
            });
          } else {
            throw error; // Rethrow other errors
          }
          console.log("Access token:", accessToken);
        }

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!metadataResponse.ok) {
          throw new Error(
            `Failed to fetch user metadata: ${metadataResponse.status} ${metadataResponse.statusText}`
          );
        }

        const userData = await metadataResponse.json();
        setUserMetadata(userData.user_metadata);
      } catch (e) {
        console.error("Error fetching user metadata:", e);
      }
    };

    if (user?.sub) {
      getUserMetadata();
    }
  }, [getAccessTokenSilently, getAccessTokenWithPopup, user?.sub]);

  return (
    isAuthenticated && (
      <div>
        {user?.picture && <img src={user.picture} alt={user.name} />}
        {user?.name && <p>{user.name}</p>}
        {user?.email && <p>{user.email}</p>}
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default Profile;
