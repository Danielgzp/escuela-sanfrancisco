// import passport from "utils/passport";
// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { getStaffSchema, updateStaffSchema } from "schemas/staff.schema";
import StaffService from "services/staff.service";

const service = new StaffService();
const handler = nextConnect();

handler
  .get(validatorHandler(getStaffSchema, "params"), async (req, res, next) => {
    try {
      const { ci } = req.query;
      const staff = await service.findOne(ci);
      res.json(staff);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    validatorHandler(getStaffSchema, "params"),
    validatorHandler(updateStaffSchema, "body"),
    async (req, res, next) => {
      try {
        const { ci } = req.query;
        const body = req.body;
        const staff = await service.update(ci, body);
        res.json(staff);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(
    validatorHandler(getStaffSchema, "params"),
    async (req, res, next) => {
      try {
        const { ci } = req.query;
        await service.delete(ci);
        res.status(201).json({ ci });
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
