// import passport from "utils/passport";

// import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
// import { createRepresentantschema } from "schemas/students.schema";
import RepresentantsService from "services/representants.service";

const service = new RepresentantsService();
const handler = nextConnect();

handler
  .get(async (req, res) => {
    try {
      const representants = await service.find(req.query);
      res.json(representants);
    } catch (error) {
      console.log(error);
    }
  })
  .post(
    // validatorHandler(createRepresentantschema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newRepresentant = await service.create(body);
        res.json(newRepresentant);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
