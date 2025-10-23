import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import HomeNewsCard from "../compos/HomeNewsCard";

const CategNewsPage = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  // console.log (useParams());
  const { categId } = useParams();
  // console.log(categId);
  const newsData = useLoaderData();
  // console.log(newsData);

  useEffect(() => {
    if (categId == 0) {
      setCategoryNews(newsData);
      return;
    }

    if (categId == 1) {
      const filteredNewsData = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNewsData);
      return;
    }

    const filteredNewsData = newsData.filter(
      (news) => news.category_id == categId
    );
    setCategoryNews(filteredNewsData);
  }, [categId, newsData]);
  // console.log(categoryNews);

  return (
    <div className="mb-8">
      <h2 className="font-semibold text-2xl text-accent py-4">
        Total <span className="text-secondary">{ categoryNews.length }</span> news found
      </h2>
      <div className="flex flex-col gap-8">
        {categoryNews.map(news => <HomeNewsCard key={news.id} news={news} />)}
      </div>
    </div>
  );
};

export default CategNewsPage;
