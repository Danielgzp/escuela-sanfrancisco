import React from "react";
import Link from "next/link";

const CarouselArticle = ({ img, title, description, link, date }) => {
  return (
    <article className="carousel-item z-depth-3 center">
      <div className="carousel-item__image">
        <img src={img} alt={title} />
      </div>
      <div className="carousel-item__info">
        <h4>{title}</h4>
        <p>{description}</p>

        <span className="right bottom">{date}</span>
      </div>
    </article>
  );
};

export default CarouselArticle;
