import React from "react";
import { Route, Navigate } from "react-router-dom";

const RequireAuth = (props: any) => {
  const checkLogin = () => {
    const token = localStorage.getItem("auth");
    return token;
  };

  return <>{checkLogin() ? props.children : <Navigate to="/login" />}</>;
};
export default RequireAuth;
