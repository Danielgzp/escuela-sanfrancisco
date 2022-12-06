import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import endPoints from "utils/endpoints";

const EditGradeModal = ({ grade, periods, fetchData }) => {
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
    const editGrade = {
      name: objectData.name,
      section: objectData.section,
      periodId: objectData.period,
    };

    setState({ loading: true, error: null });

    axios
      .patch(endPoints.grades.updateGrade(grade.id), editGrade)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha actualizado exitosamente el grado",
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
        console.log(error);
        setState({ loading: false, error: null });
      });
  };

  return (
    <div
      className="modal fade"
      id={`grade-${grade.id}`}
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
                  Editar Grado
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
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nombre</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          defaultValue={grade?.name}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Sección</label>
                        <input
                          type="text"
                          name="section"
                          className="form-control"
                          defaultValue={grade?.section}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="form-label">Período Escolar</label>
                      <select
                        name="period"
                        className="form-control"
                        defaultValue={periods?.name}
                      >
                        {periods?.map((period) => (
                          <option
                            key={period.id}
                            value={`${period.id}`}
                          >{`${period.name}`}</option>
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
              Actualizar Grado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGradeModal;
