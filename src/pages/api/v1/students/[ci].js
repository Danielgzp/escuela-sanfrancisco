// import passport from "utils/passport";
// import { checkRoles } from "mcidlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { getStudentSchema, updateStudentSchema } from "schemas/students.schema";
import StudentsService from "services/students.service";

const service = new StudentsService();
const handler = nextConnect();

handler
  .get(validatorHandler(getStudentSchema, "params"), async (req, res, next) => {
    try {
      const { ci } = req.query;
      console.log(req.query)
      const student = await service.findOne(ci);
      res.json(student);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    validatorHandler(getStudentSchema, "params"),
    validatorHandler(updateStudentSchema, "body"),
    async (req, res, next) => {
      try {
        const { ci } = req.query;
        const body = req.body;
        console.log(body)
        const student = await service.update(ci, body);
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
        const { ci } = req.query;
        await service.delete(ci);
        res.status(201).json({ ci });
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
