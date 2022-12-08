// import passport from "utils/passport";
// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { getTeacherSchema, updateTeacherSchema } from "schemas/teacher.schema";
import { checkRoles } from "middlewares/auth.handler";
import TeacherService from "services/teacher.service";
import { verify } from "jsonwebtoken";
import passport from "passport";

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
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(getTeacherSchema, "params"),
    validatorHandler(updateTeacherSchema, "body"),
    async (req, res, next) => {
      try {
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const { ci } = req.query;
        const body = req.body;
        const teacher = await service.update(ci, body, sub);
        res.json(teacher);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(getTeacherSchema, "params"),
    async (req, res, next) => {
      try {
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const { ci } = req.query;
        await service.delete(ci, sub);
        res.status(201).json({ ci });
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
