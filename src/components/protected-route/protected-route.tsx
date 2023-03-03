import { FunctionComponent } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "../../types/store";

type TProtectedRoute = {
  onlyUnAuth?:boolean;
  children:JSX.Element|JSX.Element[]
}

export const ProtectedRoute:FunctionComponent<TProtectedRoute> = ({ onlyUnAuth, children, ...props }) => {
  const location = useLocation() as any;

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
