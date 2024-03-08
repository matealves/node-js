import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";

export const Auth = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    let success = false;
    const authorization = req.headers.authorization;

    // ### Codificar string para base64 (Basic Auth)
    // const encoded = Buffer.from("abc@email.com:senha").toString("base64");
    // console.log("encoded", encoded);

    if (authorization) {
      const hash: string = authorization.substring(6);
      const decoded: string = Buffer.from(hash, "base64").toString();
      const data: string[] = decoded.split(":");

      if (data.length === 2) {
        const hasUser = await User.findOne({
          where: {
            email: data[0],
            password: data[1],
          },
        });

        if (hasUser) success = true;
      }
    }

    if (success) {
      next();
    } else {
      res.status(403);
      res.json({ error: "Não autorizado." });
    }
  },
};
