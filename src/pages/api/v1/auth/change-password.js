import passport from "utils/passport";

import validatorHandler from "middlewares/validator.handler";
import nextConnect from "next-connect";
import AuthService from "services/auth.service";
import { changePasswordAuthSchema } from "schemas/auth.schema";

const service = new AuthService();
// import { createCustomerSchema } from "schemas/customer.schema";
const handler = nextConnect();

handler.post(
  // validatorHandler(createCustomerSchema, "body"),
  validatorHandler(changePasswordAuthSchema, "body"),
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;

      const rta = await service.changePassword(token, newPassword);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

export default handler;
