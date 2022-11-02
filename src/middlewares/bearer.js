const boom = require("@hapi/boom");

import axios from "axios";
import Cookies from "js-cookie";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJOYWlieXMiLCJyb2xlIjoiZGlyZWN0b3IiLCJpYXQiOjE2Njc0MTU1MDAsImV4cCI6MTY2ODAyMDMwMH0.meRrPZrDBiOURUb_3dVUlpvLLBZ97-avVosQasNxAi0";
function bearerHandler() {
  return (req, res, next) => {
    req.header.Authorization = req.cookies.tokenJWT;

    next();
  };
}

module.exports = bearerHandler;
