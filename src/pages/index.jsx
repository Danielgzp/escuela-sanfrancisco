import axios from "axios";
import Head from "next/head";
import React, { useEffect } from "react";
import endPoints from "utils/endpoints";

import BillBoard from "../Components/BillBoard/BillBoard";
// import HomeInfo from "../Components/HomeInfo/HomeInfo";

// import Map from "hooks/Map";
// import credentials from "../credentials";

// const llave = "AIzaSyCfnUmE4wnjXKHzK5SRxo2hI3Ppi-FWrQ4";

// const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${llave}`;

const Home = ({ data }) => {
  const { news } = data;

  useEffect(() => {
    var elems = document.querySelector(".carousel");
    var instances = M.Carousel.init(elems, {
      duration: 600,
      indicators: true,
    });
  }, []);

  // console.log(data)
  return (
    <>
      <Head>
        <title>Fe y Alegria San Francisco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="row">
          <div className="col l12 s12">
            <BillBoard posts={news} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col m12 l12 s12">{/* <HomeInfo /> */}</div>
            {/* <div className="col m4 l3 s12">
          <News />
        </div> */}
          </div>
          <div className="row">
            <div className="col l12 s12">
              <h2>Pago</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col l12 s12 m12">
            {/* <Map
              googleMapURL={mapUrl}
              containerElement={<div style={{ height: "600px" }}></div>}
              mapElement={<div style={{ height: "100%" }}></div>}
              loadingElement={<p>Cargando...</p>}
            /> */}
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
