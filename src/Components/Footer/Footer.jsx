import React from "react";

// import { StyleFooter } from "./styles";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <p className="center-align white-text">
            U.E Fe y Alegría San Francisco 2022-2023 © Copyright
          </p>
        </div>
        <style jsx>{`
          footer {
            background-color: #131313;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: -20px;
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;
