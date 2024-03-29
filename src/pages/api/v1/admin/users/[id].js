import passport from "utils/passport";
import { checkRoles } from "middlewares/auth.handler";
import validatorHandler from "middlewares/validator.handler";
import nextConnect from "next-connect";
import { getUserSchema, updateUserSchema } from "schemas/user.schema";
import UserService from "services/user.service";
import { verify } from "jsonwebtoken";

const service = new UserService();
const handler = nextConnect();

handler
  .get(validatorHandler(getUserSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin"),
    validatorHandler(getUserSchema, "params"),
    validatorHandler(updateUserSchema, "body"),
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
        const user = await service.update(id, body, sub);
        res.json(user);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin"),
    validatorHandler(getUserSchema, "params"),
    async (req, res, next) => {
      try {
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        console.log(sub)
        const { id } = req.query;
        await service.delete(id, sub);
        res.status(201).json({ id });
      } catch (error) {
        console.log(error)
        next(error);
      }
    }
  );

export default handler;
