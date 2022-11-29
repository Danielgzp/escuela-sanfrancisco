import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import { getRecordSchema, updateRecordSchema } from "schemas/recordStudent.schema";
import RecordStudent from "services/recordStudent.service";

const service = new RecordStudent();
const handler = nextConnect();

handler
  .get(validatorHandler(getRecordSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      const recordStudent = await service.findOne(id);
      res.json(recordStudent);
    } catch (error) {
      next(error);
    }
  })
  .patch(
    validatorHandler(getRecordSchema, "params"),
    validatorHandler(updateRecordSchema, "body"),
    async (req, res, next) => {
      try {
        const { id } = req.query;
        const body = req.body;
        console.log(body);
        const recordStudent = await service.update(id, body);
        res.json(recordStudent);
      } catch (error) {
        next(error);
      }
    }
  )
  .delete(validatorHandler(getRecordSchema, "params"), async (req, res, next) => {
    try {
      const { id } = req.query;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  });

export default handler;
