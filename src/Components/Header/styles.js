import css from "styled-jsx/css";

// export const globalStyles = css.global`
//   html,
//   body {
//     background-image: radial-gradient(${backgroundColor} 2px, #fdfdfd 3px),
//       radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
//     background-position: 0 0, 25px 25px;
//     background-size: 50px 50px;
//     padding: 0;
//     margin: 0;
//     overflow: hidden;
//     font-family: ${fonts.base};
//   }

//   * {
//     box-sizing: border-box;
//   }

//   textarea,
//   input {
//     font-family: ${fonts.base};
//   }
// `;

export default css`
  header {
    width: 100%;
  }
  header nav {
    background-color: #131313;
    width: 100%;
    line-height: 20px;
    border-bottom: 4px solid red;
    height: 80px;
  }
  .logo-container {
    width: 65%;
    padding-left: 30px;
  }
  .logo-container {
    font-size: 1.2rem;
    padding-left: 15px;
  }
  .logo-container a {
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: white;
  }
  .logo {
    width: 70%;
    height: auto;
  }
  .logo-big {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 40px;
  }
  .logo-big img {
    height: auto;
    width: 35%;
    margin-right: 15px;
  }
  .logo-big span {
    font-size: 18px;
  }
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-wrapper .dropdown-trigger i {
    line-height: 33px;
    height: 0px;
  }
  .nav-navigator__list {
    height: 100%;
  }
  .nav-navigator__list li {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .nav-navigator__list a,
  .nav-navigator__list i {
    height: 80px !important;
    line-height: 80px !important;
  }
  .nav-navigator__list a:hover {
    color: red;
  }
  :focus-visible {
    outline: none !important;
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-width: 1px;
  }
  .dropdown-content {
    width: fit-content !important;
  }
  .dropdown-content li {
    display: block !important;
    height: 0%;
  }
  .dropdown-content li > a {
    color: red;
    line-height: 22px !important;
    height: 100% !important;
  }
  .dropdown-content li > span {
    color: var(--dark-red2);
  }
  .btn-menu__container {
    height: 100%;
    display: none;
  }
  .btn-menu {
    margin: 4px 10px 0 0;
    width: 40px;
    height: 40px;
    border: 2px white solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slide-menu {
    background-color: #131313;
  }
  .slide-menu {
    display: flex;
    flex-direction: column;
    background-color: black;
  }
  .slide-menu li a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .slide-menu li a i:hover {
    color: var(--dark-red2);
  }
  .sidenav-overlay {
    z-index: 998;
  }
  .navbar-fixed {
    z-index: 997;
  }
  .slider-container li a {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.2rem;
    padding: 5px 32px;
    height: fit-content;
  }
  .slider-container .slide-menu li > a > i {
    color: white;
  }
  .slider-container .collapsible-header {
    padding-left: 32px;
  }
  .slider-container .collapsible-body {
    background-color: rgba(0, 0, 0, 0.301);
  }
  .slider-container .collapsible-body li > a {
    font-weight: 400;
  }
  .slider-container .collapsible-body li > a > i {
    margin: 0;
    font-size: 1rem;
  }
  .slider-container .collapsible-body a {
    font-size: 1rem;
    color: white;
  }
  .user-view {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 15px !important;
  }
  .circle {
    border-radius: 0%;
    margin: 0 auto;
  }
  @media (max-width: 888px) {
    .nav-navigator__list {
      display: none;
    }
    .btn-menu__container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .logo-big {
      padding-left: 10px;
      width: 80%;
    }
    .btn-menu__container {
      justify-content: flex-end;
    }
  }
`;
