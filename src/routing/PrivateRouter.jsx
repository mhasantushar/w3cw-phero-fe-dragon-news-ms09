import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import ShowLoadingHash from "../compos/ShowLoadingHash";

const PrivateRouter = ({ children }) => {
  const { loggedInUser, pageIsLoading } = useContext(AuthContext);
  // console.log(loggedInUser);

  const intendedLocation = useLocation();
  // console.log (intendedLocation);

  if (pageIsLoading) {
    return <ShowLoadingHash />;
  }

  if (!loggedInUser) {
    // return <Navigate to="/auth/login" />
    return <Navigate to="/auth/login" state={intendedLocation.pathname} />;
  }

  return children;
};

export default PrivateRouter;
