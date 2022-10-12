const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");
import { config } from "../../config/config";

const UserService = require("./users.service");
const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);

    if (!user) {
      throw boom.unauthorized();
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw boom.unauthorized();
    }

    delete user.dataValues.password;

    delete user.dataValues.recoveryToken;

    return user;
  }

  signToken(user) {
    const jwtConfig = {
      expiresIn: "7d",
    };

    const payload = {
      sub: user.id,
      role: user.role,
    };

    const token = jwt.sign(payload, config.jwtSecret, jwtConfig);

    return {
      user,
      token,
    };
  }
}

module.exports = AuthService;
