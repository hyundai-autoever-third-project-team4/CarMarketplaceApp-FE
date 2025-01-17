export const handleLoginClick = () => {
  const keycloakAuthUrl =
    "https://keycloakmalak.site/realms/key-cloak-malak-realm/protocol/openid-connect/auth" +
    "?response_type=code" +
    "&client_id=key-cloak-malak" +
    "&redirect_uri=http://localhost:5173/signup" +
    "&scope=profile email openid";

  window.location.href = keycloakAuthUrl;
};
