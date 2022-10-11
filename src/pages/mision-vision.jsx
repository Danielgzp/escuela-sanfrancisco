import Image from "next/image";
import React from "react";

import childrens from "../images/misionyvision/childrens.jpg";

const MisionVision = () => {
  return (
    <>
      <main className="mision-vision">
        <div className="layout-background"></div>
        <h2 className="big-title__red">Mision y Vision</h2>
        <div className="row">
          <div className="col s12">
            <span>
              <strong>
                Somos un Movimiento de Educación Popular y Promoción Social,
                aquí está contenida la identidad y esencia de Fe y Alegría.
              </strong>
            </span>
            <p>
              Al definirse como Movimiento, quedan desbordados los límites de la
              institución. No se puede reducir Fe y Alegría meramente a una red
              de escuelas, emisoras y programas educativos. Fe y Alegría es la
              puesta en marcha de un conjunto de ideales que se siembran en
              personas y en distintas instancias sociales.
              <br /> <br />
              Ser movimiento implica la permanente desestabilización creativa,
              la relectura continua de la realidad en una actitud de comprobada
              búsqueda, con grandes dosis de audacia, de inconformidad, de
              autocrítica constante, de modo que las prácticas educativas y el
              hacer pedagógico vayan respondiendo a las exigencias y los retos
              que plantea la realidad siempre cambiante y el empobrecimiento y
              exclusión crecientes de las mayorías.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="mision-vision__container">
              <div className="center">
                <h3 className="medium-title__red">Mision</h3>
                <i className="large material-icons icon-red center">favorite</i>
                <p>
                  Ser un Movimiento de Educación Popular y Promoción Social
                  dirigido a la población empobrecida y excluida, que busca
                  construir un proyecto de transformación social, con base en
                  valores cristianos de justicia, participación y solidaridad.
                </p>
              </div>

              <div className="center">
                <h3 className="medium-title__red center">Vision</h3>
                <i className="large material-icons icon-red">remove_red_eye</i>
                <p>
                  Un mundo donde todas las personas tenga la posibilidad de
                  desarrollar plenamente sus capacidades y vivir con dignidad,
                  construyendo una sociedad justa en la que todos sus estructura
                  estén al servicio del ser humano y la trasformación de las
                  situaciones que generen la inequidad, la pobreza y la
                  exclusión.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l8">
              <div>
                <p>
                  Optamos por una pedagogía y una metodología coherentes con su
                  opción ética y política. Pedagogía para la transformación y no
                  para la adaptación, que parte del saber y de la cultura de los
                  educandos y se orienta, mediante el diálogo de saberes y la
                  negociación cultural, a empoderarlos, es decir, capacitarlos
                  con voz y con poder para hacerlos sujetos de la transformación
                  de sus condiciones de vida y de la sociedad de la exclusión.
                  La miseria y la exclusión están ligadas, en definitiva, a la
                  falta de voz y de poder de los grupos populares. Un pueblo
                  ignorante o superficialmente educado será siempre víctima de
                  liderazgos enfermizos, y vivirá en la espera de mesianismos
                  salvadores y bajo la amenaza de fanatismos que proliferarán en
                  mil formas de intolerancia
                </p>
              </div>
            </div>
            <div className="col s12 l4">
              <div className="center">
                <Image src={childrens} alt="Niños de Fe y Alegría" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .mision-vision {
          padding: 15px 30px;
        }
        .mision-vision p,
        li {
          font-size: 1.1rem;
          line-height: 30px;
          text-align: justify;
          color: #3a3a3a;
          font-weight: normal;
        }
        .mision-vision img {
          min-width: 225px;
          max-width: 275px;
          height: auto;
          margin-bottom: 20px;
          align-self: center;
        }
        .mision-vision__container {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f3f3f3;
          border-radius: 15px;
          padding: 15px;
          text-align: justify;
        }
        .mision-vision__container h4 {
          font-size: 1.4rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default MisionVision;
