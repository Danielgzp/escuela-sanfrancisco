import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import endPoints from "utils/endpoints";
import { useRouter } from "next/router";

const EditRepresentantModal = ({ representant, fetchData }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  // const [grades, setGrades] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const editRepresentant = {
      ci: objectData.ci,
      repName: objectData.repName,
      repLastName: objectData.repLastName,
      email: objectData.email,
      phone: objectData.phone,
    };

    setState({ loading: true, error: null });
    console.log(editRepresentant);
    axios
      .patch(
        endPoints.representants.updateRepresentant(representant.ci),
        editRepresentant
      )
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se editado exitosamente el representante",
          showConfirmButton: false,
          timer: 5000,
        });
        // fetchData();
        router.reload();
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
      id="editRepresentant"
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
                  Editar Representante
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
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">
                          Cédula del Representante
                        </label>
                        <input
                          type="text"
                          name="ci"
                          className="form-control disabled"
                          defaultValue={representant?.ci}
                          
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Teléfono</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          defaultValue={representant?.phone}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">
                          Nombre del Representante
                        </label>
                        <input
                          type="text"
                          name="repName"
                          className="form-control"
                          defaultValue={representant?.repName}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">
                          Apellido del Representante
                        </label>
                        <input
                          type="text"
                          name="repLastName"
                          className="form-control"
                          defaultValue={representant?.repLastName}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Correo</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          defaultValue={representant?.email}
                        />
                      </div>
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
              Actualizar Representante
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRepresentantModal;
