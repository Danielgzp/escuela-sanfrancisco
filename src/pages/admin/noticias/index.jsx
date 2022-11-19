import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";
import Modal from "Components/Modal/Modal";
const boom = require("@hapi/boom");

const ListNews = () => {
  const formRef = useRef(null);
  const router = useRouter();
  const [state, setState] = useState({
    loading: false,
    error: null,
    // news: [],
  });

  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true, error: null });
      try {
        const response = await axios.get(endPoints.news.getAllNews);
        const data = await JSON.parse(JSON.stringify(response.data));
        setNews(data);
        setState({ loading: false, error: null });
      } catch (err) {
        setState({ loading: false, error: err });
      }
    }

    fetchData();
  }, []);
  //revisar bien esto para que cuando se elimnine una noticia se actulize
  //   en tiempo real, esto en todo la aplicacion sucede este problema, funcioan solo colocando news

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const newPost = {
      title: objectData.title,
      info: objectData.description,
      image: objectData.image,
      staffCi: "9604885",
    };

    setState({ loading: true, error: null });
    console.log(newPost);
    axios
      .post(endPoints.news.addNews, newPost)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha agregado exitosamente la noticia",
          showConfirmButton: false,
          timer: 1500,
        });
        setState({ loading: false, error: null });
        router.push("/admin/noticias");
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

  const handleDeletePost = (e, id) => {
    e.preventDefault();

    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas eliminar esta Noticia?",
      icon: "warning",
      showDenyButton: "true",
      confirmButtonText: "Sí, deseo eliminar la noticia",
    }).then((result) => {
      if (result.isConfirmed) {
        async function deleteNews() {
          try {
            await axios.delete(endPoints.news.deleteNews(id));
            Swal.fire(
              "La noticia se ha eliminado correctamente",
              "",
              "success"
            );
          } catch (error) {
            Swal.fire("Oops", error.message, "error");
          }
        }
        deleteNews();
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };

  console.log(news);
  return (
    <div className="content-body">
      <div className="container-fluid">
        <AdminMainPagination pageName={"Noticias"} />

        <div className="row">
          <div className="col-xl-12 col-xxl-12 col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="profile-tab">
                  <div className="custom-tab-1">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          href="#about-me"
                          data-toggle="tab"
                          className="nav-link"
                        >
                          Sobre mi
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#my-posts"
                          data-toggle="tab"
                          className="nav-link active show"
                        >
                          Noticias
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="about-me" className="tab-pane">
                        <div className="profile-personal-info pt-4">
                          <h4 className="text-primary mb-4">
                            Personal Information
                          </h4>
                          <div className="row mb-4">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                              <h5 className="f-w-500">
                                Name <span className="pull-right">:</span>
                              </h5>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                              <span>Mitchell C.Shay</span>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                              <h5 className="f-w-500">
                                Email <span className="pull-right">:</span>
                              </h5>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                              <span>info@example.com</span>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                              <h5 className="f-w-500">
                                Age <span className="pull-right">:</span>
                              </h5>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                              <span>18</span>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                              <h5 className="f-w-500">
                                Location <span className="pull-right">:</span>
                              </h5>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                              <span>Rosemont Avenue Melbourne, Florida</span>
                            </div>
                          </div>
                        </div>
                        <div className="profile-skills pt-2 border-bottom-1 pb-2">
                          <h4 className="text-primary mb-4">Skills</h4>
                          <a
                            href="#!"
                            className="btn btn-outline-dark btn-rounded px-4 my-3 my-sm-0 mr-3 m-b-10"
                          >
                            Admin
                          </a>
                          <a
                            href="#!"
                            className="btn btn-outline-dark btn-rounded px-4 my-3 my-sm-0 mr-3 m-b-10"
                          >
                            Dashboard
                          </a>
                          <a
                            href="#!"
                            className="btn btn-outline-dark btn-rounded px-4 my-3 my-sm-0 mr-3 m-b-10"
                          >
                            Photoshop
                          </a>
                          <a
                            href="#!"
                            className="btn btn-outline-dark btn-rounded px-4 my-3 my-sm-0 mr-3 m-b-10"
                          >
                            Bootstrap
                          </a>
                          <a
                            href="#!"
                            className="btn btn-outline-dark btn-rounded px-4 my-3 my-sm-0 mr-3 m-b-10"
                          >
                            Responsive
                          </a>
                          <a
                            href="#!"
                            className="btn btn-outline-dark btn-rounded px-4 my-3 my-sm-0 mr-3 m-b-10"
                          >
                            Crypto
                          </a>
                        </div>
                        <div className="profile-lang pt-5 border-bottom-1 pb-5">
                          <h4 className="text-primary mb-4">Language</h4>
                          <a href="#!" className="text-muted pr-3 f-s-16">
                            <i className="flag-icon flag-icon-us"></i> English
                          </a>{" "}
                          <a href="#!" className="text-muted pr-3 f-s-16">
                            <i className="flag-icon flag-icon-fr"></i> French
                          </a>
                          <a href="#!" className="text-muted pr-3 f-s-16">
                            <i className="flag-icon flag-icon-bd"></i> Bangla
                          </a>
                        </div>
                        <div className="profile-about-me">
                          <div className="border-bottom-1 pb-4">
                            <p>
                              A wonderful serenity has taken possession of my
                              entire soul, like these sweet mornings of spring
                              which I enjoy with my whole heart. I am alone, and
                              feel the charm of existence was created for the
                              bliss of souls like mine.I am so happy, my dear
                              friend, so absorbed in the exquisite sense of mere
                              tranquil existence, that I neglect my talents.
                            </p>
                            <p>
                              A collection of textile samples lay spread out on
                              the table - Samsa was a travelling salesman - and
                              above it there hung a picture that he had recently
                              cut out of an illustrated magazine and housed in a
                              nice, gilded frame.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div id="my-posts" className="tab-pane fade active show">
                        <div className="my-post-content pt-3">
                          <div className="post-input">
                            <form onSubmit={handleSubmit} ref={formRef}>
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                  <label className="form-label">
                                    Título de la Noticia
                                  </label>
                                  <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Title..."
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                  <label className="form-label">
                                    Description de la noticia
                                  </label>
                                  <textarea
                                    name="description"
                                    id="textarea"
                                    cols="30"
                                    rows="5"
                                    className="form-control bg-transparent"
                                    placeholder="Coloca una descripcion de la noticia...."
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                  <label className="form-label">
                                    Url de la imagen
                                  </label>
                                  <input
                                    type="text"
                                    name="image"
                                    className="form-control"
                                    placeholder="https://example.com"
                                  />
                                </div>
                              </div>
                              <button
                                type="submit"
                                href="#!"
                                className="btn btn-primary"
                              >
                                Publicar
                              </button>
                            </form>
                          </div>
                          {news?.map((post) => (
                            <article className="post-container" key={post.id}>
                              <div className="profile-uploaded-post border-bottom-1 pb-5">
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="img-fluid"
                                />
                                <a className="post-title" href="#!">
                                  <h4>{post.title}</h4>
                                </a>
                                <p>{post.info}</p>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#noticia${post.id}`}
                                  className="btn btn-primary mr-3"
                                >
                                  <span className="mr-3">
                                    <i className="fa fa-pencil"></i>
                                  </span>
                                  Edit
                                </button>
                                <button
                                  className="btn btn-secondary"
                                  onClick={(e) => handleDeletePost(e, post.id)}
                                >
                                  <span className="mr-3">
                                    <i className="fa fa-trash"></i>
                                  </span>
                                  Delete
                                </button>
                              </div>
                              <Modal posts={post} />
                            </article>
                          ))}
                          {state.loading ? (
                            <div>
                              <h2>Cargando Noticias...</h2>
                            </div>
                          ) : (
                            <>
                              {news.length === 0 ? (
                                <div>
                                  <h4>No hay ninguna noticia publicada</h4>
                                </div>
                              ) : (
                                <div className="text-center mb-2">
                                  <a href="#!" className="btn btn-primary">
                                    Load More
                                  </a>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListNews;
