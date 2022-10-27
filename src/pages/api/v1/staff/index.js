import nextConnect from "next-connect";

import validatorHandler from "middlewares/validator.handler";
import { createStaffSchema } from "schemas/staff.schema";
import StaffService from "services/staff.service";

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
  .post(validatorHandler(createStaffSchema, "body"), async (req, res, next) => {
    try {
      const body = req.body;
      const newStaff = await service.create(body);
      res.json(newStaff);
    } catch (error) {
      next(error);
    }
  });

export default handler;
