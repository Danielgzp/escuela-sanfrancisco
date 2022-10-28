import validatorHandler from "middlewares/validator.handler";
import nextConnect from "next-connect";
import { getUserSchema, updateUserSchema } from "schemas/user.schema";
import UserService from "services/user.service";

const service = new UserService();
const handler = nextConnect();

handler.get(
  // validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { email } = req.query;
      const user = await service.findByEmail(email);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

export default handler;
