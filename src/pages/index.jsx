import axios from "axios";
import Head from "next/head";
import React from "react";
import endPoints from "utils/endpoints";

import BillBoard from "../Components/BillBoard/BillBoard";
import Map from "hooks/useMap";
import credentials from "utils/credentials";
import "../styles/juanpablo.css";

const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

const Home = ({ data }) => {
  const { news } = data;

  return (
    <>
      <Head>
        <title>Fe y Alegria San Francisco</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className="row">
          <div className="col l12 s12">
            <BillBoard posts={news} />
          </div>
        </div>
        <center>
          <h2 class="mainphrase">"LA EDUCACIÓN EMPIEZA EN EL CORAZÓN"</h2>
        </center>
        <div className="">
          <div class="row">
            <div class="col l4 s12">
              <div class="card cardmedio">
                <div class="card-image">
                  <img src="images/card/kids.jpg" alt="" />
                </div>
                <div class="card-content">
                  <span class="card-title">PREESCOLAR Y PRIMARIA</span>
                  <p>
                    El Colegio San Francisco mantiene el sentido de la educación
                    salida del corazón. Cada uno de los docentes de la
                    institución se mantiene comprometido con enseñar desde el
                    amor y el respeto que caracteriza a Fe y Alegría.
                  </p>
                </div>
              </div>
            </div>

            <div class="col l4 s12">
              <div class="card cardmedio">
                <div class="card-image">
                  <img src="images/card/compu.jpg" alt="" />
                </div>
                <div class="card-content">
                  <span class="card-title">LABORATORIO DE COMPUTACIÓN</span>
                  <p>
                    La institución está comprometida con la enseñanza
                    tecnologíca. Contamos con un laboratorio de computación
                    donde se promueve la enseñanza de nuevas herramienta.
                  </p>
                </div>
              </div>
            </div>

            <div class="col l4 s12">
              <div class="card cardmedio">
                <div class="card-image">
                  <img src="images/card/sanfranciscodeasis.jpg" alt="" />
                </div>
                <div class="card-content">
                  <span class="card-title">EL PADRE FRANCISCO</span>
                  <p>
                    Ayudar a quien lo necesite sin esperar nada a cambio es la
                    mayor expresión de humanidad que representa la enseñanza
                    impartida por nuestro padre San Francisco de Asis
                  </p>
                </div>
              </div>
            </div>
            <div class="col s12 radiocolum">
              <hr />
              <center>
                <div class="wpb_animate_when_almost_visible wpb_left-to-right left-to-right wpb_column vc_column_container vc_col-sm-4 wpb_start_animation radiocolum">
                  <h2 class="radiotitle">
                    ¡Mantente al día donde quiera que estes!
                  </h2>
                  <div class="vc_column-inner vc_custom_1653683576324">
                    <div class="wpb_wrapper">
                      <div class="wpb_single_image wpb_content_element vc_align_center  vc_custom_1670033101888 radio">
                        <figure class="wpb_wrapper vc_figure">
                          <div class="vc_single_image-wrapper   vc_box_border_grey">
                            <img
                              width="362"
                              height="150"
                              src="http://radios.feyalegrianoticias.com/wp-content/uploads/2022/12/Streaming_Barquisimeto.png"
                              class="vc_single_image-img attachment-full"
                              alt="radio fe y alegria"
                              srcset="http://radios.feyalegrianoticias.com/wp-content/uploads/2022/12/Streaming_Barquisimeto.png 362w, http://radios.feyalegrianoticias.com/wp-content/uploads/2022/12/Streaming_Barquisimeto-300x124.png 300w"
                              sizes="(max-width: 362px) 100vw, 362px"
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                    <a
                      class="waves-effect waves-light btn-large btnred"
                      href="http://radios.feyalegrianoticias.com/barquisimeto-2/"
                    >
                      <i class="material-icons left">play_arrow</i>Escuchar
                    </a>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
        <div className="row">
          <hr />
          <center>
            <h4 class="mapphrase">UBICANOS</h4>
          </center>
          <div className="col l12 s12 m12 mapmain">
            <Map
              class="mapmain"
              googleMapURL={mapUrl}
              containerElement={<div style={{ height: "600px" }}></div>}
              mapElement={<div style={{ height: "100%" }}></div>}
              loadingElement={<p>Cargando...</p>}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const response = await axios.get(endPoints.news.getAllNews);
    const news = await JSON.parse(JSON.stringify(response.data));

    return {
      props: {
        data: { news },
      },
    };
  } catch (error) {
    return { props: { data: error.message } };
  }
}
