import passport from "utils/passport";

import validatorHandler from "middlewares/validator.handler";
import nextConnect from "next-connect";
import AuthService from "services/auth.service";
import { recoveryAuthSchema } from "schemas/auth.schema";

const service = new AuthService();
// import { createCustomerSchema } from "schemas/customer.schema";
const handler = nextConnect();

handler.post(
  // validatorHandler(createCustomerSchema, "body"),
  validatorHandler(recoveryAuthSchema, "body"),
  async (req, res, next) => {
    try {
      const { email } = req.body;

      //aqui recibe el correo ingresado
      const rta = await service.sendRecoveryPassword(email);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

export default handler;
