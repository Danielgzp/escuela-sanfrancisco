import DataTable from "react-data-table-component";
import LoginLoader from "Components/Loaders/LoginLoader";

const ReportDataTable = ({
  actionsComponent,
  tableHeaderComponent,
  data,
  columns,
  loading,
  tableTitle,
}) => {
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
      />
    </>
  );
};

export default ReportDataTable;
