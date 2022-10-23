import nextConnect from "next-connect";

import { updateGradeSchema, getGradeSchema } from "schemas/grade.schema";
import validatorHandler from "middlewares/validator.handler";
import GradeService from "services/grade.service";

const service = new GradeService();
const handler = nextConnect();

handler
  .get(validatorHandler(getGradeSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      const grade = await service.findOne(id);
      res.json(grade);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    validatorHandler(getGradeSchema, "params"),
    validatorHandler(updateGradeSchema, "body"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const body = req.body;
        const grade = await service.update(id, body);
        res.json(grade);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(
    validatorHandler(getGradeSchema, "params"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        await service.delete(id);
        res.status(201).json({ id });
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
