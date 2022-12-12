import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import axios from "axios";
import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import EventualityTeacherModal from "Components/Modal/EventualityTeacherModal";
import GradeService from "services/grade.service";
import TeacherService from "services/teacher.service";
import Cookies from "js-cookie";

const service = new GradeService();
const teacherService = new TeacherService();

const EditTeacher = ({ data }) => {
  const { grades, teacher } = data;

  const cookie = Cookies.get("userJWT");
  const config = {
    headers: { Authorization: `Bearer ${cookie}` },
  };

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
    const editTeacher = {
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
    console.log(editTeacher);
    axios
      .patch(endPoints.teachers.updateTeacher(teacher.ci), editTeacher, config)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha actualizado exitosamente el profesor",
          showConfirmButton: false,
          timer: 1500,
        });
        setState({ loading: false, error: null });
        router.push(`/admin/profesores/perfil/${teacher.ci}`);
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
  useEffect(() => {}, []);

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Personal"} crudName={"Editar"} />
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
                            defaultValue={teacher?.name}
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
                            defaultValue={teacher?.lastName}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Cedula de Identidad
                          </label>
                          <input
                            type="text"
                            name="ci"
                            className="form-control disabled"
                            defaultValue={teacher?.ci}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Dirección</label>
                          <textarea
                            name="address"
                            className="form-control"
                            rows="5"
                            defaultValue={teacher?.address}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Fecha de Contratación
                          </label>
                          <input
                            name="admissionDate"
                            type="date"
                            className="datepicker-default form-control"
                            id="datepicker"
                            defaultValue={teacher?.admissionDate}
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
                            defaultValue={teacher?.birthDate}
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
                            defaultValue={teacher?.birthPlace}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">
                            Grado el cual imparte
                          </label>
                          <select
                            name="grade"
                            className="form-control"
                            defaultValue={teacher?.grade?.id}
                          >
                            {grades?.map((grade) => (
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
                          <label className="form-label">Sexo</label>
                          <select
                            name="gender"
                            className="form-control"
                            defaultValue={teacher?.gender}
                          >
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
                            defaultValue={teacher?.phone}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            defaultValue={teacher?.email}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button type="submit" className="btn btn-primary">
                          Enviar
                        </button>
                        {/* <button
                          type="button"
                          className="btn btn-warning ml-2 text-white"
                        >
                          Cancelar
                        </button> */}
                        <Link href={`/admin/profesores/perfil/${teacher.ci}`}>
                          <a
                            type="button"
                            className="btn btn-warning ml-2 text-white"
                          >
                            Ir al Perfil
                          </a>
                        </Link>
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target={`#eventuality-${teacher.ci}`}
                          className="btn btn-primary mr-3 float-right"
                        >
                          <span className="mr-3">
                            <i className="fa fa-pencil"></i>
                          </span>
                          Agregar Eventualidad
                        </button>
                      </div>
                      <EventualityTeacherModal teacher={teacher.ci} />
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

export default EditTeacher;

export async function getServerSideProps({ query }) {
  const { ci } = query;

  const response = await service.find();
  const grades = await JSON.parse(JSON.stringify(response));
  const response2 = await teacherService.findOne(ci);
  const teacher = await JSON.parse(JSON.stringify(response2));

  return {
    props: {
      data: {
        teacher,
        grades,
      },
    },
  };
}
