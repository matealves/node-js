import { Request, Response, NextFunction } from "express";

export const Auth = {
  private: (req: Request, res: Response, next: NextFunction) => {
    // fazer verificação de auth

    const success = false;

    if (success) {
      next();
    } else {
      res.status(403); // Not Authorized
      res.json({ error: "Não autorizado." });
    }
  },
};
