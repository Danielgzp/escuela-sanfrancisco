import nextConnect from "next-connect";

const handler = nextConnect();

handler.get(
  // bearerHandler(),
  // passport.authenticate("jwt", { session: false }),
  // checkRoles("director"),
  async (req, res, next) => {
    res.status(200);
    // dbex
    //   .export("school_data_backup.sql")
    //   .then((path) => {
    //     console.log(`exported successfully to "${path}!"`);
    //   })
    //   .catch((err) => {
    //     console.log("got ERROR", err);
    //   });
  }
);

export default handler;
