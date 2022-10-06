import React from "react";

import Header from "Components/Header/Header.jsx";
import Footer from "Components/Footer/Footer.jsx";

const MainLayout = (props) => {
  // console.log(props.location.pathname);
  //   if (props.location.pathname.includes("/admin")) {
  //     return props.children;
  //   } else {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
