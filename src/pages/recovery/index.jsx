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

const RecoveryPage = () => {
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
    const userEmail = Object.fromEntries([...formData.entries()]);

    console.log(userEmail);
    axios
      .post(endPoints.auth.recovery, userEmail)
      .then(() => {
        setState({ loading: false, error: null });
        Swal.fire({
          position: "center",
          icon: "success",
          title:
            "Hemos enviado un link a tu correo para recuperar la contraseña",
          showConfirmButton: true,
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.status === 401) {
          setState({ loading: false, error: err });
          Swal.fire({
            icon: "error",
            title: "Oops...",
            // text: error.message,
            text: "Este correo es inexistente",
          });
        } else if (err.request) {
          setState({ loading: false, error: err });
          Swal.fire({
            icon: "error",
            text: "Usuario no encontrado",
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
              <label>
                <strong>Correo Electrónico</strong>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div className="text-center center">
              <button type="submit" className="btn btn-red">
                {state.loading ? (
                  <LoginLoader
                    color={"#fff"}
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

export default RecoveryPage;
