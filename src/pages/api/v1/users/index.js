import passport from "utils/passport";
import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { createUserSchema } from "schemas/user.schema";
import UserService from "services/user.service";

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
    validatorHandler(createUserSchema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newUser = await service.create(body);
        res.json(newUser);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
