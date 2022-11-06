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
    // script10.src = "/js/styleSwitcher.js";
    // script10.async = false;
    // document.body.appendChild(script10);
  }, []);
  return (
    <>
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
