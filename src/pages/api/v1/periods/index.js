// import passport from "utils/passport";

// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { createPeriodSchema } from "schemas/period.Schema";
import PeriodService from "services/period.service";

const service = new PeriodService();
const handler = nextConnect();

handler
  .get(async (req, res, next) => {
    try {
      const periods = await service.find(req.query);
      res.json(periods);
    } catch (error) {
      next(error);
    }
  })
  .post(
    validatorHandler(createPeriodSchema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newPeriod = await service.create(body);
        res.json(newPeriod);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
