// import passport from "utils/passport";
// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { getSectionSchema, updateSectionSchema } from "schemas/section.schema";
import SectionService from "services/section.service";

const service = new SectionService();
const handler = nextConnect();

handler
  .get(validatorHandler(getSectionSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      const section = await service.findOne(id);
      res.json(section);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    validatorHandler(getSectionSchema, "params"),
    validatorHandler(updateSectionSchema, "body"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const body = req.body;
        const section = await service.update(id, body);
        res.json(section);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(
    validatorHandler(getSectionSchema, "params"),
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
