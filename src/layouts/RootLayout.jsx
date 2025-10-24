import React from "react";
import { Outlet, useNavigation } from "react-router";
import RootHeader from "../compos/headers/RootHeader";
import LatestNewsBar from "../compos/headers/LatestNewsBar";
import RootNavigBar from "../compos/headers/RootNavigBar";
import HomeLeftPane from "../compos/HomeLeftPane";
import HomeRightPane from "../compos/HomeRightPane";
import ShowLoadingDot from "../compos/ShowLoadingDot";

const RootLayout = () => {
  const { pageState } = useNavigation();

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

      <main className="w-11/12 mx-auto my-16 grid grid-cols-12 gap-4">
        <aside className="col-span-2 sticky top-10 h-fit">
          <HomeLeftPane />
        </aside>

        <section className="main-pane col-span-7">
          {pageState == "loading" ? <ShowLoadingDot /> : <Outlet />}
        </section>

        <aside className="col-span-3  sticky top-10 h-fit">
          <HomeRightPane />
        </aside>
      </main>
    </div>
  );
};

export default RootLayout;
