import nextConnect from "next-connect";
import RepresentantsService from "services/representants.service";

const service = new RepresentantsService();
const handler = nextConnect();

handler
  .get(async (req, res, next) => {
    try {
      const { ci } = req.query;
      const representant = await service.findOne(ci);
      res.json(representant);
    } catch (error) {
      next(error);
    }
  })
  .patch(async (req, res, next) => {
    try {
      const { ci } = req.query;
      const body = req.body;
      console.log(body);
      const representant = await service.update(ci, body);
      res.json(representant);
    } catch (error) {
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { ci } = req.query;
      await service.delete(ci);
      res.status(201).json({ ci });
    } catch (error) {
      next(error);
    }
  });

export default handler;
