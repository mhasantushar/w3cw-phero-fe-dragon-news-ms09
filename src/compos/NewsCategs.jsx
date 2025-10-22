import React from "react";

const newsCategories =
  "https://raw.githubusercontent.com/mhasantushar/w3educ-bin/refs/heads/main/json/w3cw-phero-fe-dragon-news-ms09/categories.json";
const categoryPromise = fetch(newsCategories).then((resp) => resp.json);
console.log(categoryPromise);

const NewsCategs = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-primary">All Categories</h2>
    </div>
  );
};

export default NewsCategs;
