import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import RecordStudent from "services/recordStudent.service";
import { createRecordSchema } from "schemas/recordStudent.schema";

const service = new RecordStudent();
const handler = nextConnect();

handler
  .get(async (req, res, next) => {
    try {
      const recordStudent = await service.find();
      res.json(recordStudent);
    } catch (error) {
      next(error);
    }
  })
  .post(
    validatorHandler(createRecordSchema, "body"),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newRecordStudent = await service.create(body);
        res.json(newRecordStudent);
      } catch (error) {
         console.log(error);
        next(error);
      }
    }
  );

export default handler;
