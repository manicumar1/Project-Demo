import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Callback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const hashFragment = window.location.hash.substring(1);
    const queryParams = new URLSearchParams(hashFragment);

    if (queryParams.has("access_token")) {
      const accessToken = queryParams.get("access_token");

      localStorage.setItem("access_token", accessToken);
      const decoded = jwt_decode(accessToken);
      console.log("decoded",decoded)
      
      localStorage.setItem("name", decoded.name);
      localStorage.setItem("email", decoded.email);
      localStorage.setItem("sub", decoded.sub);
      localStorage.setItem("roles", decoded.groups[0].roles[0]);
      
      navigate("/dashboard");
    } else {
      console.error("Access token not found in the URL");
    }
  }, []);

  return (<div>Logging in...</div>);
};

export default Callback;
