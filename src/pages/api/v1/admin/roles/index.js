import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { createRoleSchema } from "schemas/role.schema";
import RoleService from "services/role.service";
const service = new RoleService();
const handler = nextConnect();

handler
  .get(async (req, res) => {
    try {
      const role = await service.find(req.query);
      res.json(role);
    } catch (error) {
      console.log(error);
    }
  })
  .post(
    validatorHandler(createRoleSchema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newRole = await service.create(body);
        res.json(newRole);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
