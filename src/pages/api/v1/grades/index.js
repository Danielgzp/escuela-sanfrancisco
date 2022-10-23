import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { createGradeSchema } from "schemas/grade.schema";
import GradeService from "services/Grade.service";

const service = new GradeService();
const handler = nextConnect();

handler
  .get(async (req, res, next) => {
    try {
      const grades = await service.find(req.query);
      res.json(grades);
    } catch (error) {
      next(error);
    }
  })
  .post(validatorHandler(createGradeSchema, "body"), async (req, res, next) => {
    try {
      const body = req.body;
      const newGrade = await service.create(body);
      res.json(newGrade);
    } catch (error) {
      next(error);
    }
  });

export default handler;
