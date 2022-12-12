import nextConnect from "next-connect";
import passport from "utils/passport";
import validatorHandler from "middlewares/validator.handler";
import { checkRoles } from "middlewares/auth.handler";
import { createTeacherSchema } from "schemas/teacher.schema";
import TeacherService from "services/Teacher.service";
import { verify } from "jsonwebtoken";
// import passport from "passport";

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
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(createTeacherSchema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const newTeacher = await service.create(body, sub);
        res.json(newTeacher);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
