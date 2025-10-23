import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const RPaneSocialLogin = () => {
  return (
    <div className="mb-8">
      <h2 className="font-semibold text-2xl text-accent py-4">
        Login With
      </h2>

      <div className="space-y-2">
        <button className="btn btn-outline btn-secondary w-full">
          <FcGoogle size={24} /> Login with Google
        </button>

        <button className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default RPaneSocialLogin;
