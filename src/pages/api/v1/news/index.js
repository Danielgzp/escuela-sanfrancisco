import nextConnect from "next-connect";
import passport from "utils/passport";
import { checkRoles } from "middlewares/auth.handler";
import validatorHandler from "middlewares/validator.handler";
import { createNewsSchema } from "schemas/newsSchema";
import NewsService from "services/news.service";
import { errorHandler } from "middlewares/error.handler";
import { verify } from "jsonwebtoken";

const service = new NewsService();
const handler = nextConnect();

handler
  .get(async (req, res, next) => {
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
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const body = req.body;
        const newPost = await service.create(body, sub);

        res.status(201).json(newPost);
      } catch (error) {
        res.status(500).json("Ha ocurrido un error");
      }
    }
  );

export default handler;
