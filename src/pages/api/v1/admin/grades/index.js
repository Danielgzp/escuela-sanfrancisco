import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { checkRoles } from "middlewares/auth.handler";
import { createGradeSchema } from "schemas/grade.schema";
import GradeService from "services/Grade.service";
import { verify } from "jsonwebtoken";
import passport from "passport";

const service = new GradeService();
const handler = nextConnect();

handler
  .get(async (req, res, next) => {
    try {
      const grades = await service.find(req.query);
      res.json(grades);
    } catch (error) {
      next(error);
    }
  })
  .post(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(createGradeSchema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const newGrade = await service.create(body, sub);
        res.json(newGrade);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
