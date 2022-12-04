import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import endPoints from "utils/endpoints";
import LoginLoader from "Components/Loaders/LoginLoader";

const SearchRepresentant = ({
  roles,
  token,
  fetchData,
  representant,
  setRepresentant,
}) => {
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

    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };

    axios
      .get(endPoints.representants.getRepresentant(objectData.ci))
      .then((response) => {
        setState({
          loading: false,
          error: null,
        });
        setRepresentant(response.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data,
        });
        setState({ loading: false, error: err });
      });
  };

  console.log(representant.name);
  return (
    <div
      className="modal fade"
      id="searchRepresentant"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Buscar un representante {representant?.name}
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
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <label className="form-label">Cédula del Representante</label>
                  <input type="text" name="ci" className="form-control" />
                </div>
              </div>
            </form>
          </div>

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
              {state.loading ? (
                <LoginLoader
                  color={"#fff"}
                  containerHeight={"20px"}
                  containerWidth={"20px"}
                  border={"2px"}
                  spinnerHeigth={"10px"}
                  spinnerWidth={"10px"}
                  top={"50%"}
                  left={"50%"}
                />
              ) : (
                <>Buscar</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchRepresentant;
