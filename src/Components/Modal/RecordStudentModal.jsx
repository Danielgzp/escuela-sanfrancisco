import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import endPoints from "utils/endpoints";

const RecordStudentModal = ({ student }) => {
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
    const createRecord = {
      studentSchoolarshipCi: student.schoolarshipCi,
      title: objectData.title,
      description: objectData.description,
      day: objectData.day,
    };

    setState({ loading: true, error: null });
    console.log(createRecord);
    axios
      .post(endPoints.record.addRecord, createRecord)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha agregado exitosamente la eventualidad",
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
      id={`record-${student.ci}`}
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
                  Agregar Eventualidad
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
                      <label className="form-label">
                        Título de la Eventualidad
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        // defaultValue={posts?.title}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="form-label">
                        Detalles de la Eventualidad
                      </label>
                      <textarea
                        name="description"
                        id="textarea"
                        cols="30"
                        rows="4"
                        className="form-control bg-transparent"
                        // defaultValue={posts?.info}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="form-label">Día en que ocurrió</label>
                      <input
                        type="date"
                        name="day"
                        className="form-control"
                        // defaultValue={posts?.image}
                      />
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
              Crear Eventualidad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordStudentModal;
