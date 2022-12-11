import css from "styled-jsx/css";

export default css`
  .login-background {
    background-image: url("../../images/loginFont.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 89vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login {
    width: 100%;
    display: flex;
    background-color: rgb(29, 29, 29, 0);
    margin: 0 auto;
    justify-content: center;
    border-radius: 20px;
    height: 500px;
  }
  .login-container {
    width: 100%;
    padding: 10px 15px;
  }
  .logInForm {
    position: absolute;
    color: red;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 275px;
    padding: 15px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .logInForm p,
  .logInForm label {
    color: #fff;
  }
  .logInForm .material-icons{
    font-size: 3rem;
  }
  .logInForm h2 {
    color: #fff;
    margin-top: 10px;
    text-align: center;
    font-size: 1.8rem;
    letter-spacing: 0.5px;
  }
  .logInForm input {
    padding-left: 20px;
    width: 95%;
  }
  .logInForm p {
    color: #fff;
    font-size: 1.2rem;
  }
  .login-div {
    border-radius: 0px;
  }
  #user-form input {
    color: white;
  }
  #user-form input:focus {
    border: none !important;
    box-shadow: 0 1px 0 0 red !important;
  }
  .sesion-button {
    border: 1px red solid;
    display: flex;
    background-color: red;
    width: 100%;
    height: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 1.4rem;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
  }
  .sesion-button:hover {
    background-color: #ff00007e;
  }
  .forgotPassword {
    margin-top: 15px;
    margin-bottom: 5px;
  }
  .forgotPassword a {
    text-decoration: underline;

    color: #fff;
  }

  @media (min-width: 767px) {
    .logInForm {
      transform: translate(-50%, -50%);
      max-width: 375px;
    }
    .sesion-button {
      width: 100%;
      height: 40px;
    }
  }
  @media (min-width: 1024px) {
    .logInForm {
      max-width: 450px;
      padding: 25px;
    }
    .sesion-button {
      width: 100%;
      height: 45px;
    }
  }
`;
