import studentsReport from "Components/Reports/studentsReport";
import nextConnect from "next-connect";
import doPdf from "utils/generate.report";

const handler = nextConnect();

handler.post(async (req, res, next) => {
  try {
    const body = req.body;
    doPdf(studentsReport(body), "reporte.pdf");
    res.status(200).json("PDF creado exitosamente")
  } catch (error) {
    next(error);
  }
});

export default handler;
