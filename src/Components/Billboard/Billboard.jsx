import axios from "axios";
import React, { useEffect, useState } from "react";
import endPoints from "utils/endpoints";

import CarouselArticle from "../CarouselArticle/CarouselArticle";
// import M from "materialize-css";

const BillBoard = ({ posts }) => {
  console.log(posts);
  useEffect(() => {
    var elems = document.querySelector(".carousel");
    var instances = M.Carousel.init(elems, {
      duration: 600,
      indicators: true,
    });
  }, []);
  return (
    <section id="billboard">
      {/* <div id="cincopa_d0220b">...</div> */}
      <div className="carousel carousel-slider center">
        <div className="carousel-background"></div>
        {posts.length !== 0 ? (
          <>
            {posts?.map((post) => (
              <CarouselArticle
                key={post?.id}
                img={post?.image}
                title={post?.title}
                description={post?.info}
                link="#!"
              />
            ))}
          </>
        ) : (
          <>
            <CarouselArticle
              img={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhFFAz7mkMh5FY3-rU48EiP02iIduCxO80A&usqp=CAU"
              }
              title={"No hay noticias"}
              description={"No hay noticias"}
              link="#!"
            />
          </>
        )}

        <ul className="indicators"></ul>
      </div>
    </section>
  );
};

export default BillBoard;
