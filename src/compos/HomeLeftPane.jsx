import React, { Suspense } from "react";
import LPaneNewsCategs from "./LPaneNewsCategs";
import { BarLoader } from "react-spinners";

const HomeLeftPane = () => {
  return (
    <div>
      <Suspense  fallback={<BarLoader />}>
        <LPaneNewsCategs />
      </Suspense>
    </div>
  );
};

export default HomeLeftPane;
