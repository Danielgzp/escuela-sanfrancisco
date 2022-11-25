import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";
const boom = require("@hapi/boom");

const AddTeacher = ({ data }) => {
  const { grades } = data;

  const formRef = useRef(null);
  const router = useRouter();
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  // const [grades, setGrades] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const newTeacher = {
      ci: objectData.ci,
      name: objectData.name,
      lastName: objectData.lastName,
      address: objectData.address,
      birthDate: objectData.birthDate,
      gender: objectData.gender,
      admissionDate: objectData.admissionDate,
      birthPlace: objectData.birthPlace,
      phone: objectData.phone,
      email: objectData.email,
      gradeId: objectData.grade,
    };

    setState({ loading: true, error: null });
    console.log(newTeacher);
    axios
      .post(endPoints.teachers.addTeachers, newTeacher)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha agregado exitosamente el profesor",
          showConfirmButton: false,
          timer: 1500,
        });
        setState({ loading: false, error: null });
        router.push("/admin/profesores");
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
  useEffect(() => {
    // async function getGrades() {
    //   try {
    //     const res = await axios.get(endPoints.grades.getAllGrades);

    //     setGrades(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // const script = document.createElement("script");
    // const script2 = document.createElement("script");
    // const script3 = document.createElement("script");
    // const script4 = document.createElement("script");
    // const script5 = document.createElement("script");

    // script.src = "/vendor/pickadate/picker.js";
    // script.async = false;
    // document.body.appendChild(script);
    // script2.src = "/vendor/pickadate/picker.time.js";
    // script2.async = false;
    // document.body.appendChild(script2);
    // script3.src = "/vendor/pickadate/picker.date.js";
    // script3.async = false;
    // document.body.appendChild(script3);
    // script4.src = "/js/plugins-init/pickadate-init.js";
    // script4.async = false;
    // document.body.appendChild(script4);

    // getGrades();
  }, []);

  return (
    <>
      {/* <ContentBody /> */}
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Profesores"} crudName={"Añadir"} />
          <div className="row">
            <div className="col-xl-12 col-xxl-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Información Básica</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Nombres</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Apellidos</label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Cedula de Identidad
                          </label>
                          <input
                            type="number"
                            name="ci"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Dirección</label>
                          <textarea
                            name="address"
                            className="form-control"
                            required
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Fecha de Contratación
                          </label>
                          <input
                            type="date"
                            name="admissionDate"
                            className="datepicker-default form-control"
                            id="datepicker"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Fecha de nacimiento
                          </label>
                          <input
                            type="date"
                            name="birthDate"
                            className="datepicker-default form-control"
                            id="datepicker"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Lugar de Nacimiento
                          </label>
                          <input
                            type="text"
                            name="birthPlace"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Grado al cual imparte clase
                          </label>
                          <select
                            name="grade"
                            className="form-control"
                            required
                          >
                            <option value="">Grado</option>
                            {grades.map((grade) => (
                              <option
                                key={grade.id}
                                value={`${grade.id}`}
                              >{`${grade.name} ${grade.section}`}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Género</label>
                          <select
                            name="gender"
                            className="form-control"
                            required
                          >
                            <option value="">Género</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Teléfono</label>

                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            required
                          />
                          {/* <input
                            name="datepicker"
                            className="datepicker-default form-control"
                            id="datepicker1"
                          /> */}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button type="submit" className="btn btn-primary">
                          Enviar
                        </button>
                        <button type="submit" className="btn btn-light">
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTeacher;

export async function getServerSideProps() {
  try {
    const response = await axios.get(endPoints.grades.getAllGrades);
    const grades = await JSON.parse(JSON.stringify(response.data));

    return {
      props: { data: { grades } },
    };
  } catch (error) {
    const err = error.message;
    return {
      props: { data: { err } },
    };
  }
}
