import React, { useEffect, useState } from "react";

import Header from "Components/Header/Header.jsx";
import Footer from "Components/Footer/Footer.jsx";
import Loader from "Components/Loader";
import AdminHeader from "Components/AdminHeader";
import AdminFooter from "Components/AdminFooter";
import AdminSidebar from "Components/AdminSidebar";

import { loadScripts } from "utils/loadScripts";
import AppLoader from "Components/Loaders/AppLoader";
import { useRouter } from "next/router";

// import Head from "next/head";

const MainLayout = (props) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  console.log("is not client");

  useEffect(() => {
    console.log("is client");
    setIsClient(true);

    if (router.pathname.includes("/admin")) {
      loadScripts();
    }
    // if (router.pathname.includes("/admin")) {
    // loadScripts();
    // console.log("load scripts");
    // }
  }, [router.pathname]);

  console.log("what is this");
  if (router.pathname.includes("/admin")) {
    return (
      <>
        {/* <Loader /> */}
        {isClient ? (
          <>
            {/* <Loader /> */}
            <div id="main-wrapper" className="show">
              <AdminHeader />
              <AdminSidebar />
              {props.children}
              <AdminFooter />
            </div>
          </>
        ) : (
          <div>
            <p style={{ display: "none" }}>.</p>
            <Loader />
          </div>
        )}

        {/* {props.children} */}
        {/* <div>
        <AdminHeader />
        <AdminSidebar />
        {props.children}
        <AdminFooter />
      </div> */}
      </>
    );
  } else {
    return (
      <>
        <Header />
        {props.children}
        <Footer />
      </>
    );
  }
};

export default MainLayout;
