// import passport from "utils/passport";
// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { getTeacherSchema, updateTeacherSchema } from "schemas/teacher.schema";
import TeacherService from "services/teacher.service";

const service = new TeacherService();
const handler = nextConnect();

handler
  .get(validatorHandler(getTeacherSchema, "params"), async (req, res, next) => {
    try {
      const { ci } = req.query;
      const teacher = await service.findOne(ci);
      res.json(teacher);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    validatorHandler(getTeacherSchema, "params"),
    validatorHandler(updateTeacherSchema, "body"),
    async (req, res, next) => {
      try {
        const { ci } = req.query;
        const body = req.body;
        const Teacher = await service.update(ci, body);
        res.json(teacher);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(
    validatorHandler(getteacherSchema, "params"),
    async (req, res, next) => {
      try {
        const { ci } = req.query;
        await service.delete(ci);
        res.status(201).json({ ci });
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
