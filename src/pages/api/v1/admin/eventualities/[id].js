import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import EventualityService from "services/eventuality.service";
import {
  getEventualitychema,
  updateEventualitychema,
} from "schemas/eventuality.schema";

const service = new EventualityService();
const handler = nextConnect();

handler
  .get(
    validatorHandler(getEventualitychema, "params"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const eventuality = await service.findOne(id);
        res.json(eventuality);
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
  )
  .patch(
    validatorHandler(getEventualitychema, "params"),
    validatorHandler(updateEventualitychema, "body"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const body = req.body;
        console.log(body);
        const eventuality = await service.update(id, body);
        res.json(eventuality);
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
  )
  .delete(
    validatorHandler(getEventualitychema, "params"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        await service.delete(id);
        res.status(201).json({ id });
      } catch (error) {
        console.log(error);
        next(error);
      }
    }
  );

export default handler;
