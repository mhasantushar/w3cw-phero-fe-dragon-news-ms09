import React from "react";
import { NavLink } from "react-router";
import logoUser from "../assets/user.png";

const RootNavigBar = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="blank"></div>

      <nav className="nav-menu flex gap-8 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </nav>

      <div className="login-btn flex gap-4">
        <figure>
          <img src={logoUser} alt="User Icon" />
        </figure>
        <button className="btn btn-primary px-8">Login</button>
      </div>
    </div>
  );
};

export default RootNavigBar;
