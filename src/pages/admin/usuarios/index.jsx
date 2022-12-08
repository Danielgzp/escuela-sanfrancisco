import React, { useEffect, useState } from "react";

import axios from "axios";
import AdminMainPagination from "Components/AdminMainPagination";
import Loader from "Components/Loader";
import Loading from "Components/Loaders/Loading";
import AddNewUser from "Components/Modal/AddNewUser";
import EditUser from "Components/Modal/EditUser";
import UserRoleService from "services/users.role.service";

import Link from "next/link";

import Swal from "sweetalert2";
import endPoints from "utils/endpoints";
import Cookies from "js-cookie";
import { CSVLink } from "react-csv";
import ReactToPrint from "react-to-print";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import { useRef } from "react";

const service = new UserRoleService();

const ListOfUsers = ({ data }) => {
  const { usersRole } = data;
  const cookie = Cookies.get("userJWT");
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [users, setUsers] = useState([]);
  const componentRef = useRef();

  const fetchData = () => {
    setState({ loading: true, error: null });
    axios
      .get(endPoints.users.getAllUsers)
      .then((response) => {
        setUsers(response.data);
        setState(false);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
        setState({ loading: false, error: null });
      });
  };
  // const [usersRole, setUsersRole] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    const config = {
      headers: { Authorization: `Bearer ${cookie}` },
    };

    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas eliminar este Usuario?",
      icon: "warning",
      showDenyButton: "true",
      confirmButtonText: "Sí, deseo eliminar el usuario",
    })
      .then((result) => {
        if (result.isConfirmed) {
          setState({ loading: true, error: null });
          axios
            .delete(endPoints.users.deleteUsers(id), config)
            .then((response) => {
              Swal.fire(
                "El Usuario se ha eliminado correctamente",
                "",
                "success"
              );
              fetchData();
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response.data,
              });
              setState({ loading: false, error: err });
            });
        } else if (result.isDenied) {
          Swal.fire("Cancelado", "", "info");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  console.log(users)

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Usuarios"} />

          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Lista de todos los usuarios </h4>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#newUser"
                  className="btn btn-primary"
                >
                  + Agregar Usuario
                </button>
                <AddNewUser
                  roles={usersRole}
                  token={cookie}
                  fetchData={fetchData}
                />
              </div>
              <div className="card-body">
                <div className="card-header">
                  {users.length > 0 && (
                    <>
                      <CSVLink data={users} filename="listUsuarios.csv">
                        <button className="btn btn-secondary text-white">
                          <i className="fas fa-file-csv mr-2"></i>
                          CSV
                        </button>
                      </CSVLink>
                      <ReactToPrint
                        trigger={() => {
                          return (
                            <button className="btn btn-dark text-white">
                              <i className="fas fa-print mr-2"></i>
                              Imprimir
                            </button>
                          );
                        }}
                        documentTitle="ListaUsuarios"
                        pageStyle="print"
                        content={() => componentRef.current}
                        copyStyles={true}
                      />
                      <button className="btn btn-success text-white">
                        <i className="fas fa-file-excel mr-2"></i>
                        <ReactHtmlTableToExcel
                          id="exportExcel"
                          sheet="Pagina 1"
                          table="users"
                          filename="usuarios"
                          buttonText="Excel"
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                          // className="btn"
                        ></ReactHtmlTableToExcel>
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          axios
                            .post(
                              "http://localhost:3000/api/v1/admin/users/reports",
                              users
                            )
                            .then((response) => {
                              Swal.fire({
                                icon: "success",
                                title: "PDF creado",
                                text: "Se ha generado exitosamente el reporte",
                              });
                            })
                            .catch((err) => {
                              console.log(err);
                              Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Ha ocurrido un error al generar el PDF",
                              });
                            });
                        }}
                      >
                        <i className="fas fa-file-pdf mr-2"></i>
                        PDF
                      </button>
                    </>
                  )}
                </div>
                <div className="table-responsive">
                  {state.loading ? (
                    <Loading />
                  ) : (
                    <table
                      id="users"
                      className="table table-striped verticle-middle table-responsive-sm"
                      ref={componentRef}
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Rol</th>
                          <th scope="col">Correo</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users?.map((user) => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userRole?.name}</td>
                            <td>{user.email}</td>

                            {/* <td>{User.totalStudents}</td> */}
                            {/* <td>{User.students.length}</td> */}
                            <td>
                              <>
                                <a
                                  href="#!"
                                  rel="noopener noreferrer"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#user-${user.id}`}
                                >
                                  <i className="material-icons">edit</i>
                                </a>
                                <a
                                  href="#!"
                                  rel="noopener noreferrer"
                                  onClick={() => handleDeleteUser(user.id)}
                                >
                                  <i className="material-icons">delete</i>
                                </a>
                                {/* <Link
                                  href={`/admin/grados/editar/${user.id}`
                                    .toLowerCase()
                                    .replaceAll(" ", "-")
                                    .normalize("NFD")
                                    .replace(/[?¿¡!\u0300-\u036f]/g, "")}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <a>
                                    <i className="material-icons">
                                      account_box
                                    </i>
                                  </a>
                                </Link> */}
                              </>
                            </td>
                            <EditUser
                              user={user}
                              token={cookie}
                              fetchData={fetchData}
                            />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListOfUsers;

export async function getServerSideProps() {
  const response = await service.find();
  const usersRole = await JSON.parse(JSON.stringify(response));

  return {
    props: {
      data: { usersRole },
    },
  };
}
