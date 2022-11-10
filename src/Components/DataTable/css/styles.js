import css from "styled-jsx/css";

export default css`
  .epa {
    position: absolute;
    width: 800px;
    height: 800px;
    background-color: black;
  }
  .table-title {
    color: red !important;
    font-size: 2.4rem;
  }
  #main-wrapper {
    background-color: black !important;
  }
  .students-table {
    margin: 0 10px 10px 10px;
  }
  .students-table nav {
    height: auto;
    line-height: normal;
  }
  .students-table select {
    display: inline-block !important;
  }
  .students-table header {
    background-color: var(--blue-text);
    border-bottom: 1px rgba(128, 128, 128, 0.295) solid;
  }
  #headerTable-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
  }
  #headerTable-container form {
    display: flex;
    align-items: center;
    height: 35px;
    background-color: transparent;
  }
  #headerTable-container p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-right: 10px;
  }
  #headerTable-container input {
    margin: 0;
    border: 1px blue solid;
    border-radius: 2px;
    padding-left: 10px;
    font-size: 0.9rem;
    height: 85%;
    background-color: white;
  }
  #headerTable-container input[type="text"]:focus {
    box-shadow: none;
  }
  #headerTable-container h2 {
    font-family: "RobotoCondensed";
    /* color: rgb(2, 255, 2); */
    color: white;
    font-size: 1.4rem;
    margin: 0;
  }
  .search-bar {
    display: flex;
    align-items: center;
  }
  .search-bar p {
    margin-top: 0 !important;
  }
  /* .rdt_Pagination button {
  border-right: 1px grey solid;
  border-radius: 0%;
  padding: 0;
  width: 60px;
  height: 40px;
  color: white;
  background-color: rgb(223, 233, 77);
}
.rdt_Pagination i {
  height: 100% !important;
  line-height: 40px !important;
} */
  .rdt_TableHeadRow {
    /* background-color: #FFCE54 !important; */
    color: rgb(31, 128, 255);
    font-size: 1rem;
    font-weight: 500;
    height: 40px;
    padding: 10px;
    font-family: "RobotoCondensed";
  }
  .rdt_TableCol_Sortable img {
    height: 20px;
    width: 20px;
    margin-left: 6px;
  }
  .rdt_TableCol {
    justify-content: center;
    /* max-width: fit-content !important;
  min-width: 50px !important; */
  }
  .rdt_TableCell {
    justify-content: center;
  }
  .rdt_TableCell i {
    color: orange;
  }
  .rdt_TableCell > div {
    text-align: center;
    white-space: normal !important;
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
  }
  .pagination-container {
    margin: 10px 20px;
    background-color: white;
    border-radius: 3px;
  }
  .pagination-container li {
    display: inline-block;
    text-align: center;
    vertical-align: top;
    height: 30px;
  }
  .pagination-container li a {
    font-family: "RobotoCondensed";
    color: black;
    font-weight: 500;
    position: relative;
    display: block;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #dee2e6;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .table-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--blue-text);
  }
  .pagination-button {
    margin-left: 20px;
  }
  .pagination-button a {
    font-family: "Roboto";
    font-family: 400;
    cursor: pointer;
    color: black;
    background-color: white;
    border: none;
    border-radius: 4px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    text-transform: uppercase;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
      0 1px 5px 0 rgb(0 0 0 / 20%);
  }
  .pagination-button a:hover {
    background-color: rgb(247, 59, 59);
  }
  .pagination-container li a:hover {
    color: var(--blue-text);
  }
  .pagination {
    background-color: var(--blue-text);
    margin: 0;
  }
`;
