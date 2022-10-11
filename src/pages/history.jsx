import React, { useEffect } from "react";

import docenteAlumno from "images/historypage/docente-alumno.jpg";
import joseMariaVelaz from "images/historypage/josemariavelaz.png";
import alumnos from "images/historypage/alumnos.jpg";

import Image from "next/image";

const History = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {
      accordion: false,
      outDuration: 600,
    });
  }, []);

  return (
    <>
      <main className="history">
        <div className="layout-background"></div>
        <h2 className="big-title__red">Historia</h2>
        <div className="row">
          <div className="col s12 l8">
            <div className="information__container-info">
              <h3 className="small-title__red">
                Fe y Alegría: 65 años al servicio del pueblo venezolano
              </h3>
              <p>
                Fe y Alegría es un{" "}
                <strong>
                  Movimiento de Educación Popular y Promoción Social
                </strong>{" "}
                , nacido el <strong>5 de marzo de 1955</strong> en el 23 de
                Enero de Caracas, Venezuela. Hoy está presente en 22 países de
                América Latina, África y Europa: Argentina, Bolivia, Brasil,
                Colombia, Costa Rica, Chad, Chile, Ecuador, El Salvador, España,
                Italia, Guatemala, Haití, Honduras, Madagascar, Nicaragua,
                Panamá, Paraguay, Perú, República Dominicana, Uruguay y
                Venezuela. Allí atiende a más de 1.500.000 niños,niñas, jóvenes
                y adultos de sectores urbanos, rurales e indígenas con una gran
                variedad de programas educativos, comunitarios y de capacitación
                humana y laboral.
              </p>
              <div className="collapsible" id="collapsible-info">
                <li>
                  <div className="collapsible-header">
                    <h3 className="collapsible-title">
                      <i className="material-icons icon-red">arrow_drop_down</i>
                      Leer Mas
                    </h3>
                  </div>
                  <div className="collapsible-body">
                    <p>
                      En Venezuela, Fe y Alegría tiene un total de 176 escuelas,
                      5 Institutos Universitarios, 23 emisoras de radio
                      conectadas en red, 75 Centros de Capacitación Laboral y un
                      centro de formación, investigación y producción, que
                      coordina las políticas de formación de miles de
                      educadores, no sólo de Fe y Alegría, sino de otras
                      escuelas, produce teoría pedagógica en contextos de
                      marginalidad. De las 176 escuelas, 83 ofrecen educación
                      técnica, pues entre las actuales prioridades de Fe y
                      Alegría está el potenciarlas para desarrollar las
                      competencias laborales y fortalecer su capacidad para
                      resolver problemas en sus contextos de desempeño.
                    </p>
                  </div>
                </li>
              </div>
            </div>
          </div>
          <div className="col s12 l4 history__container-img">
            <Image src={docenteAlumno} alt="Foto Docente con su alumno" />
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 history__container-img">
            <Image src={joseMariaVelaz} alt="Fundador de Fe y Alegría" />
          </div>
          <div className="col s12 l8">
            <div className="information__container-info">
              <h3 className="small-title__red">
                Fe y Alegría nació de un acto de generosidad
              </h3>
              <p>
                Cuando el Padre Jesuita José María Vélaz, fundador de Fe y
                Alegría, terminó su rectorado de seis años en el Colegio San
                José de Mérida, le encargaron de la atención espiritual de los
                jóvenes de la recién fundada Universidad Católica de Caracas.
                Como la mayoría de los estudiantes pertenecían a familias
                acomodadas, el Padre Vélaz quería que conocieran la otra
                Venezuela donde apenas sobrevivían penosamente millones de
                hermanos para que, al contacto con la miseria, fraguaran una
                profunda sensibilidad social que les llevara a comprometer su fe
                y sus vidas en el servicio a los más necesitados.
              </p>
              <div className="collapsible" id="collapsible-info">
                <li>
                  <div className="collapsible-header">
                    <h3 className="collapsible-title">
                      <i className="material-icons icon-red">arrow_drop_down</i>
                      Leer Mas
                    </h3>
                  </div>
                  <div className="collapsible-body">
                    <p>
                      En las visitas a lo que hoy conocemos como el 23 de Enero
                      de Caracas, el padre y los universitarios preparaban a los
                      niños para que hicieran su primera comunión. Al acercarse
                      a la gente y ver cómo vivían, sintieron la tragedia de la
                      marginación y comprendieron que para superar tantos
                      problemas que tenían, era necesaria una educación para que
                      pudieran ejercer la ciudadanía de un modo digno. Educación
                      para transformar las vidas y poder contribuir a la
                      transformación del país como sujetos activos y
                      productivos.
                      <br />
                      <br />
                      La primera escuela de Fe y Alegría nació de un acto de
                      rotunda generosidad. El obrero Abrahán Reyes había
                      brindado la sala de su casa para que se celebrara en ella
                      la primera comunión de setenta niños y niñas, fruto de la
                      labor catequética de los universitarios. En la homilía, el
                      padre Vélaz habló de la necesidad de profundizar la labor
                      formativa mediante un proceso de educación sistemática.
                      Para ello, necesitaban construir una escuela, donde todos
                      esos niños y niñas pudieran salir de la ignorancia. Al
                      terminar la misa, uno de los asistentes, el obrero Abrahán
                      Reyes, se acercó al padre y le dijo: “Si usted quiere
                      hacer una escuela, ponga las maestras que yo le regalo
                      este local”.
                      <br />
                      <br />
                      Siete largos años le había llevado a Abrahán y su esposa
                      Patricia construir la casa, ladrillo a ladrillo, como las
                      construyen los pobres. Cuando lograban reunir cien
                      bolívares, corrían a comprar cemento, bloques o cabillas,
                      no fuera que se les presentara algún percance y tuvieran
                      que gastar el dinero. Poco a poco, como un árbol de vida,
                      la casa de Abrahán y de Patricia fue creciendo de sus
                      manos y sus sueños. No había agua donde estaban
                      construyendo y tenían que carretearla en latas de manteca
                      que cargaban sobre sus cabezas desde el pie del cerro. Y
                      cuando todavía estaba fresco el olor a cemento y no se
                      habían acostumbrado al milagro de verla terminada, se la
                      regalaron al Padre Vélaz para que iniciara en ella su
                      sueño de sembrar los barrios más pobres con escuelas: “Si
                      me quedo con ella –trataba de argumentar Abrahán ante el
                      asombro del Padre- será la casa de mi mujer y los ocho
                      hijos. Pero si la convertimos en escuela, será la casa de
                      todos los niños del barrio”.
                      <br />
                      <br />
                      El gesto de Abrahán conmovió profundamente al Padre Vélaz
                      y le mostró el camino a seguir. Si había personas capaces
                      de darlo todo, sí era posible realizar el sueño de llenar
                      de escuelas los barrios más empobrecidos. El iría de
                      corazón en corazón, sembrando sueños y la audacia y el
                      valor para convertirlos en realidades. Levantarían con
                      fuerza la bandera de la educación de los más pobres y
                      muchas personas generosas correrían a militar bajo ella.
                    </p>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l8">
            <div className="information__container-info">
              <h3 className="small-title__red">
                Fe y Alegría de la "chispa" al "incendio"
              </h3>
              <p>
                <strong>
                  <i>“Escuela: Se admiten niños varones”</i>
                </strong>
                , decía el tosco cartel que pusieron al día siguiente en la
                puerta del rancho de Abrahán. Y empezaron a llegar ríos de
                niños. Las clases comenzaron sin pupitres, sin pizarrones, sin
                mesas, con cien niños y adolescentes sentados en el piso. Como
                eran muchos para una sola maestra, dividieron la sala con unas
                tablas en dos aulas. Diana y Carmen, dos muchachas del barrio de
                apenas quince años y con sólo el sexto grado de primaria, fueron
                las primeras maestras. No sabían cuándo ni cuánto les iban a
                pagar. Así nació Fe y Alegría. Era el cinco de marzo de 1955.
              </p>
              <div className="collapsible" id="collapsible-info">
                <li>
                  <div className="collapsible-header">
                    <h3 className="collapsible-title">
                      <i className="material-icons icon-red">arrow_drop_down</i>
                      Leer Mas
                    </h3>
                  </div>
                  <div className="collapsible-body">
                    <p>
                      La segunda escuela, llamada Rosa Molas, nació en Ciudad
                      Tablitas, un barrio muy pobre también en Catia, que lo
                      llamaron así porque todos los ranchitos habían sido
                      construidos con tablitas de cajas de embalaje. El Padre
                      Vélaz consiguió en comodato unos galpones muy rústicos del
                      Banco Obrero y con un donativo de seis mil bolívares de un
                      empresario generoso compraron cien pupitres y acomodaron
                      los galpones para atender en dos turnos a doscientos
                      alumnos. Algunos de ellos rondaban ya los veinte años de
                      edad, ninguno tenía zapatos, la mayoría usaba cotizas y
                      otros acudían descalzos a la escuela. Como algunos se
                      desmayaban por el hambre porque acudían a clases sin haber
                      comido nada, las maestras se las ingeniaron para
                      implementar muy pronto el programa del vaso de leche
                      escolar.
                      <br />
                      <br /> Al otro extremo de Caracas, un año después de la
                      primera, nació la tercera escuela, la Inmaculada, en un
                      terreno inhóspito de Barrio Unión en Petare. La obra
                      empezó a crecer luego hacia los suburbios de otras
                      ciudades del país, con el apoyo de diversas congregaciones
                      religiosas y laicos comprometidos con el Movimiento. Ya
                      para 1963, además de 10 colegios en Caracas, funcionaban
                      colegios en Maracaibo, Maracay, Valencia, Pto. La Cruz,
                      Cumaná, Maturín, Puerto Cabello, Barquisimeto, Lagunillas,
                      Carora, Punto Fijo y Puerto Ordaz. En 1964 comienza el
                      proceso de expansión hacia países de América Latina. El
                      lema del Movimiento en esos primeros años era: “Fe y
                      Alegría comienza donde termina el asfalto”.
                    </p>
                  </div>
                </li>
              </div>
            </div>
          </div>
          <div className="col s12 l4 history__container-img">
            <Image src={alumnos} alt="Alumnos en Clase" />
          </div>
        </div>
        <div className="row">
          <div className="s12 m8 l6 center">
            <h2 className="center medium-title__red">
              ”Fe y Alegría comienza donde termina el asfalto”… más de 60 años
              de pasión por la educación.
            </h2>

            <iframe
              className="history-frame"
              src="https://www.youtube.com/embed/hJKzwtPQNQw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>

            {/* <video controls preoload="auto">
            <source src="./video.m4v#t=10,60" />
            <source src="./video.mp4#t=10,60" />
            <source src="./video.gif" />
          </video> */}
          </div>
        </div>
      </main>
      <style jsx>{`
        #collapsible-info {
          border: 0;
          box-shadow: 0 0 0, 0 0 0 0, 0 0 0 0;
          margin: 0;
        }
        #collapsible-info .collapsible-header {
          border-bottom: 0;
          padding: 0;
          display: inline-block;
          width: 100%;
        }
        #collapsible-info .collapsible-body {
          padding: 0;
          padding-bottom: 1rem;
          border-top: 1px solid #ddd;
        }
        .layout-background {
          margin-top: -15px;
          margin-left: -30px;
          margin-right: -30px;
          min-height: 175px;
          max-width: 100vw;
          /* background-image: url("../../public/feyalegria-logo.png"); */
          background-size: cover;
          background-position: center;
        }
        .history {
          padding: 15px 30px;
        }
        .history p,
        li {
          font-size: 1.1rem;
          line-height: 30px;
          text-align: justify;
          color: #3a3a3a;
          font-weight: normal;
        }
        .history__container-img {
          display: flex;
          justify-content: center;
        }
        .history__container-img img {
          width: 300px;
          height: auto;
          margin-bottom: 20px;
          align-self: center;
        }
        .collapsible-title {
          font-size: 1.4rem;
          line-height: 50px;
          background-color: #f3f3f3;
          color: var(--dark-red);
          margin: 0 0 10px 0;
        }
        .collapsible li {
          list-style: none;
        }
        @media (min-width: 320px) {
          .history-frame {
            width: 250px;
            height: 180px;
          }
        }
        @media (min-width: 375px) {
          .history-frame {
            width: 300px;
            height: 200px;
          }
        }
        /* CSS pantalla 768px o superior */
        @media (min-width: 768px) {
          .history-frame {
            width: 450px;
            height: 300px;
          }
        }
        @media (min-width: 1024px) {
          .history-frame {
            width: 600px;
            height: 400px;
          }
        }
        @media (min-width: 1444px) {
          .history-frame {
            width: 850px;
            height: 600px;
          }
        }
      `}</style>
    </>
  );
};

export default History;
