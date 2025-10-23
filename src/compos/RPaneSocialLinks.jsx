import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const RPaneSocialLinks = () => {
  return (
    <div className="mb-8">
      <h2 className="font-semibold text-2xl text-accent py-4">
        Find Us On
      </h2>

      <div className="space-y-2">
        <button className="btn btn-ghost w-full justify-start">
          <FaFacebookF size={24} /> Facebook
        </button>

        <button className="btn btn-ghost w-full justify-start">
          <RiInstagramFill size={24} /> Instagram
        </button>

        <button className="btn btn-ghost w-full justify-start">
          <FaTwitter size={24} /> Twitter
        </button>
      </div>
    </div>
  );
};

export default RPaneSocialLinks;
