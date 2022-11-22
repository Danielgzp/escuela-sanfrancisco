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
  .logInForm h2 {
    color: #fff;
    margin-top: 10px;
    text-align: center;
    font-size: 2rem;
    letter-spacing: 0.5px;
  }
  .logInForm input {
    padding-left: 20px;
    width: 95%;
  }
  .logInForm p {
    color: #fff;
    font-size: 1.4rem;
  }
  .login-div {
    border-radius: 0px;
  }
  #user-form input {
    color: white;
  }
  .sesion-button {
    display: flex;
    background-color: red;
    width: 250px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border: 2px black solid;
    border-radius: 7px;
    position: relative;
    top: 20px;
    left: calc(50% - 125px);
    cursor: pointer;
    color: white;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    margin-bottom: 50px;
  }
`;
