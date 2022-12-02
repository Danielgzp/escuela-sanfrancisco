import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import endPoints from "utils/endpoints";

const EditUser = ({ user, token, fetchData }) => {
  const formRef = useRef(null);
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  // const [Users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });
    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const editUser = {
      name: objectData.name,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    console.log(editUser);
    axios
      .patch(endPoints.users.updateUsers(user.id), editUser, config)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha actualizado exitosamente el usuario",
          showConfirmButton: false,
          timer: 1500,
        });
        fetchData();
        setState({ loading: false, error: null });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
        setState({ loading: false, error: null });
      });
  };

  return (
    <div
      className="modal fade"
      id={`user-${user.id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {state.loading ? (
            <div>
              <h2>Cargando...</h2>
            </div>
          ) : (
            <>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Editar Usuario
                </h5>
                <a
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="material-icons">close</i>
                </a>
              </div>
              <div className="modal-body">
                <form ref={formRef}>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="form-label">Correo</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        defaultValue={user?.email}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="form-label">Rol</label>
                      <select
                        name="period"
                        className="form-control disabled"
                        disabled
                      >
                        <option defaultValue={user?.userRole?.name}>
                          {user?.userRole?.name}
                        </option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => handleSubmit(e)}
              data-bs-dismiss="modal"
            >
              Actualizar Usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
