import nextConnect from "next-connect";

import dbex from "services/export.database";

const handler = nextConnect();

handler
  .get(
    // bearerHandler(),
    // passport.authenticate("jwt", { session: false }),
    // checkRoles("director"),
    async (req, res, next) => {
      dbex
        .export("school.sql")
        .then((path) => {
          console.log(`exported successfully to "${path}!"`);
        })
        .catch((err) => {
          console.log("got ERROR", err);
        });
    }
  )
  .post(
    // passport.authenticate("jwt", { session: false }),

    async (req, res, next) => {
      try {
        const body = req.body;
        const newUser = await service.create(body);
        res.json(newUser);
      } catch (error) {
        next(error);
      }
    }
  );

export default handler;
