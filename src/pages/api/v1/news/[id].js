import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { getNewsSchema, updateNewsSchema } from "schemas/newsSchema";
import NewsService from "services/news.service";
import passport from "passport";
import { checkRoles } from "middlewares/auth.handler";

const service = new NewsService();
const handler = nextConnect();
chec;

handler
  .get(validatorHandler(getNewsSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      const news = await service.findOne(id);
      res.json(news);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    passport.authenticate("jwt", { session: false }),
    checkRole("superadmin", "gerencia"),
    validatorHandler(getNewsSchema, "params"),
    validatorHandler(updateNewsSchema, "body"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const body = req.body;
        console.log(body);
        const news = await service.update(id, body);
        res.json(news);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    checkRole("superadmin", "gerencia"),
    validatorHandler(getNewsSchema, "params"),
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
