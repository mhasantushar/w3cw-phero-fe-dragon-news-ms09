import React from "react";
import { MdArrowCircleLeft } from "react-icons/md";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="p-6 border shadow-md border-base-200 rounded-md">
      <figure className="mb-6 overflow-hidden rounded-md size-fit">
        <img
          className="h-full w-full object-cover"
          src={news.image_url}
          alt={news.title}
        />
      </figure>
      
      <h1 className="text-2xl mb-6">{news.title}</h1>
      <p className="mb-8">{news.details}</p>
      <Link
        to={`/category/${news.category_id}`}
        className="btn btn-secondary btn-soft"
      >
        {" "}
        <MdArrowCircleLeft />
        All News in this Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
