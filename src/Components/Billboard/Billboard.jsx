import axios from "axios";
import React, { useEffect, useState } from "react";
import endPoints from "utils/endpoints";

import CarouselArticle from "../CarouselArticle/CarouselArticle";
// import M from "materialize-css";

const BillBoard = ({ posts }) => {
  console.log(posts);
  return (
    <section id="billboard">
      {/* <div id="cincopa_d0220b">...</div> */}
      <div className="carousel carousel-slider center">
        <div className="carousel-background"></div>

        {posts?.map((post) => (
          <CarouselArticle
            key={post?.id}
            img={post?.image}
            title={post?.title}
            description={post?.info}
            link="#!"
          />
        ))}
        <ul className="indicators"></ul>
      </div>
    </section>
  );
};

export default BillBoard;
