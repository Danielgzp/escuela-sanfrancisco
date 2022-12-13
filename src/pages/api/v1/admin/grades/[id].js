import nextConnect from "next-connect";

import { updateGradeSchema, getGradeSchema } from "schemas/grade.schema";
import validatorHandler from "middlewares/validator.handler";
import { checkRoles } from "middlewares/auth.handler";
import GradeService from "services/grade.service";
import passport from "passport";
import { verify } from "jsonwebtoken";

const service = new GradeService();
const handler = nextConnect();

handler
  .get(validatorHandler(getGradeSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      const grade = await service.findOne(id);
      res.json(grade);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .patch(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(getGradeSchema, "params"),
    validatorHandler(updateGradeSchema, "body"),
    async (req, res, next) => {
      try {
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const { id } = req.query;
        const body = req.body;
        const grade = await service.update(id, body, sub);
        res.json(grade);
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(getGradeSchema, "params"),
    async (req, res, next) => {
      try {
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const { id } = req.query;
        await service.delete(id, sub);
        res.status(201).json({ id });
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
  );

export default handler;
