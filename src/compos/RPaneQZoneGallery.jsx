import React from "react";
import imgSwimming from '../assets/swimming.png'
import imgClass from '../assets/class.png'
import imgPlayGround from '../assets/playground.png'

const RPaneQZoneGallery = () => {
  return (
    <div className="bg-accent/10 mb-8 mt-16">
      <h2 className="font-semibold text-2xl text-accent p-4">
        Q-Zone
      </h2>
      <div className="space-y-6">
        <figure>
          <img src={imgSwimming} alt="Swimming" />
        </figure>
        <figure>
          <img src={imgClass} alt="Class" />
        </figure>
        <figure>
          <img src={imgPlayGround} alt="Play Ground" />
        </figure>
      </div>
    </div>
  );
};

export default RPaneQZoneGallery;
