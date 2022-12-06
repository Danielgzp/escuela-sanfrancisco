import DataTable from "react-data-table-component";
import LoginLoader from "Components/Loaders/LoginLoader";
import { useCallback, useState, useMemo } from "react";

const ReportDataTable = ({
  actionsComponent,
  tableHeaderComponent,
  data,
  columns,
  loading,
  tableTitle,
  // handleDelete,
}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [items, setItems] = useState(data);

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.name
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setItems(differenceBy(data, selectedRows, "name"));
      }
    };
    

    return (
      <button
        className="btn btn-danger"
        key="delete"
        onClick={handleDelete}
        style={{ backgroundColor: "red" }}
        icon
      >
        Delete
      </button>
    );
  }, [data, selectedRows, toggleCleared]);
  return (
    <>
      <DataTable
        dense
        direction="auto"
        highlightOnHover={true}
        columns={columns}
        data={data}
        actions={actionsComponent}
        striped={true}
        title={tableTitle}
        fixedHeader
        fixedHeaderScrollHeight="700px"
        noDataComponent={
          <h3 style={{ marginTop: "30px", marginBottom: "15px" }}>
            No se encontro ningun elemento
          </h3>
        }
        progressPending={loading}
        progressComponent={
          <LoginLoader
            color={"#143b64"}
            containerHeight={"30px"}
            containerWidth={"30px"}
            border={"4px"}
            spinnerHeigth={"75px"}
            spinnerWidth={"50px"}
            top={"50%"}
            left={"25px"}
          />
        }
        pagination
        subHeader
        subHeaderComponent={tableHeaderComponent}
        persistTableHead
        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
      />
    </>
  );
};

export default ReportDataTable;
