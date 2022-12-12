import validatorHandler from "middlewares/validator.handler";
import nextConnect from "next-connect";
import {
  getRepresentantSchema,
  updateRepresentantSchema,
} from "schemas/representants.schema";
import RepresentantsService from "services/representants.service";

const service = new RepresentantsService();
const handler = nextConnect();

handler
  .get(
    validatorHandler(getRepresentantSchema, "params"),
    async (req, res, next) => {
      try {
        const { ci } = req.query;
        const representant = await service.findOne(ci);
        res.json(representant);
      } catch (error) {
        next(error);
      }
    }
  )
  .patch(
    validatorHandler(getRepresentantSchema, "params"),
    validatorHandler(updateRepresentantSchema, "body"),
    async (req, res, next) => {
      try {
        const { ci } = req.query;
        const body = req.body;
        console.log(body);
        const representant = await service.update(ci, body);
        res.json(representant);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(
    validatorHandler(getRepresentantSchema, "params"),
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
