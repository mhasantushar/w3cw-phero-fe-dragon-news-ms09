import React from "react";
import { use } from "react";
import { NavLink } from "react-router";

const newsCategoriesURL =
  "https://raw.githubusercontent.com/mhasantushar/w3educ-bin/refs/heads/main/json/w3cw-phero-fe-dragon-news-ms09/categories.json";

const categoryPromise = fetch(newsCategoriesURL).then((resp) => resp.json());
// console.log(categoryPromise);

const LPaneNewsCategs = () => {
  const categories = use(categoryPromise);
  // console.log(categories);

  return (
    <div className="mb-8">
      <h2 className="font-semibold text-2xl text-accent py-4">
        Categories
      </h2>
      <section className="flex flex-col gap-2 text-accent ">
        {categories.map((categ) => (
          <NavLink
            to={`/category/${categ.id}`}
            className={"btn btn-ghost home-categ-list justify-start"}
            key={categ.id}
          >
            {" "}
            {categ.name}
          </NavLink>
        ))}
      </section>
    </div>
  );
};

export default LPaneNewsCategs;
