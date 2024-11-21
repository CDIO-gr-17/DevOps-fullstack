import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-ilmn83jst05snfbb.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
        console.log("User object:", user);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h3 className="text-4xl font-bold">Welcome, {user.name}</h3>

        <h2>User name: {user.name}</h2>
        <p>User emial: {user.email}</p>
        {userMetadata ? (
          <div>
            <p>First name: {userMetadata.first_name}</p>
            <p>Last name: {userMetadata.last_name}</p>
            <p>Account Type: {userMetadata.account_type}</p>
            <p>Address: {userMetadata.address}</p>
            <p>Phone Number: {userMetadata.phone_number.number}</p>
          </div>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default Profile;
