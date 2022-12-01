import Link from "next/link";
import React from "react";

const TableHeader = ({ grades, handleSubmit, formRef }) => {
  return (
    <div id="headerTable-container">
      <form onSubmit={handleSubmit} ref={formRef} className="tableForm">
        <div className="form-group">
          <label>Selecciona el grado</label>
          <select name="name" className="form-control">
            <option value="">Grado</option>
            {grades.map((grade) => (
              <option
                key={grade.id}
                value={`${grade.name}`}
              >{`${grade.name}`}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Selecciona la seccion</label>
          <select name="section" className="form-control">
            <option value="">Seccion</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default TableHeader;
