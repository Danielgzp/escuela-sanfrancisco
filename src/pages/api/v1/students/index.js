import passport from "utils/passport";

import { checkRoles } from "middlewares/auth.handler";
import nextConnect from "next-connect";
import validatorHandler from "middlewares/validator.handler";
import {
  createProductSchema,
  queryProductSchema,
} from "schemas/products.schema";

import StudentsService from "services/students.service";

const service = new StudentsService();
const handler = nextConnect();

handler
  .get(async (req, res) => {
    try {
      const students = await service.find(req.query);
      res.json(students);
    } catch (error) {
      console.log(error);
    }
  })
  .post(async (req, res) => {
    try {
      const body = req.body;
      const newStudents = await service.create(body);
      res.json(newStudents);
    } catch (error) {
      next(error);
    }
  });

export default handler;
