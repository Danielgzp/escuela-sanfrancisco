import passport from "utils/passport";
import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { getStudentSchema, updateStudentSchema } from "schemas/students.schema";
import StudentsService from "services/students.service";

import { verify } from "jsonwebtoken";

const service = new StudentsService();
const handler = nextConnect();

handler
  .get(validatorHandler(getStudentSchema, "params"), async (req, res, next) => {
    try {
      const { ci } = req.query;
      console.log(req.query);
      const student = await service.findOne(ci);
      res.json(student);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(getStudentSchema, "params"),
    validatorHandler(updateStudentSchema, "body"),
    async (req, res, next) => {
      try {
        const { ci } = req.query;
        const body = req.body;
        console.log(body)
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const student = await service.update(ci, body, sub);
        res.json(student);
      } catch (error) {
        next(error);
        console.log(error)
      }
    }
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(getStudentSchema, "params"),
    async (req, res, next) => {
      try {
        const { ci } = req.query;
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        await service.delete(ci, sub);
        res.status(201).json({ ci });
      } catch (error) {
        next(error);
        console.log(error);
      }
    }
  );

export default handler;
