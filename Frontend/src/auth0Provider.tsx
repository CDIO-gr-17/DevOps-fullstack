import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById('root')!);

root.render(
<Auth0Provider
    domain="dev-ilmn83jst05snfbb.us.auth0.com"
    clientId="330cs4wFl6J9CqBLi1eaklhmPKf3ShH4"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-ilmn83jst05snfbb.us.auth0.com/api/v2/",
      scope: "read:current_user update:current_user_metadata"
    }}
  >
  </Auth0Provider>,
);