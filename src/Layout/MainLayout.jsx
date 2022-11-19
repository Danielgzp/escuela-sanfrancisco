import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Header from "Components/Header/Header.jsx";
import Footer from "Components/Footer/Footer.jsx";
import Loader from "Components/Loader";
import AdminHeader from "Components/AdminHeader";
import AdminFooter from "Components/AdminFooter";
import AdminSidebar from "Components/AdminSidebar";

import { loadScripts } from "utils/loadScripts";
import Head from "next/head";

const MainLayout = (props) => {
  const router = useRouter();
  useEffect(() => {
    // if (router.pathname.includes("/admin/add-student")) {
    //   return;
    // }
    if (router.pathname.includes("/admin")) {
      loadScripts();
    }
  }, [router.pathname]);

  if (router.pathname.includes("/admin")) {
    return (
      <>
        {/* <Loader /> */}
        {/* <div id="main-wrapper"> */}
        <div>
          <AdminHeader />
          <AdminSidebar />
          {props.children}
          <AdminFooter />
        </div>
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
