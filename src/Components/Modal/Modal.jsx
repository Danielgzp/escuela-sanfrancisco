import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import endPoints from "utils/endpoints";

const Modal = ({ posts, newsEdited }) => {
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
    const updatePost = {
      title: objectData.title,
      info: objectData.description,
      image: objectData.image,
    };

    setState({ loading: true, error: null });
    console.log(updatePost);
    axios
      .patch(endPoints.news.updateNews(posts.id), updatePost)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha actualizado exitosamente la noticia",
          showConfirmButton: false,
          timer: 1500,
        });
        newsEdited();
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
      id={`noticia${posts?.id}`}
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
                  Editar Noticia
                </h5>
                <a
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  x
                </a>
              </div>
              <div className="modal-body">
                <form ref={formRef}>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="form-label">Título de la Noticia</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        defaultValue={posts?.title}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="form-label">
                        Descripción de la Noticia
                      </label>
                      <textarea
                        name="description"
                        id="textarea"
                        cols="30"
                        rows="4"
                        className="form-control bg-transparent"
                        defaultValue={posts?.info}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="form-label">Url de la imagen</label>
                      <input
                        type="text"
                        name="image"
                        className="form-control"
                        defaultValue={posts?.image}
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
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
