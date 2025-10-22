import React from "react";
import { Outlet } from "react-router";
import RootHeader from "../compos/RootHeader";
import LatestNewsBar from "../compos/LatestNewsBar";
import RootNavigBar from "../compos/RootNavigBar";
import HomeLeftPane from "../compos/HomeLeftPane";
import HomeRightPane from "../compos/HomeRightPane";

const RootLayout = () => {
  return (
    <div>
      <header>
        <RootHeader />
        <section className="w-11/12 mx-auto my-8 ">
          <LatestNewsBar />
        </section>
        <nav className="w-11/12 mx-auto my-8">
          <RootNavigBar />
        </nav>
      </header>

      <main className="w-11/12 mx-auto my-16 grid grid-cols-12">
        <aside className="col-span-3">
          <HomeLeftPane />
        </aside>

        <section className="main-pane col-span-6">
          <Outlet />
        </section>

        <aside className="col-span-3">
          <HomeRightPane />
        </aside>
      </main>
    </div>
  );
};

export default RootLayout;
