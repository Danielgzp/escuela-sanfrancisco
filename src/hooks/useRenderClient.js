const { PDFDownloadLink } = require("@react-pdf/renderer");
const { useState, useEffect } = require("react");
const { default: MakePDF } = require("utils/pdfMaker");

const RenderPDF = ({ student }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <PDFDownloadLink
          document={<MakePDF profile={student} />}
          fileName="perfil.pdf"
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
