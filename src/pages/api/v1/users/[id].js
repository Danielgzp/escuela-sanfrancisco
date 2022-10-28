import validatorHandler from "middlewares/validator.handler";
import nextConnect from "next-connect";
import { getUserSchema, updateUserSchema } from "schemas/user.schema";
import UserService from "services/user.service";

const service = new UserService();
const handler = nextConnect();

handler
  .get(validatorHandler(getUserSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    validatorHandler(getUserSchema, "params"),
    validatorHandler(updateUserSchema, "body"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const body = req.body;
        const user = await service.update(id, body);
        res.json(user);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(validatorHandler(getUserSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  });

export default handler;
