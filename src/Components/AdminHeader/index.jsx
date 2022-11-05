import Link from "next/link";
import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";

const AdminHeader = () => {
  var [menuIsOpen, setMenuIsOpen] = useState(true);
  const [styles, setStyles] = useState({
    body: "",
    sidebar: "",
    target: "",
  });

  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});

    setStyles({
      body: document.querySelector(".dashboard-contentPage"),
      sidebar: document.querySelector(".secundary"),
      target: document.querySelector("slide-out"),
    });
  }, []);

  console.log(styles);
  const handleHelper = () => {
    Swal.fire({
      icon: "info",
      title: "AYUDA",
      text: "Si tiene algún problema contactar con el hijo de Naibys",
    });
  };

  const handleSidebarMenu = () => {
    // Para eliminar propeidas de css con Javascript ////
    // styles.sidebar.style.width = "270px";
    // styles.sidebar.style.opacity = "1";

    if (menuIsOpen) {
    //   styles.body.classList.add("no-paddin-left");
      styles.sidebar.style.transform = "translateX(-105%)";
      styles.sidebar.style.transition = "0.4s all ease-out";
      styles.sidebar.style.transitionDelay = "0.085s";
    } else {
    //   styles.body.classList.remove("no-paddin-left");
      styles.sidebar.style.transform = "translateX(0%)";
      styles.sidebar.style.transition = "0.4s all ease-in";
      styles.sidebar.style.transitionDelay = "-0.19s";
    }

    setMenuIsOpen(!menuIsOpen);

    // if (styles.sidebar.classList.contains("no-paddin-left")) {
    //   styles.body.classList.remove("no-paddin-left");
    //   styles.sidebar.classList.remove("hide-sidebar").add("show-sidebar");
    // }
    // if (styles.sidebar.classList.contains("show-sidebar")) {
    //   styles.body.classList.add("no-paddin-left");
    //   styles.sidebar.classList.add("hide-sidebar").remove("show-sidebar");
    // } else {
    //   styles.sidebar.classList.add("show-sidebar");
    // }
  };

  return (
    <React.Fragment>
      <nav className="full-box dashboard-Navbar">
        <ul className="full-box list-unstyled text-right">
          <li className="pull-left" onClick={() => handleSidebarMenu()}>
            <a
              href="#!"
              className="btn-menu-dashboard"
              data-target="slide-out second"
            >
              <i className="zmdi zmdi-more-vert"></i>
            </a>
          </li>

          {/*
				<li>
					<a href="#!" className="btn-Notifications-area">
						<i className="zmdi zmdi-notifications-none"></i>
						<span className="badge">7</span>
					</a>
				</li>
				<li>
					<a href="#!" className="btn-search">
						<i className="zmdi zmdi-search"></i>
					</a>
				</li>
				*/}
          <li className="" onClick={() => handleHelper()}>
            <a href="#!" className="btn-modal-help">
              <i className="zmdi zmdi-help-outline"></i>
            </a>
          </li>
          <li className="">
            <Link href="/">
              <a>
                <i className="material-icons">home</i>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .dashboard-contentPage {
          transition: 0.4s all ease !important;
          /* transition-delay: -0.1s !important; */
        }
        .dashboard-Navbar {
          position: fixed;
          z-index: 997;
        }
      `}</style>
    </React.Fragment>
  );
};

export default AdminHeader;
