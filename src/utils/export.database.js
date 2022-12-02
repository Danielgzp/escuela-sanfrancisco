const { config } = require("../../config/config");
const { execute } = require("@getvim/execute");

const fileName = `school_backup.sql`;

const DBPASSWORD = "postgres";
const DBNAME = "school_data";
const DBUSERNAME = "postgres";

function backup() {
  execute(
    `pg_dump -U ${DBUSERNAME} -d ${DBNAME} -f school_data_backup.sql`
  ).then(async () => {
      console.log("Finito");
    })
    .catch((err) => {
        console.log("errorsito")
      console.log(err);
    });
}

export default backup;
