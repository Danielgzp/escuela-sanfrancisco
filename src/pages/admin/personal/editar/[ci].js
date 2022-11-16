import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { loadScripts } from "utils/loadScripts";
import axios from "axios";
import endPoints from "utils/endpoints";
import AdminMainPagination from "Components/AdminMainPagination";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import EventualityTeacherModal from "Components/Modal/EventualityTeacherModal";

const EditStaff = ({ data }) => {
  const { roles, staff } = data;
  const formRef = useRef(null);
  const router = useRouter();
  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const editStaff = {
      ci: objectData.ci,
      name: objectData.name,
      lastName: objectData.lastName,
      address: objectData.address,
      birthDate: objectData.birthDate,
      gender: objectData.gender,
      admissionDate: objectData.admissionDate,
      birthPlace: objectData.birthPlace,
      phone: objectData.phone,
      roleId: objectData.role,
      user: {
        email: objectData.email,
        password: objectData.password,
      },
    };

    setState({ loading: true, error: null });
    console.log(editStaff);
    axios
      .patch(endPoints.staff.updateStaff(staff.ci), editStaff)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha actualizado exitosamente el Staff",
          showConfirmButton: false,
          timer: 1500,
        });
        setState({ loading: false, error: null });
        router.push("/admin");
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
    loadScripts();
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
                            defaultValue={staff.name}
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
                            defaultValue={staff.lastName}
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
                            defaultValue={staff.ci}
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
                            defaultValue={staff.address}
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
                            className="datepicker-default form-control"
                            id="datepicker"
                            defaultValue={staff.admissionDate}
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
                            defaultValue={staff.birthDate}
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
                            defaultValue={staff.birthPlace}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Role/Cargo</label>
                          <select name="role" className="form-control">
                            <option defaultValue={staff.role.id}>
                              {staff.role.name}
                            </option>
                            {roles.map((role) => (
                              <option
                                key={role.id}
                                value={`${role.id}`}
                              >{`${role.name}`}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Género</label>
                          <select name="gender" className="form-control">
                            <option defaultValue={staff.gender}>
                              {staff.gender}
                            </option>
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
                            defaultValue={staff.phone}
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
                            defaultValue={staff.user.email}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            defaultValue={staff.user.password}
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
                          Submit
                        </button>
                        <button type="submit" className="btn btn-light">
                          Cancelar
                        </button>
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target={`#eventuality-${staff.ci}`}
                          className="btn btn-primary mr-3"
                        >
                          <span className="mr-3">
                            <i className="fa fa-pencil"></i>
                          </span>
                          Agregar Eventualidad
                        </button>
                        <EventualityTeacherModal staff={staff.ci} />
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

export default EditStaff;

export async function getServerSideProps({ query }) {
  const { ci } = query;

  try {
    const response = await axios.get(endPoints.staff.getStaff(ci));
    const staff = await JSON.parse(JSON.stringify(response.data));
    const response2 = await axios.get(endPoints.roles.getAllRoles);
    const roles = await JSON.parse(JSON.stringify(response2.data));

    return {
      props: { data: { staff, roles } },
    };
  } catch (error) {
    return { props: { data: error.message } };
  }
}
