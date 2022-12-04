import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import endPoints from "utils/endpoints";

const AddNewGrade = ({ fetchData, periods, educationLevels }) => {
  const formRef = useRef(null);
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  // const [grades, setGrades] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true, error: null });
    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const newGrade = {
      name: objectData.name,
      section: objectData.section,
      periodId: objectData.period,
      levelId: objectData.level,
      // quotas: objectData.quotas,
    };

    console.log(newGrade);
    axios
      .post(endPoints.grades.addGrade, newGrade)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha creado exitosamente el grado",
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
      id="newGrade"
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
                  Agregar período escolar
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
                          className="form-control"
                          required
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Sección</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          name="section"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Período Escolar</label>
                        <select name="period" className="form-control" required>
                          <option>Período Escolar</option>
                          {periods?.map((period) => (
                            <option
                              key={period.id}
                              value={`${period.id}`}
                            >{`${period.name}`}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nivel de educación</label>
                        <select name="level" className="form-control" required>
                          <option>Nivel</option>
                          {educationLevels?.map((level) => (
                            <option
                              key={level.id}
                              value={`${level.id}`}
                            >{`${level.name}`}</option>
                          ))}
                        </select>
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
              Crear Grado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewGrade;
