import React from "react";

import Header from "Components/Header/Header.jsx";
import Footer from "Components/Footer/Footer.jsx";
import AdminHeader from "Components/AdminHeader";
import AdminMenu from "Components/AdminMenu";
import { useRouter } from "next/router";

const MainLayout = (props) => {
  const router = useRouter();

  if (router.pathname.includes("/admin")) {
    return (
      <>
        {/* <AdminMenu /> */}
        {props.children}
        {/* <AdminHeader /> */}
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
