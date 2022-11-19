import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import endPoints from "utils/endpoints";

const EventualityStaffModal = ({ staff }) => {
  const formRef = useRef(null);
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  useEffect(() => {
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");
    const script4 = document.createElement("script");
    const script5 = document.createElement("script");

    script.src = "/vendor/pickadate/picker.js";
    script.async = false;
    document.body.appendChild(script);
    script2.src = "/vendor/pickadate/picker.time.js";
    script2.async = false;
    document.body.appendChild(script2);
    script3.src = "/vendor/pickadate/picker.date.js";
    script3.async = false;
    document.body.appendChild(script3);
    script4.src = "/js/plugins-init/pickadate-init.js";
    script4.async = false;
    document.body.appendChild(script4);
  }, []);
  // const [grades, setGrades] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const createEventuality = {
      teacherCi: staff.ci,
      title: objectData.title,
      description: objectData.description,
      day: objectData.day,
    };

    setState({ loading: true, error: null });
    console.log(createEventuality);
    axios
      .post(endPoints.eventualities.addEventualities, createEventuality)
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
      id={`eventuality-${teacher.ci}`}
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
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
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
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">
                          Fecha en qué ocurrió
                        </label>
                        <input
                          name="day"
                          className="datepicker-default form-control"
                          id="datepicker"
                        />
                      </div>
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

export default EventualityStaffModal;
