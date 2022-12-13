import nextConnect from "next-connect";

import { updatePeriodSchema, getPeriodSchema } from "schemas/period.Schema";
import validatorHandler from "middlewares/validator.handler";
import PeriodService from "services/period.service";

const service = new PeriodService();
const handler = nextConnect();

handler
  .get(validatorHandler(getPeriodSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      const period = await service.findOne(id);
      res.json(period);
    } catch (error) { console.log(error);
      next(error);
    }
  })
  .patch(
    validatorHandler(getPeriodSchema, "params"),
    validatorHandler(updatePeriodSchema, "body"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const body = req.body;
        const period = await service.update(id, body);
        res.json(period);
      } catch (error) { console.log(error);
        next(error);
      }
    }
  )
  .delete(
    validatorHandler(getPeriodSchema, "params"),
    async (req, res, next) => {
      try {
        const { id } = req.query;

        await service.delete(id);
        res.status(201).json({ id });
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
  );

export default handler;
