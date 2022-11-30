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

const service = new UserRoleService();

const ListOfUsers = ({ data }) => {
  const { usersRole } = data;

  const cookie = Cookies.get(process.env.COOKIE_NAME);
  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  const [users, setUsers] = useState([]);
  // const [usersRole, setUsersRole] = useState([]);

  useEffect(() => {
    setState({ loading: true, error: null });

    axios
      .get(endPoints.users.getAllUsers)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });
    setState({ loading: false, error: null });
  }, []);

  const handleDeleteUser = async (id) => {
    const config = {
      headers: { Authorization: `Bearer ${cookie}` },
    };

    try {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas eliminar este Usuario?",
        icon: "warning",
        showDenyButton: "true",
        confirmButtonText: "Sí, deseo eliminar el usuario",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(endPoints.users.deleteUsers(id), config)
            .then((response) => {
              Swal.fire(
                "El Usuario se ha eliminado correctamente",
                "",
                "success"
              );
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
      });
    } catch (error) {
      Swal.fire("Oops", error.message, "error");
    }
  };

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
                <AddNewUser roles={usersRole} token={cookie} />
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  {state.loading ? (
                    <Loading />
                  ) : (
                    <table className="table table-striped verticle-middle table-responsive-sm">
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
                            <td>{user.userRole.name}</td>
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
                            <EditUser user={user} token={cookie} />
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
