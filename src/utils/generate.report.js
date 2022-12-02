import templateHeader from "./template";

const pdf = require("html-pdf");
const fs = require("fs");
// var html = fs.readFileSync("./template.html", "utf8");

const options = {
  format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
  orientation: "portrait", // portrait or landscape
};

function doPdf(component, reportName) {
  pdf.create(component, options).toFile(`./reportes/${reportName}`, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
}

export default doPdf;
