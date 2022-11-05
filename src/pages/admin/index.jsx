import ContentBody from "NewComponents/ContentBody.jsx";
import Menu from "NewComponents/Menu";
import NavHeader from "NewComponents/NavHeader";
import NewFooter from "NewComponents/NewFooter";
import NewHeader from "NewComponents/NewHeader";
import PreLoader from "NewComponents/PreLoader";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import styles from "./admin.module.css";

const AdminDashboard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");
    const script4 = document.createElement("script");
    const script5 = document.createElement("script");
    const script6 = document.createElement("script");
    const script7 = document.createElement("script");
    const script8 = document.createElement("script");
    const script9 = document.createElement("script");
    const script10 = document.createElement("script");

    script.src = "/vendor/global/global.min.js";
    script.async = false;
    document.body.appendChild(script);
    script2.src = "/vendor/bootstrap-select/dist/js/bootstrap-select.min.js";
    script2.async = false;
    document.body.appendChild(script2);
    script3.src = "/js/custom.min.js";
    script3.async = false;
    document.body.appendChild(script3);
    script4.src = "/vendor/raphael/raphael.min.js";
    script4.async = false;
    document.body.appendChild(script4);
    script5.src = "/vendor/morris/morris.min.js";
    script5.async = false;
    document.body.appendChild(script5);
    script6.src = "/vendor/peity/jquery.peity.min.js";
    script6.async = false;
    document.body.appendChild(script6);
    script7.src = "/js/dashboard/dashboard-2.js";
    script7.async = false;
    document.body.appendChild(script7);
    script8.src = "/vendor/svganimation/vivus.min.js";
    script8.async = false;
    document.body.appendChild(script8);
    script9.src = "/vendor/svganimation/svg.animation.js";
    script9.async = false;
    document.body.appendChild(script9);
    // script10.src = "/js/styleSwitcher.js";
    // script10.async = false;
    // document.body.appendChild(script10);
  }, []);
  return (
    <>
      <PreLoader />
      <div id="main-wrapper">
        <NavHeader />
        <NewHeader />
        <Menu />
        <ContentBody />
        {/* <section className="full-box dashboard-contentPage">
         
          <div className="container-fluid">
            <div className="page-header">
              <h1 className="text-titles">
                Administración<small> Usuarios registrados:</small>
              </h1>
            </div>
          </div>
          <div
            className="full-box text-center"
            style={{ padding: "30px 10px" }}
          >
            
            <AdminContainerArticles
              link={"/admin/addnewadmin"}
              registered={"7"}
              title={"Administradores"}
              icon={"zmdi zmdi-account"}
            />
            <AdminContainerArticles
              link={"/admin/addnewteacher"}
              registered={"10"}
              title={"Docentes"}
              icon={"zmdi zmdi-male-alt"}
            />
            <AdminContainerArticles
              link={"/admin/addnewstudent"}
              registered={"70"}
              title={"Estudiantes"}
              icon={"zmdi zmdi-face"}
            />
          </div>
        </section> */}

        <NewFooter />
      </div>
      {/* <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        async
      /> */}
      {/* <script src="/vendor/global/global.min.js" async /> */}
      {/* <script
        src="/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"
        async
      /> */}

      {/* <script src="/vendor/raphael/raphael.min.js" async />
      <script src="/vendor/morris/morris.min.js" async /> */}
      {/* <script src="/js/dashboard/dashboard-2.js" defer />
      <script src="/vendor/svganimation/vivus.min.js" defer />
      <script src="/vendor/svganimation/svg.animation.js" defer />
      <script src="/js/styleSwitcher.js" defer />  */}
    </>
  );
};

export default AdminDashboard;
