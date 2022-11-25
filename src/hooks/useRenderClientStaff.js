import StaffPDF from "Components/PDF/StaffPDF";
const { PDFDownloadLink } = require("@react-pdf/renderer");
const { useState, useEffect } = require("react");



const RenderPDF = ({ staff }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <PDFDownloadLink
          document={<StaffPDF profile={staff} />}
          fileName={`ficha-${staff.ci}.pdf`}
        >
          <button
            variant="info"
            className="btn btn-danger"
            style={{ marginTop: "10px" }}
          >
            <i className="material-icons">description</i>
            Descargar PDF
          </button>
        </PDFDownloadLink>
      )}
    </>
  );
};

export default RenderPDF;
