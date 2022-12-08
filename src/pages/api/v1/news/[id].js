import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { getNewsSchema, updateNewsSchema } from "schemas/newsSchema";
import NewsService from "services/news.service";
import passport from "passport";
import { checkRoles } from "middlewares/auth.handler";
import { verify } from "jsonwebtoken";

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
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        const news = await service.update(id, body, sub);
        res.json(news);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    checkRoles("superadmin", "gerencia"),
    validatorHandler(getNewsSchema, "params"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const authorization = req.headers.authorization;

        const userAuthorization = verify(
          authorization.slice(7),
          process.env.JWT_SECRET
        );

        const { sub } = userAuthorization;
        await service.delete(id, sub);
        res.status(201).json({ id });
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
