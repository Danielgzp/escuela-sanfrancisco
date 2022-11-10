// import passport from "utils/passport";

// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { createStudentSchema, queryStudentSchema } from "schemas/students.schema";
import StudentsService from "services/students.service";

const service = new StudentsService();
const handler = nextConnect();

handler
  .get(validatorHandler(queryStudentSchema, 'query'), async (req, res) => {
    try {
      console.log(req.query)
      const students = await service.find(req.query);
      res.json(students);
    } catch (error) {
      console.log(error);
    }
  })
  .post(
    validatorHandler(createStudentSchema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newStudent = await service.create(body);
        res.json(newStudent);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
