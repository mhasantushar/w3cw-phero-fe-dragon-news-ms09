import React from "react";
import Marquee from "react-fast-marquee";

const LatestNewsBar = () => {
  return (
    <div className="flex gap-6 items-center p-4 bg-base-200">
      <button className="btn btn-secondary text-lg font-normal">Latest</button>

      <Marquee className="flex gap-12" pauseOnHover={true} speed={40}>
        <p className="text-lg font-semibold text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis commodi quia est voluptatibus cumque omnis!
        </p>
        
        <p className="text-lg font-semibold text-primary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, rerum officia? Vel voluptas iure et. Soluta, pariatur dolore. Ipsum, error!
        </p>
        
        <p className="text-lg font-semibold text-primary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut tempore voluptatem ex!
        </p>
        
      </Marquee>
    </div>
  );
};

export default LatestNewsBar;
