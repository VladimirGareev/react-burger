import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ onlyUnAuth, children, ...props }) => {
  const location = useLocation();

  const user = useSelector((state) => state.user);

  if (onlyUnAuth && user.email) {
    const from = location.state?.from || { from: { pathname: "/" } };
    return <Redirect to={from.pathname} />;
  }

  if (!onlyUnAuth && !user.email) {
    return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
  }

  return <Route {...props}> {children} </Route>;
};
