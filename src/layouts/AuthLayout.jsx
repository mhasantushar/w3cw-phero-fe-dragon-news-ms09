import React from "react";
import { Outlet } from "react-router";
import RootNavigBar from "../compos/headers/RootNavigBar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 py-8">
      <header>
        <nav className="w-11/12 mx-auto">
          <RootNavigBar />
        </nav>
      </header>

      <main className="w-11/12 mx-auto my-16">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
