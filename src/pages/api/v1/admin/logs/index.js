// import passport from "utils/passport";

// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
// import { createeducationLevelSchema } from "schemas/educationLevel.Schema";
import LogsService from "services/logs.service";

const service = new LogsService();
const handler = nextConnect();

handler
  .get(async (req, res, next) => {
    try {
      if (req.query.search !== undefined) {
        const students = await service.filterLogs(req.query.search);
        res.json(students);
      } else if (req.query !== undefined) {
        const students = await service.find(req.query);
        res.json(students);
      } else {
        const logs = await service.find();
        res.json(logs);
      }
    } catch (error) {
      next(error);
    }
  })
  .post(
    // validatorHandler( "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newLog = await service.create(body);
        res.json(newLog);
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
  );

export default handler;
