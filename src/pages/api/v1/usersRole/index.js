import passport from "utils/passport";
import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { createUserSchema } from "schemas/user.schema";
import UsersRoleService from "services/users.role.service";

const service = new UsersRoleService();
const handler = nextConnect();

handler.get(
  // bearerHandler(),
  // passport.authenticate("jwt", { session: false }),
  // checkRoles("director"),
  async (req, res, next) => {
    try {
      const usersRole = await service.find(req.query);

      res.json(usersRole);
    } catch (error) {
      next(error);
    }
  }
);

export default handler;
