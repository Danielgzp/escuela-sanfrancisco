import staffReport from "Components/Reports/staff.report";
import moment from "moment";
import nextConnect from "next-connect";
import doPdf from "utils/generate.report";

const handler = nextConnect();
const date = new Date();

handler.post(async (req, res, next) => {
  try {
    const body = req.body;
    doPdf(
      staffReport(body),
      `reporte-personal-${moment(date).format("DD-MM-YYYY")}.pdf`
    );
    res.status(200).json("PDF creado exitosamente");
  } catch (error) {
    next(error);
  }
});

export default handler;
