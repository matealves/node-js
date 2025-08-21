import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { pt } from "yup-locale-pt";
import EnderecoEntity from "../entities/EnderecoEntity";

yup.setLocale(pt);

const schemaBodyEndereco: yup.ObjectSchema<Omit<EnderecoEntity, "id">> =
  yup.object({
    cidade: yup.string().defined().required(),
    estado: yup.string().defined().required(),
  });

const middlewareValidatorBodyEndereco = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schemaBodyEndereco.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    const yupErros = error as yup.ValidationError;

    const validationErros: Record<string, string> = {};

    yupErros.inner.forEach((error) => {
      if (!error.path) return;
      validationErros[error.path] = error.message;
    });

    return res.status(400).json({ error: validationErros });
  }
};

export { middlewareValidatorBodyEndereco };
