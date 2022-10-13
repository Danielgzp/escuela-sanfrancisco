import React, { useEffect, useState } from "react";

import CarouselArticle from "../CarouselArticle/CarouselArticle";
// import M from "materialize-css";

const BillBoard = () => {
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
        <CarouselArticle
          img="/images/joropo.JPG"
          title="Solicitamos profesor de musica"
          description="El colegio San Francisco tiene las puertas abiertas a todo aquel
                docente con habilidades musicales en distintos instrumentos y
                que además cuente con el dinamismo de realizar actividades
                culturales con los alumnos de nuestra institución."
          link="#"
        />
        <CarouselArticle
          img="/images/psicopedagoga.jpg"
          title="Abrimos la Biblioteca"
          description="Ya esta abierta la nueva Biblioteca con miles de libros para los
                estudiantes"
          link="#"
        />
        <CarouselArticle
          img="/images/computacion.jpg"
          title="Computación"
          description="La escuela ha puesto a disposicion de sus estudiantes el laboratorio
          de comptuacion"
          link="#"
        />
        <ul className="indicators"></ul>
      </div>
    </section>
  );
};

export default BillBoard;
