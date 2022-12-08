// import passport from "utils/passport";

// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import {
  createStudentSchema,
  queryStudentSchema,
} from "schemas/students.schema";
import { checkRoles } from "middlewares/auth.handler";
import StudentsService from "services/students.service";
import passport from "passport";
import { verify } from "jsonwebtoken";

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
        if (req.query.cedulados === "si") {
          const students = await service.filterStudentsCi();
          res.json(students);
        }
        if (req.query.cedulados === "no") {
          const students = await service.filterStudentsNoCi();
          res.json(students);
        }
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
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(createStudentSchema, "body"),
    async (req, res, next) => {
      try {
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const body = req.body;
        const newStudent = await service.create(body, sub);
        res.json(newStudent);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
