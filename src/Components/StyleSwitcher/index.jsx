import React from "react";

const StyleSwitcher = () => {
  return (
    <div className="sidebar-right">
      <a
        className="sidebar-right-trigger wave-effect wave-effect-x"
        href="javascript:void(0)"
      >
        <span>
          <i className="fa fa-cog fa-spin" />
        </span>
      </a>
      <div className="sidebar-right-inner">
        <div className="tab-content tab-content-default tabcontent-border">
          <div className="tab-pane fade active show" id="home8" role="tabpanel">
            <div className="admin-settings">
              <h4>Elige tu estilo</h4>
              <div>
                <p>Fondo</p>
                <select
                  className="form-control"
                  name="theme_version"
                  id="theme_version"
                >
                  <option value="light">Claro</option>
                  <option value="dark">Oscuro</option>
                </select>
              </div>
              <div>
                <p>Fondo</p>
                <select
                  className="form-control"
                  name="theme_version"
                  id="theme_version"
                >
                  <option value="light">Claro</option>
                  <option value="dark">Oscuro</option>
                </select>
              </div>
              <div>
                <p>Layout</p>
                <select
                  className="form-control"
                  name="theme_layout"
                  id="theme_layout"
                >
                  <option value="vertical">Vertical</option>
                  <option value="horizontal">Horizontal</option>
                </select>
              </div>
              <div>
                <p>Menu</p>
                <select
                  className="form-control"
                  name="sidebar_style"
                  id="sidebar_style"
                >
                  <option value="full">Full</option>
                  <option value="mini">Mini</option>
                  <option value="compact">Compact</option>
                  <option value="modern">Modern</option>
                  <option value="overlay">Overlay</option>
                  <option value="icon-hover">Icon-hover</option>
                </select>
              </div>
              <div>
                <p>Posición del Menu</p>
                <select
                  className="form-control"
                  name="sidebar_position"
                  id="sidebar_position"
                >
                  <option value="static">Static</option>
                  <option value="fixed">Fixed</option>
                </select>
              </div>
              <div>
                <p>Posición del Header</p>
                <select
                  className="form-control"
                  name="header_position"
                  id="header_position"
                >
                  <option value="static">Static</option>
                  <option value="fixed">Fixed</option>
                </select>
              </div>
              <div>
                <p>Contenedor</p>
                <select
                  className="form-control"
                  name="container_layout"
                  id="container_layout"
                >
                  <option value="wide">Wide</option>
                  <option value="boxed">Boxed</option>
                  <option value="wide-boxed">Wide Boxed</option>
                </select>
              </div>
              <div>
                <p>Dirección</p>
                <select
                  className="form-control"
                  name="theme_direction"
                  id="theme_direction"
                >
                  <option value="ltr">LTR</option>
                  <option value="rtl">RTL</option>
                </select>
              </div>
              <div>
                <p>Tipo de Fuente</p>
                <select
                  className="form-control"
                  name="typography"
                  id="typography"
                >
                  <option value="roboto">Roboto</option>
                  <option value="poppins">Poppins</option>
                  <option value="opensans">Open Sans</option>
                  <option value="HelveticaNeue">HelveticaNeue</option>
                </select>
              </div>
              <div>
                <p>Logo</p>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_1"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_1"
                    />
                    <label htmlFor="nav_header_color_1" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_2"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_2"
                    />
                    <label htmlFor="nav_header_color_2" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_3"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_3"
                    />
                    <label htmlFor="nav_header_color_3" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_4"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_4"
                    />
                    <label htmlFor="nav_header_color_4" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_5"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_5"
                    />
                    <label htmlFor="nav_header_color_5" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_6"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_6"
                    />
                    <label htmlFor="nav_header_color_6" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_7"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_7"
                    />
                    <label htmlFor="nav_header_color_7" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_8"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_8"
                    />
                    <label htmlFor="nav_header_color_8" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_9"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_9"
                    />
                    <label htmlFor="nav_header_color_9" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_10"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_10"
                    />
                    <label htmlFor="nav_header_color_10" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_11"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_11"
                    />
                    <label htmlFor="nav_header_color_11" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_12"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_12"
                    />
                    <label htmlFor="nav_header_color_12" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_13"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_13"
                    />
                    <label htmlFor="nav_header_color_13" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_14"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_14"
                    />
                    <label htmlFor="nav_header_color_14" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="navigation_header"
                      defaultValue="color_15"
                      className="filled-in chk-col-primary"
                      id="nav_header_color_15"
                    />
                    <label htmlFor="nav_header_color_15" />
                  </span>
                </div>
              </div>
              <div>
                <p>Header</p>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_1"
                      className="filled-in chk-col-primary"
                      id="header_color_1"
                    />
                    <label htmlFor="header_color_1" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_2"
                      className="filled-in chk-col-primary"
                      id="header_color_2"
                    />
                    <label htmlFor="header_color_2" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_3"
                      className="filled-in chk-col-primary"
                      id="header_color_3"
                    />
                    <label htmlFor="header_color_3" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_4"
                      className="filled-in chk-col-primary"
                      id="header_color_4"
                    />
                    <label htmlFor="header_color_4" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_5"
                      className="filled-in chk-col-primary"
                      id="header_color_5"
                    />
                    <label htmlFor="header_color_5" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_6"
                      className="filled-in chk-col-primary"
                      id="header_color_6"
                    />
                    <label htmlFor="header_color_6" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_7"
                      className="filled-in chk-col-primary"
                      id="header_color_7"
                    />
                    <label htmlFor="header_color_7" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_8"
                      className="filled-in chk-col-primary"
                      id="header_color_8"
                    />
                    <label htmlFor="header_color_8" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_9"
                      className="filled-in chk-col-primary"
                      id="header_color_9"
                    />
                    <label htmlFor="header_color_9" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_10"
                      className="filled-in chk-col-primary"
                      id="header_color_10"
                    />
                    <label htmlFor="header_color_10" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_11"
                      className="filled-in chk-col-primary"
                      id="header_color_11"
                    />
                    <label htmlFor="header_color_11" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_12"
                      className="filled-in chk-col-primary"
                      id="header_color_12"
                    />
                    <label htmlFor="header_color_12" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_13"
                      className="filled-in chk-col-primary"
                      id="header_color_13"
                    />
                    <label htmlFor="header_color_13" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_14"
                      className="filled-in chk-col-primary"
                      id="header_color_14"
                    />
                    <label htmlFor="header_color_14" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="header_bg"
                      defaultValue="color_15"
                      className="filled-in chk-col-primary"
                      id="header_color_15"
                    />
                    <label htmlFor="header_color_15" />
                  </span>
                </div>
              </div>
              <div>
                <p>Menú</p>
                <div>
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_1"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_1"
                    />
                    <label htmlFor="sidebar_color_1" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_2"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_2"
                    />
                    <label htmlFor="sidebar_color_2" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_3"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_3"
                    />
                    <label htmlFor="sidebar_color_3" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_4"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_4"
                    />
                    <label htmlFor="sidebar_color_4" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_5"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_5"
                    />
                    <label htmlFor="sidebar_color_5" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_6"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_6"
                    />
                    <label htmlFor="sidebar_color_6" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_7"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_7"
                    />
                    <label htmlFor="sidebar_color_7" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_8"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_8"
                    />
                    <label htmlFor="sidebar_color_8" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_9"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_9"
                    />
                    <label htmlFor="sidebar_color_9" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_10"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_10"
                    />
                    <label htmlFor="sidebar_color_10" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_11"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_11"
                    />
                    <label htmlFor="sidebar_color_11" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_12"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_12"
                    />
                    <label htmlFor="sidebar_color_12" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_13"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_13"
                    />
                    <label htmlFor="sidebar_color_13" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_14"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_14"
                    />
                    <label htmlFor="sidebar_color_14" />
                  </span>{" "}
                  <span>
                    <input
                      type="radio"
                      name="sidebar_bg"
                      defaultValue="color_15"
                      className="filled-in chk-col-primary"
                      id="sidebar_color_15"
                    />
                    <label htmlFor="sidebar_color_15" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;
