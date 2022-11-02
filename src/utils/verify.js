const { verify } = require("jsonwebtoken");

export const verifyToken = async (cookie, secret) => {
  return await verify(cookie, new TextEncoder().encode(secret));
};
