import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "hooks/useAuth";

import Swal from "sweetalert2";

import styles from "./styles";
import LoginLoader from "Components/Loaders/LoginLoader";
import Link from "next/link";

const LoginForm = () => {
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
    const loginUser = Object.fromEntries([...formData.entries()]);

    console.log(loginUser);
    auth
      .signIn(loginUser)
      .then(() => {
        setState({ loading: false, error: null });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Inicio de sesión exitoso",
          showConfirmButton: false,
          timer: 1500,
        });

        window.location.href = "/admin";
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          setState({ loading: false, error: err });
          Swal.fire({
            icon: "error",
            title: "Oops...",
            // text: error.message,
            text: "Correo o Contraseña incorrectos",
          });
        } else if (err.request) {
          setState({ loading: false, error: err });
          Swal.fire({
            icon: "error",
            text: "Correo o Contraseña incorrectos",
          });
        } else {
          setState({ loading: false, error: err });
          Swal.fire({
            icon: "error",
            text: "No se ha podido conectar con el servidor, comprueba tu internet",
          });
        }
        setState({ loading: false });
      });
  };

  return (
    <>
      <section className="login-background">
        <div className="login">
          <div className="login-container">
            <form
              autoComplete="off"
              className="full-box logInForm"
              onSubmit={submitHandler}
              ref={formRef}
              id="user-form"
            >
              <p className="center-align">
                <i className="zmdi zmdi-account-circle zmdi-hc-2x"></i>
              </p>
              <h2 className="center-align">Inicia sesión con tu cuenta</h2>
              <div className="form-group label-floating">
                <p className="help-block">Correo</p>
                <input
                  className="form-control"
                  id="user-email"
                  type="email"
                  name="email"
                  required
                  placeholder="Correo Electrónico"
                />
              </div>
              <div className="form-group label-floating">
                <p className="help-block">Contraseña</p>
                <input
                  className="form-control"
                  id="user-password"
                  type="password"
                  name="password"
                  required
                  placeholder="Contraseña"
                />
              </div>
              <div className="form-group left-align forgotPassword">
                <Link href="/recovery">
                  <a>Olvidaste tú contraseña?</a>
                </Link>
              </div>
              <div className="form-group center-align">
                <button type="submit" className="sesion-button">
                  {state.loading ? (
                    <LoginLoader
                      color={"#fff"}
                      containerHeight={"15px"}
                      containerWidth={"15px"}
                      border={"3px"}
                      spinnerHeigth={"100%"}
                      spinnerWidth={"100%"}
                      top={"50%"}
                      left={"50%"}
                    />
                  ) : (
                    <span>Iniciar sesión</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
};

export default LoginForm;
