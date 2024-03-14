import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

import { User, UserInstance } from "../models/User";

dotenv.config();

const notAuthoriredJSON = { status: 401, message: "Não autorizado." };

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY as string,
};

passport.use(
  new JWTStrategy(options, async (payload, done) => {
    const user = await User.findByPk(payload.id);
    return user ? done(null, user) : done(notAuthoriredJSON, false);
  })
);

export const privateRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return passport.authenticate(req, res, next)();
};

export default passport;
