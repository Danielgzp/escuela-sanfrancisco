import passport from "utils/passport";
import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { createUserSchema } from "schemas/user.schema";
import UserService from "services/user.service";
import { verify } from "jsonwebtoken";

const service = new UserService();
const handler = nextConnect();

handler
  .get(
    // bearerHandler(),
    // passport.authenticate("jwt", { session: false }),
    // checkRoles("director"),
    async (req, res, next) => {
      try {
        const users = await service.find(req.query);

        res.json(users);
      } catch (error) {
        next(error);
      }
    }
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin"),
    validatorHandler(createUserSchema, "body"),
    async (req, res, next) => {
      try {
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const body = req.body;
        const newUser = await service.create(body, sub);
        res.json(newUser);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
