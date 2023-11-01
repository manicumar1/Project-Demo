import React, { useEffect } from 'react';
// import axios from 'axios';

const Login = () => {
  useEffect(() => {
    // OIDC configuration
    const oidcConfig = {
      clientId: 'a744f001-d79f-4832-8483-398678e17014',
      clientSecret: 'cb5d0ce1-f910-4cea-a44e-6b0c45ff9cc0',
      view_type:'login',
      request_id:"a01c41ae-2b30-427e-9575-62a6f6223ff9",
      redirect_uri: 'http://localhost:3000/Callback',
     authorizationUrl: 'https://demo-accounts-api.licentio.com/authz-srv/authz',
     flow_id:"06a08217-5b8e-4d8a-bbcb-872baccf0a34",
     response_type:"token",
     scope:"openid%20profile%20user_info_all"
  
    };
    https://demo-accounts-api.licentio.com/authz-srv/authz?client_id=a744f001-d79f-4832-8483-398678e17014&response_type=token&scope=openid,profile,user_info_all&redirect_uri=http://localhost:3000/Callback

    // Redirect the user to the OIDC authorization URL
    window.location.href = `${oidcConfig.authorizationUrl}?client_id=${oidcConfig.clientId}&response_type=${oidcConfig.response_type}&scope=${oidcConfig.scope}&redirect_uri=${oidcConfig.redirect_uri}`;
    //window.location.href = "https://demo-accounts.licentio.com/login?view_type=login&request_id=a01c41ae-2b30-427e-9575-62a6f6223ff9&client_id=a744f001-d79f-4832-8483-398678e17014&flow_id=06a08217-5b8e-4d8a-bbcb-872baccf0a34"
  }, []);

  return (
    <div>
      Redirecting to OIDC provider for login...
    </div>
  );
};

export default Login;
