import React from "react";
import RPaneSocialLogin from "./RPaneSocialLogin";
import RPaneSocialLinks from "./RPaneSocialLinks";
import RPaneQZoneGallery from "./RPaneQZoneGallery";

const HomeRightPane = () => {
  return (
    <div>
      <RPaneSocialLogin />
      <RPaneSocialLinks />
      <RPaneQZoneGallery/>
    </div>
  );
};

export default HomeRightPane;
