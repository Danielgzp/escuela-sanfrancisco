import reportHeader from "Components/Reports/reportHeader";
import studentsReport from "Components/Reports/studentsReport";
import nextConnect from "next-connect";

import dbex from "services/export.database";
import backup from "utils/export.database";
import doPdf from "utils/generate.report";
import templateHeader from "utils/template";

const handler = nextConnect();

handler
  .get(
    // bearerHandler(),
    // passport.authenticate("jwt", { session: false }),
    // checkRoles("director"),
    async (req, res, next) => {
      doPdf();
      // dbex
      //   .export("school_data_backup.sql")
      //   .then((path) => {
      //     console.log(`exported successfully to "${path}!"`);
      //   })
      //   .catch((err) => {
      //     console.log("got ERROR", err);
      //   });
    }
  )
  .post(
    // passport.authenticate("jwt", { session: false }),
    async (req, res, next) => {
      try {
        const body = req.body;
        console.log(body);
        doPdf(studentsReport(body), "reporte.pdf");
        res.status(200).json("Funciona");
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
