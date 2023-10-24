export const oktaConfig = {
  clientId: '0oacqg3fo2MdKTqEf5d7',
  issuer: 'https://dev-86780686.okta.com/oauth2/default',
  redirectUri: 'https://localhost:3000/login/callback',
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
