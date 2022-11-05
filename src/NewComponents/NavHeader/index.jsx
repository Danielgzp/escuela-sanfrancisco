import React from "react";

const NavHeader = () => {
  return (
    <>
      <div className="nav-header">
        <a href="index.html" className="brand-logo">
          <img className="logo-abbr" src="/images/logo-white-2.png" alt="" />
          <img
            className="logo-compact"
            src="/images/logo-text-white.png"
            alt=""
          />
          <img
            className="brand-title"
            src="/images/logo-text-white.png"
            alt=""
          />
        </a>

        <div className="nav-control">
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
