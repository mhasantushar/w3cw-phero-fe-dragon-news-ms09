import React, { useEffect, useState } from "react";
import RootHeader from "../compos/headers/RootHeader";
import HomeRightPane from "../compos/HomeRightPane";
import NewsDetailsCard from "../compos/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetailsPage = () => {
  const newsData = useLoaderData();
  const { nid } = useParams();
  // console.log ({nid, newsData})

  const [clickedNews, setClickedNews] = useState({});

  useEffect(() => {
    const newsDetails = newsData.find((news) => news.id == nid);
    setClickedNews(newsDetails);
  }, [newsData, nid]);
  // console.log(clickedNews);

  return (
    <div>
      <header>
        <RootHeader />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 mt-12 gap-4">
        <section className="col-span-9">
          <h2 className="font-semibold text-2xl text-accent py-4">
            Dragon News
          </h2>
          <NewsDetailsCard news={clickedNews} />
        </section>
        <aside className="col-span-3">
          <HomeRightPane />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetailsPage;
