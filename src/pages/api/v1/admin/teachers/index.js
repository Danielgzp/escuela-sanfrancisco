import nextConnect from "next-connect";

import validatorHandler from "middlewares/validator.handler";
import { createTeacherSchema } from "schemas/teacher.schema";
import TeacherService from "services/Teacher.service";

const service = new TeacherService();
const handler = nextConnect();

handler
  .get(async (req, res, next) => {
    try {
      const teacher = await service.find(req.query);
      res.json(teacher);
    } catch (error) {
      next(error);
    }
  })
  .post(
    validatorHandler(createTeacherSchema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newTeacher = await service.create(body);
        res.json(newTeacher);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
