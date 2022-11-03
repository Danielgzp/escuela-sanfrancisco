const boom = require("@hapi/boom");

import axios from "axios";
import Cookies from "js-cookie";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJOYWlieXMiLCJyb2xlIjoiZGlyZWN0b3IiLCJpYXQiOjE2Njc0MTU1MDAsImV4cCI6MTY2ODAyMDMwMH0.meRrPZrDBiOURUb_3dVUlpvLLBZ97-avVosQasNxAi0";
function bearerHandler() {
  return (req, res, next) => {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJOYWlieXMiLCJyb2xlIjoiZGlyZWN0b3IiLCJpYXQiOjE2Njc0ODkyNTEsImV4cCI6MTY2ODA5NDA1MX0.dE_PV4nj4y9-Rv2Pg19dILLRCHaR18a6rv3fsqj6vco`;
    axios.defaults.headers.Authorization = `bearer ${token}`;

    console.log(axios.defaults.headers.Authorization);
    req.headers.Authorization = axios.defaults.headers.Authorization;
    console.log(req.headers);

    next();
  };
}

module.exports = bearerHandler;
