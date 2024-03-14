import passport from "passport";
import { BasicStrategy } from "passport-http";
import { Request, Response, NextFunction } from "express";

import { User, UserInstance } from "../models/User";

const notAuthorizedJSON = { status: 401, message: "Não autorizado." };

passport.use(
  new BasicStrategy(async (email, password, done) => {
    if (email && password) {
      const user = await User.findOne({ where: { email, password } });

      if (user) {
        return done(null, user);
      }
    }
    return done(notAuthorizedJSON, false);
  })
);

export const privateRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("basic", (err: Error, user: UserInstance) => {
    return user ? next() : next(notAuthorizedJSON);
  })(req, res, next);
};

export default passport;
