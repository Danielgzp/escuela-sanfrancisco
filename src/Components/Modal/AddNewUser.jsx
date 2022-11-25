import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import endPoints from "utils/endpoints";

const AddNewUser = ({ roles }) => {
  const formRef = useRef(null);

  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  // const [grades, setGrades] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const newUser = {
      email: objectData.email,
      userRoleId: objectData.role,
      password: objectData.password
      //   section: objectData.section,
      //   UsersId: objectData.Users,
    };

    setState({ loading: true, error: null });
    console.log(newUser);
    axios
      .post(endPoints.users.addUsers, newUser)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha creado exitosamente el usuario",
          showConfirmButton: false,
          timer: 1500,
        });
        setState({ loading: false, error: null });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
        console.log(error);
        setState({ loading: false, error: null });
      });
  };

  return (
    <div
      className="modal fade"
      id="newUser"
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
                  Agregar Nuevo Usuario
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
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="form-label">Contraseña</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="form-label">Rol</label>
                      <select
                        name="role"
                        className="form-control"
                        // defaultValue={user?.name}
                      >
                        <option value="">Rol</option>
                        {roles?.map((role) => (
                          <option
                            key={role.id}
                            value={`${role.id}`}
                          >{`${role.name}`}</option>
                        ))}
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
              Crear Usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
