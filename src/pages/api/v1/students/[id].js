// import passport from "utils/passport";
// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { getStudentSchema, updateStudentSchema } from "schemas/students.schema";
import StudentsService from "services/students.service";

const service = new StudentsService();
const handler = nextConnect();

handler
  .get(validatorHandler(getStudentSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      const student = await service.findOne(id);
      res.json(student);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    validatorHandler(updateStudentSchema, "body"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const body = req.body;
        const student = await service.update(id, body);
        res.json(student);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(
    validatorHandler(getStudentSchema, "params"),
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
