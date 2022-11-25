import TeacherPDF from "Components/PDF/TeacherPDF";

const { PDFDownloadLink } = require("@react-pdf/renderer");
const { useState, useEffect } = require("react");

const RenderPDF = ({ teacher }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <PDFDownloadLink
          document={<TeacherPDF profile={teacher} />}
          fileName={`ficha-${teacher.ci}.pdf`}
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
