import studentsCi from "Components/Reports/students.ci.report";
import studentsReport from "Components/Reports/studentsReport";
import moment from "moment";
import nextConnect from "next-connect";
import doPdf from "utils/generate.report";

const handler = nextConnect();
const date = new Date();

handler.post(async (req, res, next) => {
  try {
    const body = req.body;
    if (req.query.cedulados !== undefined) {
      doPdf(
        studentsCi(body),
        `reporteCI-estudiantes${moment(date).format("DD-MM-YYYY")}.pdf`
      );
      res.status(200).json("PDF creado exitosamente en la carpeta de reportes");
    } else {
      doPdf(
        studentsReport(body),
        `reporte-estudiantes-${moment(date).format("DD-MM-YYYY")}.pdf`
      );
      res.status(200).json("PDF creado exitosamente en la carpeta de reportes");
    }
  } catch (error) {
    next(error);
  }
});

export default handler;
