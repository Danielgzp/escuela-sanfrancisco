import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "hooks/useAuth";

import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

import LoginLoader from "Components/Loaders/LoginLoader";
import Loading from "Components/Loaders/Loading";
import endPoints from "utils/endpoints";
import "./css/styles.css";

const ChangePassword = ({ data }) => {
  const { token } = data;
  const formRef = useRef(null);
  const router = useRouter();
  const auth = useAuth();
  const [state, setState] = useState({
    loading: false,
    error: null,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    setState({ loading: true, error: null });
    const formData = new FormData(formRef.current);
    const objectData = Object.fromEntries([...formData.entries()]);
    const changePassword = {
      newPassword: objectData.newPassword,
      token: token,
    };

    console.log(changePassword);
    if (changePassword.newPassword !== objectData.confirmNewPassword) {
      setState({ loading: false, error: null });
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        // text: error.message,
        text: "Las contraseñas deben coincidir",
      });
    }

    axios
      .post(endPoints.auth.changePassword, changePassword)
      .then(() => {
        setState({ loading: false, error: null });
        Swal.fire({
          icon: "success",
          title: "Se ha cambiado exitosamente la contraseña",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.status === 500) {
          setState({ loading: false, error: err });
          Swal.fire({
            icon: "error",
            title: "Oops...",
            // text: error.message,
            text: "El link de recuperación ha expirado",
          });
        } else if (err.request) {
          setState({ loading: false, error: err });
          Swal.fire({
            icon: "error",
            text: err.message,
          });
        } else {
          setState({ loading: false, error: err });
          Swal.fire({
            icon: "error",
            text: err.message,
          });
        }
        setState({ loading: false });
      });

    /*axios
      .post("http://localhost:3000/api/v1/auth/login", loginUser)
      .then((resp) => {
        const token = resp.data.token;
        Cookies.set("tokenJWT", token, { expires: 5 });
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        console.log(resp.data);
        console.log(token);
        // window.localStorage.setItem("loggedNoteAppUser", resp.data.token);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Loggin Successfull",
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
          // text: error.message,
          text: "Correo o Contraseña incorrectos",
        });
        console.log(error);
        setState({ loading: false, error: null });
      });

      */
  };
  return (
    <div className="recoveryPassword">
      <div className="recoveryContainer">
        <div className="formHeader">
          <span>
            <i className="material-icons">email</i>
          </span>
          <h4>Ingresa tu correo para poder recuperar la contraseña</h4>
        </div>
        <div className="formContainer">
          <form ref={formRef} onSubmit={submitHandler} className="formRecovery">
            <div className="form-group">
              <label>Nueva Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="newPassword"
                required
              />
            </div>
            <div className="form-group">
              <label>Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="confirmNewPassword"
                required
              />
            </div>
            <div className="text-center center">
              <button type="submit" className="btn btn-red">
                {state.loading ? (
                  <LoginLoader
                    containerHeight={"15px"}
                    containerWidth={"15px"}
                    border={"2px"}
                    spinnerHeigth={"100%"}
                    spinnerWidth={"100%"}
                    top={"50%"}
                    left={"50%"}
                  />
                ) : (
                  <span>Enviar</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;

export async function getServerSideProps({ query, req }) {
  const { token } = query;

  return {
    props: {
      data: { token },
    },
  };
}
