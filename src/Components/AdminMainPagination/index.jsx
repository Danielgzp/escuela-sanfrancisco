import Link from "next/link";
import React from "react";

const AdminMainPagination = ({ pageName, crudName }) => {
  return (
    <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
        <div className="welcome-text">
          <h4>{pageName}</h4>
        </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/admin">
              <a>Dashboard</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href={`/admin/${pageName.toLowerCase()}`}>
              <a>{pageName}</a>
            </Link>
          </li>
          {crudName && (
            <li className="breadcrumb-item active">
              <Link href="#!">
                <a>{crudName}</a>
              </Link>
            </li>
          )}
        </ol>
      </div>
    </div>
  );
};

export default AdminMainPagination;
