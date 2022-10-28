import passport from "utils/passport";

// import validatorHandler from "middlewares/validator.handler";
import nextConnect from "next-connect";
import AuthService from "services/auth.service";

const service = new AuthService();
// import { createCustomerSchema } from "schemas/customer.schema";
const handler = nextConnect();

handler.post(
  // validatorHandler(createCustomerSchema, "body"),
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      //Firmamos el token con nuestro servicio Auth

      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

export default handler;
