// import passport from "utils/passport";

// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import {
  createStudentSchema,
  queryStudentSchema,
} from "schemas/students.schema";
import StudentsService from "services/students.service";

const service = new StudentsService();
const handler = nextConnect();

handler
  .get(async (req, res) => {
    try {
      if (req.query.level !== undefined) {
        const students = await service.findByLevel(req.query, req.query.level);
        res.json(students);
      }
      if (
        req.query.filterGrade !== undefined &&
        req.query.section !== undefined
      ) {
        const students = await service.findByGrade(
          req.query.filterGrade,
          req.query.section
        );
        res.json(students);
      }
      if (req.query.search !== undefined) {
        const students = await service.filterStudents(req.query.search);
        res.json(students);
      }
      if (req.query.cedulados !== undefined) {
        const students = await service.filterStudentsCi();
        res.json(students);
      }
      if (req.query !== undefined) {
        const students = await service.find(req.query);
        res.json(students);
      } else {
        const students = await service.find();

        res.json(students);
      }
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
