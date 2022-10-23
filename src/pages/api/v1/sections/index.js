import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { createSectionSchema } from "schemas/section.schema";
import SectionService from "services/section.service";

const service = new SectionService();
const handler = nextConnect();

handler
  .get(async (req, res) => {
    try {
      const section = await service.find(req.query);
      res.json(section);
    } catch (error) {
      console.log(error);
    }
  })
  .post(
    validatorHandler(createSectionSchema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newSection = await service.create(body);
        res.json(newSection);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
