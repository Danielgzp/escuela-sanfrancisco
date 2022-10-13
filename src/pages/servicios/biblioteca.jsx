import React from "react";

import Image from "next/image";

const Biblioteca = () => {
  return (
    <>
      <main>
        <div className="layout-biblioteca"></div>
        <section className="biblioteca">
          {/* <img src={title} alt="" className="title-biblioteca" /> */}

          <h2 className="center">BIBLIOTECA FE Y ALEGRIA SAN FRANCISCO</h2>

          <div className="row">
            <div className="col s12 l7 biblioteca-container">
              <h3 className="center">¿Qué servicios prestamos?</h3>
              <ul>
                <li>
                  <i className="material-icons">check</i> Préstamo para Docentes
                </li>
                <li>
                  <i className="material-icons">check</i>Estudiantes
                </li>
                <li>
                  <i className="material-icons">check</i>exalumnos y personal en
                  general
                </li>
                <li>
                  <i className="material-icons">check</i>exalumnos y personal
                </li>
                <li>
                  <i className="material-icons">check</i>Caja Viajera
                </li>
                <li>
                  <i className="material-icons">check</i>
                  Sala Audio Visual
                </li>
                <li>
                  <i className="material-icons">check</i>Espacio para
                  Formaciones
                </li>
              </ul>
            </div>
            <div className="col s12 l5 biblioteca-container">
              <h4 className="center">
                También contamos con:{" "}
                <strong>Sala de consultas bibliográfica</strong> y{" "}
                <strong> préstamo de material didáctico</strong>
              </h4>
              <img
                src={"/images/bibliotecapage/fyabiblio.jpg"}
                alt="Imagen de la Biblioteca"
                className="picture-biblio"
              />
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .layout-biblioteca {
          min-height: 225px;
          max-width: 100vw;
          /* background-image: url("../../images/fondoBiblioteca.jpg"); */
          background-size: cover;
        }
        .biblioteca {
          margin: 30px 0;
        }
        .biblioteca .z-depth-2 {
          width: 100%;
        }
        .biblioteca h2 {
          font: 700 4em/1 "Oswald", sans-serif;
          letter-spacing: 0;
          padding: 0.25em 0 0.325em;
          display: block;
          margin: 0 auto;
          text-shadow: 0 0 80px rgba(255, 1, 1, 0.5);
          color: rgb(0, 0, 0);

          /* Clip Background Image */
        }
        .biblioteca-container {
        }
        .biblioteca-container img {
          width: 100%;
        }
        .biblioteca-container h4 {
          font-size: 1.5rem;
          font-weight: 500;
          font-family: "Fira Sans";
        }
        .biblioteca-container ul {
          padding: 10px 25px;
        }
        .biblioteca-container ul li {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 10px 5px;
          font-family: "Fira Sans";
          color: black;
        }
        .biblioteca-container ul li i {
          margin-right: 15px;
        }
        .title-biblioteca {
          width: 100%;
          height: 100px;
        }
        .biblioteca-container h3 {
          font-size: 2.1rem;
          font-weight: bold;
          letter-spacing: 1px;
          font-family: "Fira Sans";
          color: var(--dark-red2);
          padding: 0 3px;
        }
        /* Animate Background Image */

        @media only screen and (min-width: 993px) {
          .biblioteca-container ul {
            padding: 5px 30px !important;
          }
          .biblioteca-container {
            padding: 20px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Biblioteca;
