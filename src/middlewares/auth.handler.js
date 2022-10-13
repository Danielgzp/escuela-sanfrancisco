const boom = require("@hapi/boom");
import { NextResponse } from "next/server";

const response = NextResponse.next();

const { config } = require("../../config/config.js");

function checkApiKey(req, res) {
  const apiKey = req.headers["api"];
  if (apiKey === config.apiKey) {
    console.log(apiKey);
    //aqui digo si la api key es igual al valor mi variable de entorno entonces esta autorizado
    //a entrar a la ruta
    console.log("Autorized");
    NextResponse.next();
  } else {
    //En caso de que no sea igual envia un mensaje de no autorizado
    console.log("No autorized");
    NextResponse.next(boom.unauthorized());
  }
}

function checkAdminRole(req, res, next) {
  const user = req.user;
  if (user.role === "admin") {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    //  const url = req.nextUrl.clone();-
    if (roles.includes(user.role)) {
      return next();
      // return NextResponse.redirect(new URL("/"));
    } else {
      throw boom.unauthorized(`Se requieren permisos de ${roles}`);
    }
  };
}

module.exports = { checkApiKey, checkAdminRole, checkRoles };
