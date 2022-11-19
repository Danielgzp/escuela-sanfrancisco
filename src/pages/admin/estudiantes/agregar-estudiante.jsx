import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { loadScripts } from "utils/loadScripts";
import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";
const boom = require("@hapi/boom");

const AddStudent = ({ data }) => {
  const { grades, err } = data;

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
    const newStudent = {
      ci: objectData.schoolId,
      name: objectData.name,
      lastName: objectData.lastName,
      address: objectData.address,
      birthDate: objectData.birthDate,
      gender: objectData.gender,
      admissionDate: objectData.admissionDate,
      birthPlace: objectData.birthPlace,
      houseProperty: objectData.houseProperty,
      representant: {
        ci: objectData.repCI,
        repName: objectData.repName,
        repLastName: objectData.repLastName,
        email: objectData.email,
        phone: objectData.phone,
      },
      gradeId: objectData.grade,
    };

    setState({ loading: true, error: null });
    console.log(newStudent);
    axios
      .post(endPoints.students.addStudent, newStudent)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha agregado exitosamente el estudiante",
          showConfirmButton: false,
          timer: 1500,
        });
        setState({ loading: false, error: null });
        router.push("/");
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
    // script5.src = "/js/dlabnav-init.js";
    // script5.async = false;
    // document.body.appendChild(script5);
    

    // getGrades();
  }, []);

  return (
    <>
      {/* <ContentBody /> */}
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Estudiantes"} crudName={"Añadir"} />
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
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Cedula de Identidad Escolar
                          </label>
                          <input
                            type="number"
                            name="schoolId"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Direccion</label>
                          <textarea
                            name="address"
                            className="form-control"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Fecha de Ingreso</label>
                          <input
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
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Grado</label>
                          <select name="grade" className="form-control">
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
                          <select name="gender" className="form-control">
                            <option value="">Género</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Condición de la vivienda
                          </label>
                          <input
                            type="text"
                            name="houseProperty"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Nombre del Representante
                          </label>
                          <input
                            type="text"
                            name="repName"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Apellidos del Representante
                          </label>
                          <input
                            type="text"
                            name="repLastName"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Cedula de Identidad del Representante
                          </label>
                          <input
                            type="number"
                            name="repCI"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Telefono</label>

                          <input
                            type="text"
                            name="phone"
                            className="form-control"
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
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group fallback w-100">
                          <input
                            type="file"
                            name=""
                            className="dropify"
                            data-default-file=""
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

export default AddStudent;

export async function getServerSideProps() {
  try {
    const response = await axios.get(endPoints.grades.getAllGrades);
    const grades = await JSON.parse(JSON.stringify(response.data));

    console.log(grades);
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
