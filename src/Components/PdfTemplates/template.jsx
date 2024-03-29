import React from "react";

const template = () => {
  return (
    <>
      <div
        id="pageHeader"
        style="border-bottom: 1px solid #ddd; padding-bottom: 5px"
      >
        <p>Anartz - Ejemplo de cabecera en HTML PDF</p>
      </div>
      <div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px">
        <p
          style="
          color: #666;
          width: 70%;
          margin: 0;
          padding-bottom: 5px;
          text-align: let;
          font-family: sans-serif;
          font-size: 0.65em;
          float: left;
        "
        >
          <a href="https://anartz-mugika.com">https://anartz-mugika.com</a>
        </p>
        <p
          style="
          color: #666;
          margin: 0;
          padding-bottom: 5px;
          text-align: right;
          font-family: sans-serif;
          font-size: 0.65em;
        "
        >
          Página {{ page }} de {{ pages }}
        </p>
      </div>
      <h1>Tutorial en Youtube - Ejemplo 4 - Template</h1>
      <p>Utilizamos gneración desde un template</p>
      <style>{`
      h1 {
        color: green;
        text-decoration: underline;
      }
      `}</style>
    </>
  );
};

export default template;
