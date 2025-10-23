import React from "react";
import logoHeader from "../../assets/logo.png";
import { format } from "date-fns";

const RootHeader = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-12">
      <figure>
        <img className="w-118" src={logoHeader} alt="Dragon News Logo" />
      </figure>
      <p className="mt-6 mb-4 text-lg text-accent">
        Journalism Without Fear or Favour
      </p>
      <h3 className="text-2xl font-medium text-primary">
        {format(new Date(), "EEEE")},{" "}
        <span className="text-primary/80">
          {format(new Date(), "MMMM MM, yyyy")}
        </span>
      </h3>
      <p></p>
    </div>
  );
};

export default RootHeader;
