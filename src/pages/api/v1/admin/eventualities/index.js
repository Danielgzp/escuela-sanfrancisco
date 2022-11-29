import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import EventualityService from "services/eventuality.service";
import { createEventualitychema} from "schemas/eventuality.schema";

const service = new EventualityService();
const handler = nextConnect();

handler
  .get(async (req, res, next) => {
    try {
      const eventuality = await service.find();
      res.json(eventuality);
    } catch (error) {
      next(error);
    }
  })
  .post(
    validatorHandler(createEventualitychema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newEventuality = await service.create(body);
        res.json(newEventuality);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
