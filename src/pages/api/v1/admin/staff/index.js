import nextConnect from "next-connect";
import passport from "utils/passport";

import validatorHandler from "middlewares/validator.handler";
import { createStaffSchema } from "schemas/staff.schema";
import StaffService from "services/staff.service";
import { verify } from "jsonwebtoken";
import { checkRoles } from "middlewares/auth.handler";

const service = new StaffService();
const handler = nextConnect();

handler
  .get(async (req, res) => {
    try {
      const staff = await service.find(req.query);
      res.json(staff);
    } catch (error) {
      console.log(error);
    }
  })
  .post(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(createStaffSchema, "body"),
    async (req, res, next) => {
      try {
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const body = req.body;
        const newStaff = await service.create(body, sub);
        res.json(newStaff);
      } catch (error) {
         console.log(error);
        next(error);
      }
    }
  );

export default handler;
