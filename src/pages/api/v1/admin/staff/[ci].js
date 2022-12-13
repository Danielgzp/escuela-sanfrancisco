import passport from "utils/passport";
import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { getStaffSchema, updateStaffSchema } from "schemas/staff.schema";
import StaffService from "services/staff.service";
import { verify } from "jsonwebtoken";

const service = new StaffService();
const handler = nextConnect();

handler
  .get(validatorHandler(getStaffSchema, "params"), async (req, res, next) => {
    try {
      const { ci } = req.query;
      const staff = await service.findOne(ci);
      res.json(staff);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .patch(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(getStaffSchema, "params"),
    validatorHandler(updateStaffSchema, "body"),
    async (req, res, next) => {
      try {
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const { ci } = req.query;
        const body = req.body;
        const staff = await service.update(ci, body, sub);
        res.json(staff);
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(getStaffSchema, "params"),
    async (req, res, next) => {
      try {
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const { ci } = req.query;
        await service.delete(ci, sub);
        res.status(201).json({ ci });
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
  );

export default handler;
