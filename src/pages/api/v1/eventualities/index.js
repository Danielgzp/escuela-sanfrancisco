import nextConnect from "next-connect";
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
      console.log(req.query);
      const news = await service.find(req.query);
      res.json(news);
    } catch (error) {
      next(error);
    }
  })
  .post(validatorHandler(createNewsSchema, "body"), async (req, res, next) => {
    try {
      const body = req.body;
      const newPost = await service.create(body);
      res.json(newPost);
    } catch (error) {
      next(error);
    }
  });

export default handler;
