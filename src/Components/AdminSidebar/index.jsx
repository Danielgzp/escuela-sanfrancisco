import Link from "next/link";
import React from "react";

const AdminSidebar = () => {
  return (
    <>
      <div className="dlabnav">
        <div className="dlabnav-scroll">
          <ul className="metismenu" id="menu">
            <li className="nav-label first">Main Menu</li>
            <li>
              {/* <Link href="/"> */}
              <a className="ai-icon" aria-expanded="false" href="/">
                <i className="material-icons">home</i>
                <span className="nav-text">Home Page</span>
              </a>
              {/* </Link> */}
            </li>
            <li>
              <Link href="/admin">
                <a className="ai-icon" aria-expanded="false">
                  <i className="material-icons">domain</i>
                  <span className="nav-text">Dashboard</span>
                </a>
              </Link>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="material-icons">face</i>
                <span className="nav-text">Estudiantes</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/admin/estudiantes">
                    <a>Lista de Estudiantes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/estudiantes/agregar-estudiante">
                    <a>Añadir Estudiante</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="material-icons">person</i>
                <span className="nav-text">Profesores</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/admin/profesores">
                    <a>Lista de Profesores</a>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/profesores/agregar-profesor">
                    <a>Añadir Profesor</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="material-icons">supervisor_account</i>
                <span className="nav-text">Personal</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/admin/personal">
                    <a>Lista de Personal Administrativo, Obrero y Directivo</a>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/personal/agregar-personal">
                    <a>Añadir Personal</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-graduation-cap"></i>
                <span className="nav-text">Grados</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/admin/grados">
                    <a>Lista de Grados</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/admin/usuarios">
                <a className="ai-icon" aria-expanded="false">
                  <i className="material-icons">portrait</i>

                  <span className="nav-text">Usuarios</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/admin/periodos-escolares">
                <a className="ai-icon" aria-expanded="false">
                  <i className="la la-calendar"></i>
                  <span className="nav-text">Períodos Escolares</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/admin/noticias">
                <a className="ai-icon" aria-expanded="false">
                  <i className="material-icons">library_books</i>

                  <span className="nav-text">Noticias</span>
                </a>
              </Link>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="material-icons">assignment</i>
                <span className="nav-text">Reportes</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/admin/reportes/estudiantes">
                    <a>Estudiantes por Grado</a>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/reportes/cedulados">
                    <a>Estudiantes cedulados</a>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/reportes/representantes">
                    <a>Representantes por Grado</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/admin/auditoria">
                <a className="ai-icon" aria-expanded="false">
                  <i className="material-icons">insert_chart</i>
                  <span className="nav-text">Auditoría</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
