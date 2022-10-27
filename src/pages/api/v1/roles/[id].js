import nextConnect from "next-connect";

import { updateRoleSchema, getRoleSchema } from "schemas/role.schema";
import validatorHandler from "middlewares/validator.handler";
import RoleService from "services/role.service";

const service = new RoleService();
const handler = nextConnect();

handler
  .get(validatorHandler(getRoleSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      const Role = await service.findOne(id);
      res.json(Role);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    validatorHandler(getRoleSchema, "params"),
    validatorHandler(updateRoleSchema, "body"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const body = req.body;
        const role = await service.update(id, body);
        res.json(role);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(
    validatorHandler(getRoleSchema, "params"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        await service.delete(id);
        res.status(201).json({ id });
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
