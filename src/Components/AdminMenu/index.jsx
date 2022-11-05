import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "./styles";
import Swal from "sweetalert2";

// import admin from "/images/admin.jpg";

const AdminMenu = ({}) => {
  let [showArrowDownMenu, setArrowDowMenu] = useState(false);
  const [menu, setMenu] = useState({
    subMenu: "",
    showSubMenu: false,
    /*btnSubMenu: "",
    iconSubMenuBtn: "",*/
    body: "",
    sidebar: "",
    target: "",
  });

  //  document.addEventListener("click", function () {
  //    let icon = document.querySelector(
  //      "a.btn-sideBar-SubMenu > i.zmdi-caret-down"
  //    );
  //  });
  useEffect(() => {
    setMenu({
      subMenu: document.querySelectorAll(".btn-sideBar-SubMenu"),

      /* btnSubMenu: document.querySelector("ul.dashboard-sideBar-Menu > li > ul"),

      iconSubMenuBtn: document.querySelectorAll(
        "a.btn-sideBar-SubMenu > i.zmdi-caret-down"
      ),*/
      body: document.querySelector(".dashboard-contentPage"),
      sidebar: document.querySelector(".secundary"),
      target: document.querySelector("slide-out"),
    });
  }, []);

  const handleOnClick = () => {
    menu.subMenu.forEach((submenu) => {
      submenu.addEventListener("click", () => {
        const btnSubMenu = submenu.nextSibling; // con nextSibling me devuelve el elemento hermano
        const iconDown = submenu.lastChild; // con lastChild me devuelve el ultimo hijo del elmento
        if (showArrowDownMenu) {
          btnSubMenu.classList.remove("show-sideBar-SubMenu");
          iconDown.classList.remove("zmdi-hc-rotate-180");
          // menu.btnSubMenu[i].classList.remove("show-sideBar-SubMenu");
          // menu.iconSubMenuBtn[i].classList.remove("zmdi-hc-rotate-180");
        } else {
          btnSubMenu.classList.add("show-sideBar-SubMenu");
          iconDown.classList.add("zmdi-hc-rotate-180");
        }
      });
    });

    // for (var i = 0; i < menu.iconSubMenuBtn.length; i++) {
    //   if (showArrowDownMenu) {
    //     menu.btnSubMenu[i].classList.remove("show-sideBar-SubMenu");
    //     menu.iconSubMenuBtn[i].classList.remove("zmdi-hc-rotate-180");
    //     // menu.btnSubMenu[i].classList.remove("show-sideBar-SubMenu");
    //     // menu.iconSubMenuBtn[i].classList.remove("zmdi-hc-rotate-180");
    //   } else {
    //     menu.iconSubMenuBtn[i].classList.add("zmdi-hc-rotate-180");
    //     menu.btnSubMenu[i].classList.add("show-sideBar-SubMenu");
    //   }
    //   // menu.iconSubMenuBtn[i].classList.add("zmdi-hc-rotate-180");
    //   // menu.btnSubMenu[i].classList.add("show-sideBar-SubMenu");
    // }

    console.log(showArrowDownMenu);
    setArrowDowMenu(!showArrowDownMenu);
  };

  const handleCloseMenu = () => {
    menu.sidebar.style.transform = "translateX(-105%)";
    menu.sidebar.style.transition = "0.3s all ease-out";
  };

  return (
    <>
      <ul id="slide-out" className="sidenav secundary">
        <ul>
          <li>
            <div className="user-view">
              <div className="background"></div>
              {/* Nombre del Colegio  */}
              <div className="full-box center text-titles">
                <i
                  className="zmdi zmdi-close btn-menu-dashboard visible-xs"
                  onClick={() => handleCloseMenu()}
                />
                U.E Colegio Fe y Alegria San Francisco
              </div>
              <div className="user-view__container center">
                <figcaption>
                  <img src={"/images/admin.jpg"} className="circle" />
                </figcaption>

                <a href="#name">
                  <span className="white-text name">John Doe</span>
                </a>
                <a href="#email">
                  <span className="white-text email">jdandturk@gmail.com</span>
                </a>
              </div>
              <div className="full-box dashboard-sideBar-UserInfo">
                {/* Botones de iniciar sesión y configuración*/}
                <ul className="full-box list-unstyled center">
                  <li className="center">
                    <a href="#!" className="enter">
                      <i className="zmdi zmdi-settings" />
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      Swal.fire({
                        title: "¿Estas seguro?",
                        text: "La sesión actual se cerrará",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText:
                          '<i className="zmdi zmdi-run"></i> Salir',
                      }).then((result) => {
                        if (result.isConfirmed) {
                          window.location.href = "/login";
                        }
                      });
                    }}
                  >
                    <a href="#!" className="btn-exit-system center">
                      <i className="zmdi zmdi-power" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        {/* Menu de barra deslizante*/}
        <ul className="list-unstyled full-box dashboard-sideBar-Menu">
          <li>
            <Link href="/admin">
              <a>
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i> Home
              </a>
            </Link>
          </li>
          {/*Administrar */}
          <li>
            <a
              href="#!"
              className="btn-sideBar-SubMenu"
              onClick={handleOnClick}
            >
              <i className="zmdi zmdi-case zmdi-hc-fw" /> Administrar{" "}
              <i className="zmdi zmdi-caret-down pull-right" />
            </a>
            {/* Submenú de Administrar*/}
            <ul className="list-unstyled full-box">
              <li>
                <a href="#">
                  <i className="zmdi zmdi-book zmdi-hc-fw" />
                  {"   "} Materias
                </a>
              </li>
              <li>
                <Link href="/admin/addperiod">
                  <a>
                    <i className="zmdi zmdi-graduation-cap zmdi-hc-fw" />
                    {"   "} Períodos Escolares
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          {/* Usuarios */}
          <li>
            <a
              href="#!"
              className="btn-sideBar-SubMenu"
              onClick={handleOnClick}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" /> Usuarios{" "}
              <i className="zmdi zmdi-caret-down pull-right" />
            </a>
            {/* Submenú de usuarios*/}
            <ul className="list-unstyled full-box">
              <li>
                <Link href="/admin/addnewadmin">
                  <a>
                    <i className="zmdi zmdi-account zmdi-hc-fw" />{" "}
                    Administradores
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/admin/addnewteacher">
                  <a>
                    <i className="zmdi zmdi-male-alt zmdi-hc-fw" /> Docentes
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/admin/addnewstudent">
                  <a>
                    <i className="zmdi zmdi-face zmdi-hc-fw" /> Estudiantes
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </ul>
      <style jsx>{styles}</style>
    </>
  );
};

export default AdminMenu;
