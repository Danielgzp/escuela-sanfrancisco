import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles";
import Image from "next/image";

import logo from "images/logo.svg";

const Header = () => {
  let [showMobileMenu, setShowMobileMenu] = useState(false);
  const [state, setState] = useState({
    menu: "",
    iconRotate: "",
    burgerMenu: "",
  });

  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {
      draggable: true,
    });
    var elems2 = document.querySelectorAll(".collapsible");
    var instances2 = M.Collapsible.init(elems2, {
      accordion: true,
    });
    var elems3 = document.querySelectorAll(".dropdown-trigger");
    var instances3 = M.Dropdown.init(elems3, {
      coverTrigger: false,
      hover: true,
    });

    setState({
      menu: document.querySelector(".menu"),
      iconRotate: document.querySelector("i.material-icons.right"),
      burgerMenu: document.querySelector(".btn-menu__container"),
    });
  }, []);

  const handleMenuShow = () => {
    setShowMobileMenu(!showMobileMenu);
    if (showMobileMenu) {
      state.menu.classList.add("open");
    } else {
      state.classList.remove("open");
    }
  };

  const handleRotateClick = () => {
    if (state.iconRotate.classList.contains("zmdi-hc-rotate-180")) {
      state.iconRotate.classList.remove("zmdi-hc-rotate-180");
    } else {
      state.iconRotate.classList.add("zmdi-hc-rotate-180");
    }
  };

  return (
    <>
      <header>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <Link href="/history">
              <a>Historia</a>
            </Link>
          </li>
          <li className="divider"></li>
          <li>
            <Link href="/mision-vision">
              <a>Mision y Vision</a>
            </Link>
          </li>
          <li className="divider"></li>
        </ul>
        <ul id="dropdown2" className="dropdown-content">
          <li>
            <Link href="/services/biblioteca">
              <a>Biblioteca</a>
            </Link>
          </li>
          <li className="divider"></li>
          <li>
            <Link href="/mision-vision">
              <a>Computación</a>
            </Link>
          </li>
          <li className="divider"></li>
          <li>
            <Link href="#">
              <a>Psicología</a>
            </Link>
          </li>
          <li className="divider"></li>
          <li>
            <Link href="#">
              <a>Psicopedagogía</a>
            </Link>
          </li>
          <li className="divider"></li>
          <li>
            <Link href="/pastoral">
              <a>Pastoral</a>
            </Link>
          </li>
        </ul>
        <div className="slider-container">
          <ul id="slide-out" className="sidenav slide-menu">
            <li className="no-padding">
              <ul className="collapsible collapsible-accordion">
                <div className="background-nav"></div>

                <div className="user-view">
                  <div className="background"></div>
                  <Image
                    className="circle"
                    src={logo}
                    alt="Logo escuela"
                    height={70}
                  />

                  <span className="white-text name center">
                    U.E Colegio Fe y Alegria San Francisco
                  </span>
                </div>
                <li>
                  <Link href="/">
                    <a>
                      <i className="material-icons icon-white">home</i>
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    className="collapsible-header"
                    onClick={() => handleRotateClick()}
                  >
                    <i className="material-icons icon-white">account_balance</i>
                    Quienes Somos
                    <i className="material-icons right">arrow_drop_down</i>
                  </a>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <Link href="/history">
                          <a>
                            <i className="tiny material-icons icon-white">
                              chevron_right
                            </i>
                            Historia
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/mision-vision">
                          <a>
                            <i className="tiny material-icons icon-white">
                              chevron_right
                            </i>
                            Mision y Vision
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/gallery">
                <a>
                  <i className="material-icons icon-white">photo_library</i>
                  Galeria
                </a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a>
                  <i className="material-icons icon-white">description</i>
                  Publicaciones
                </a>
              </Link>
            </li>
            <ul className="collapsible">
              <li>
                <a
                  className="collapsible-header"
                  onClick={() => handleRotateClick()}
                >
                  <i className="material-icons">school</i>
                  Servicios
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li>
                      <Link href="/services/biblioteca">
                        <a>
                          <i className="tiny material-icons icon-white">
                            chevron_right
                          </i>
                          {/* <i className="tiny material-icons icon-white">chevron_right</i> */}
                          Biblioteca
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pastoral">
                        <a>
                          <i className="tiny material-icons icon-white">
                            chevron_right
                          </i>
                          Pastoral
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mision-vision">
                        <a>
                          <i className="tiny material-icons icon-white">
                            chevron_right
                          </i>
                          {/* <i className="tiny material-icons icon-white">chevron_right</i> */}
                          Computación
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <li>
              <Link href="/login">
                <a>
                  <i className="material-icons icon-white">account_circle</i>
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper fixed">
              <Link href="/">
                <a className="logo-big left">
                  <Image
                    src={logo}
                    alt="Logo del colegio"
                    className="logo"
                    height="45"
                    width="70"
                    style={{ width: "fit-content", height: "45px" }}
                  />
                  <span>U.E.C Fe y Alegría San Francisco</span>
                </a>
              </Link>
              <ul className="right nav-navigator__list">
                {/* <!-- Dropdown Trigger --> */}
                <li>
                  <a
                    className="dropdown-trigger"
                    href="#!"
                    data-target="dropdown1"
                  >
                    Quienes Somos
                    <i className="material-icons right">arrow_drop_down</i>
                  </a>
                </li>
                <li>
                  <Link href="/gallery">
                    <a>
                      {/* <i className="material-icons icon-white">photo_library</i> */}
                      Galeria
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      {/* <i className="material-icons icon-white">description</i> */}
                      Publicaciones
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/admin">
                    <a>
                      {/* <i className="material-icons icon-white">description</i> */}
                      ADMIN
                    </a>
                  </Link>
                </li>

                {/* <li>
                <Link href="#">
                   <i className="material-icons icon-white">contacts</i> 
                  Contacto
                <a></a></Link>
              </li> */}
                <li>
                  {/* <i className="material-icons icon-white">contacts</i> */}
                  <a
                    className="dropdown-trigger"
                    href="#!"
                    data-target="dropdown2"
                  >
                    Servicios
                    <i className="material-icons right">arrow_drop_down</i>
                  </a>
                </li>

                <li>
                  <Link href="/login">
                    <a>
                      {/* <i className="material-icons icon-white">account_circle</i> */}
                      Login
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="right btn-menu__container">
                <div
                  className="btn-menu"
                  // onClick={() => {
                  //   handleMenuShow();
                  // }}
                >
                  <i
                    data-target="slide-out"
                    className="sidenav-trigger material-icons icon-white"
                    id="burger"
                  >
                    menu
                  </i>
                </div>
              </div>

              <ul className="right hide-on-med-and-down"></ul>
            </div>
          </nav>
        </div>
      </header>
      <style jsx>{styles}</style>
    </>
  );
};

export default Header;
