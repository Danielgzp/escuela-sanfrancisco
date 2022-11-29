import nextConnect from "next-connect";
import passport from "utils/passport";
import { checkRoles } from "middlewares/auth.handler";
import validatorHandler from "middlewares/validator.handler";
import {
  createNewsSchema,
  getNewsSchema,
  queryNewsSchema,
} from "schemas/newsSchema";
import NewsService from "services/news.service";

const service = new NewsService();
const handler = nextConnect();

handler
  .get(validatorHandler(queryNewsSchema, "query"), async (req, res, next) => {
    try {
      const news = await service.find(req.query);
      res.json(news);
    } catch (error) {
      next(error);
    }
  })
  .post(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(createNewsSchema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newPost = await service.create(body);
        res.json(newPost);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
