import nextConnect from "next-connect";
import RepresentantsService from "services/representants.service";

const service = new RepresentantsService();
const handler = nextConnect();

handler
  .get(async (req, res, next) => {
    try {
      const { id } = req.query;
      const representant = await service.findOne(id);
      res.json(representant);
    } catch (error) {
      next(error);
    }
  })
  .patch(async (req, res, next) => {
    try {
      const { id } = req.query;
      const body = req.body;
      const representant = await service.update(id, body);
      res.json(representant);
    } catch (error) {
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { id } = req.query;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  });

export default handler;
