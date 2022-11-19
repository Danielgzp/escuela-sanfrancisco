// import passport from "utils/passport";

// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
// import { createeducationLevelSchema } from "schemas/educationLevel.Schema";
import EducationLevelService from "services/education.level.service";

const service = new EducationLevelService();
const handler = nextConnect();

handler
  .get(async (req, res, next) => {
    try {
      const educationLevels = await service.find(req.query);

      res.json(educationLevels);
    } catch (error) {
      next(error);
    }
  })
  .post(
    // validatorHandler( "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const neweducationLevel = await service.create(body);
        res.json(neweducationLevel);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
