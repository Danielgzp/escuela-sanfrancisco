import css from "styled-jsx/css";

export default css`
  .secundary .text-titles {
    color: white;
  }
  .secundary .user-view .circle {
    border-radius: 50%;
    margin: 0 auto;
    width: 100px;
    height: auto;
  }
  .user-view__container {
    width: 100%;
    height: 100%;
    padding: 16px 16px 0;
    margin: 0 auto;
  }
  .secundary .dashboard-sideBar-UserInfo {
    padding: 0;
    border-top: 0;
  }
  .secundary .dashboard-sideBar-UserInfo ul {
    margin-top: 0;
  }
  .secundary .dashboard-sideBar-UserInfo ul > li > a {
    margin: 0 25px;
    padding: 0;
    font-size: 25px;
  }
  .secundary .dashboard-sideBar-UserInfo ul > li > a > i {
    margin: 0;
  }
  .secundary .show-sideBar-SubMenu {
    overflow: hidden !important;
    /* overflow: scroll; */
  }
  .secundary li > a > i {
    color: white;
    float: inherit;
    margin: 0 10px 0 0;
  }
  .secundary li > a {
    font-size: 16px;
    color: white;
    float: inherit;
    margin: 0 10px 0 0;
  }
  .secundary {
    background-color: black;
    width: 270px;
    transform: translateX(0%);
  }
  .secundary .user-view {
    padding: 0;
    border-bottom: none;
    margin: 0;
  }
  .visible-xs {
    display: none;
  }

  @media (max-width: 767px) {
    .secundary {
      transform: translateX(-105%);
    }
    .visible-xs {
      display: inline-block;
    }
  }
`;
