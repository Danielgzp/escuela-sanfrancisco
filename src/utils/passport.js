import passport from "passport";
import LocalStrategy from "./strategies/local.strategy";
import JwtStrategy from "./strategies/jwt.strategy";
//const GithubStrategy = require('./strategies/github.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
