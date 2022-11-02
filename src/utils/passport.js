// const passport = require("passport");

// const LocalStrategy = require("./strategies/local.strategy");
// const JwtStrategy = require("./strategies/jwt.strategy");

// passport.use(LocalStrategy);
// passport.use(JwtStrategy);

const { Strategy, ExtractJwt } = require("passport-jwt");

const { config } = require("../../config/config");

const AuthService = require("../services/auth.service");

import passport from "passport";
import LocalStrategy from "passport-local";
import axios from "axios";

const service = new AuthService();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

passport.use(
  new LocalStrategy(
    {
      //esto sirve para cambiar el nombre por defecto de los campos que recibe passport.js
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        //encuentra el email a traves del metodo creado en el servicio, en este caso de AuthService
        const user = await service.getUser(email, password);

        //si cumple todo lo anterior es aceptado y devuelve el user
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(JwtStrategy);

export default passport;
