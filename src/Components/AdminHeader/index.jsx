import { useAuth } from "hooks/useAuth";
import Link from "next/link";
import React from "react";

const AdminHeader = () => {
  const auth = useAuth();

  return (
    <>
      <div className="nav-header">
        <Link href="/admin">
          <a className="brand-logo">
            <img
              className="logo-abbr"
              src="/images/LogoSanFranciscoLetrasBlancas.png"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
            {/* <img
              className="logo-compact"
              src="/images/logo-text-white.png"
              alt=""
            />
            <img
              className="brand-title"
              src="/images/logo-text-white.png"
              alt=""
            /> */}
          </a>
        </Link>

        <div className="nav-control">
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                {/* <div className="search_bar dropdown">
                  <span
                    className="search_icon p-3 c-pointer"
                    data-toggle="dropdown"
                  >
                    <i className="mdi mdi-magnify"></i>
                  </span>
                  <div className="dropdown-menu p-0 m-0">
                    <form>
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Buscar..."
                        aria-label="Buscar..."
                      />
                    </form>
                  </div>
                </div> */}
              </div>

              <ul className="navbar-nav header-right">
                <li className="nav-item dropdown header-profile">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <img
                      src="/images/profile/education/pic1.jpg"
                      width="20"
                      alt=""
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      href="app-profile.html"
                      className="dropdown-item ai-icon"
                    >
                      <svg
                        id="icon-user1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span className="ml-2">Perfil </span>
                    </a>
                    <a href="#!" className="dropdown-item ai-icon">
                      <svg
                        id="icon-logout"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-log-out"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      <span className="ml-2" onClick={auth.logout}>
                        Cerrar Sesion{" "}
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
