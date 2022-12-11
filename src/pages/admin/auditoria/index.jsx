import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

import AdminMainPagination from "Components/AdminMainPagination";
import MyDataTable from "Components/DataTables/MyDataTable";

import endPoints from "utils/endpoints";
import { columns } from "./js/columns";

import LogsService from "services/logs.service";
const service = new LogsService();

const AuditoryPage = ({ countLogs }) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
  });
  const [logs, setLogs] = useState([]);
  const [filterLogs, setFilterLogs] = useState([]);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [totalLogs, setTotalLogs] = useState(countLogs);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    setState({ loading: true, error: null });
    axios
      .get(`${endPoints.logs.getAllLogs}?limit=${limit}&offset=${offset}`)
      .then((response) => {
        setLogs(response.data);
        // setTotalLogs(response.data.length);
        setState({ loading: false, error: null });
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });
  };

  useEffect(() => {
    fetchData();
  }, [limit, offset]);

  useMemo(() => {
    const result = logs.filter((log) => {
      return `${log.user?.email} ${log.table} ${log.action}`
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    // setTotalLogs(result.length);
    setFilterLogs(result);
  }, [logs, search]);

  const handleClickFirstPage = (e) => {
    e.preventDefault();
    setOffset(0);
  };

  const handleClickLastPage = (e) => {
    e.preventDefault();

    setOffset(countLogs - limit);
  };

  const handleSearchButton = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setState({
      loading: true,
      error: null,
    });
    axios
      .get(`${endPoints.logs.getAllLogs}?search=${search}`)
      .then((response) => {
        setState({
          ...state,
          api: response.data,
          filter: state.api,
          loading: false,
          error: null,
        });

        setLogs(response.data);
        setTotalLogs(response.data.length);
      })
      .catch((err) => {
        setState({ loading: false, error: err });
      });
  };

  const clearSearch = (e) => {
    e.preventDefault();
    // setOffset(0);
    setSearch("");
    setTotalLogs(countLogs);
    fetchData();
  };

  const TableHeader = () => {
    return (
      <div id="headerTable-container">
        <div className="search-bar">
          <form onSubmit={handleSearchSubmit} className="tableForm">
            <div className="form-group">
              <label>
                <i className="material-icons">search</i>
                Buscar:
              </label>
              <input
                type="text"
                name="search"
                value={search || ""}
                onChange={handleSearchButton}
                className="z-depth-2"
              />
              {search?.length > 0 && (
                <i
                  className="material-icons clearSearch"
                  onClick={(e) => clearSearch(e)}
                >
                  clear
                </i>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Ir
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <AdminMainPagination pageName={"Auditoria"} />

          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Control de Movimientos</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <MyDataTable
                    filter={filterLogs}
                    tableColumns={columns()}
                    loading={state.loading}
                    firstPage={handleClickFirstPage}
                    lastPage={handleClickLastPage}
                    headerComponent={TableHeader()}
                    setOffset={setOffset}
                    totalItems={totalLogs}
                    itemsPerPage={limit}
                    neighbours={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditoryPage;

export async function getServerSideProps() {
  const countLogs = await service.count();

  return {
    props: { countLogs },
  };
}
