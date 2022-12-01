const sqEI = require("sequelize-import-export");
const { models } = require("../../libs/sequelize");
// create a new object and pass the sequelize model(s) in array you want to export or you can also pass an object containing the models
let dbex = new sqEI(models); // or let dbex = new sqEI([db.Product, db.Stock]);

// call the export function with the path parameter to place file.

export default dbex;
