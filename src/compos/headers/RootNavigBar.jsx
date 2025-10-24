import React, { useContext } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import logoUser from "../../assets/user.png";
import AuthContext from "../../contexts/AuthContext";
import { BarLoader } from "react-spinners";

const RootNavigBar = () => {
  const {
    loggedInUser,
    setLoggedInUser,
    doSignOut,
    pageIsLoading,
    setPageIsLoading,
  } = useContext(AuthContext);
  // console.log(loggedInUser);
  // console.log(pageIsLoading);

  const handleUserSignOut = () => {
    doSignOut()
      .then(() => {
        toast.success("User signed off.");
        setLoggedInUser(null);
      })
      .catch((error) => {
        toast.error(`Sign out attempt failed! ${error.message}.`);
      });
    setPageIsLoading(false);
  };

  return (
    <div className="flex justify-between items-center gap-4">
      {pageIsLoading ? (
        <BarLoader color={"#D72050"} />
      ) : (
        <div className="text-sm font-semibold text-secondary ">
          {loggedInUser
            ? `Welcome, ${loggedInUser.name || loggedInUser.email}!`
            : "Please log in"}
          {/* {loggedInUser && `Welcome, ${loggedInUser.name || loggedInUser.email}!`} */}
        </div>
      )}

      <nav className="nav-menu flex gap-8 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </nav>

      {pageIsLoading ? (
        <BarLoader color={"#403F3F"} />
      ) : (
        <div className="login-btn flex gap-4">
          <figure>
            <img src={logoUser} alt="User Icon" />
          </figure>
          {loggedInUser ? (
            <button
              onClick={handleUserSignOut}
              className="btn btn-primary px-8"
            >
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary px-8">
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default RootNavigBar;
