import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";
import Modal from "Components/Modal/Modal";
const boom = require("@hapi/boom");

import "./styles.css";
import Loading from "Components/Loaders/Loading";
import { useAuth } from "hooks/useAuth";
import Cookies from "js-cookie";

const ListNews = () => {
  const formRef = useRef(null);
  const auth = useAuth();
  const { id } = auth.user;
  const cookie = Cookies.get("userJWT");

  const router = useRouter();
  const [state, setState] = useState({
    loading: false,
    error: null,
    // news: [],
  });

  const [news, setNews] = useState([]);

  useEffect(() => {
    
    axios
      .get(endPoints.news.getAllNews)
      .then((response) => {
        setNews(response.data);
        setState({ loading: false, error: null });
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });
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
      userId: id,
    };

    const config = {
      headers: { Authorization: `Bearer ${cookie}` },
    };
    // setState({ loading: true, error: null });
    console.log(newPost);
    axios
      .post(endPoints.news.addNews, newPost, config)
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
                          href="#my-posts"
                          data-toggle="tab"
                          className="nav-link active show"
                        >
                          Lista y Publicación De Noticias
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="my-posts" className="tab-pane fade active show">
                        <div className="my-post-content pt-3">
                          <div className="post-input">
                            <form onSubmit={handleSubmit} ref={formRef}>
                              <div className="col-lg-8 col-md-8 col-sm-12">
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
                              <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="form-group">
                                  <label className="form-label">
                                    Description de la noticia
                                  </label>
                                  <textarea
                                    name="description"
                                    id="textarea"
                                    cols="30"
                                    rows="4"
                                    className="form-control bg-transparent"
                                    placeholder="Coloca una descripcion de la noticia...."
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-lg-8 col-md-8 col-sm-12 border-bottom-1 pb-2">
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
                              <div className="col-lg-8 col-md-8 col-sm-12">
                                <button
                                  type="submit"
                                  href="#!"
                                  className="btn btn-primary"
                                >
                                  Publicar
                                </button>
                              </div>
                            </form>
                          </div>
                          {news.map((post) => (
                            <article className="post-container" key={post.id}>
                              <div className="postInfo border-bottom-1 pb-5">
                                <div className="postImage">
                                  <img
                                    src={post.image}
                                    alt={post.title}
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="postDescription">
                                  <div>
                                    <h4 className="post-title">{post.title}</h4>

                                    <p>{post.info}</p>
                                  </div>
                                  <div className="postActions">
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
                                      className="btn btn-danger"
                                      onClick={(e) =>
                                        handleDeletePost(e, post.id)
                                      }
                                    >
                                      <span className="mr-3">
                                        <i className="fa fa-trash"></i>
                                      </span>
                                      Delete
                                    </button>
                                    <span className="postDate">
                                      {post.createdAt}
                                    </span>
                                    <span className="postDate">
                                      Publicada por - {post.user.email}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <Modal posts={post} />
                            </article>
                          ))}
                          {state.loading ? (
                            <Loading />
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
