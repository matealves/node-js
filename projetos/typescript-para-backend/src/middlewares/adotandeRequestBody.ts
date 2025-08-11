import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { TipoRequestBodyAdotante } from "../types/tiposAdotante";

const schemaBodyAdotante: yup.ObjectSchema<
  Omit<TipoRequestBodyAdotante, "endereco">
> = yup.object({
  nome: yup.string().defined().required(),
  celular: yup.string().defined().required(),
  senha: yup
    .string()
    .defined()
    .required()
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
  foto: yup.string().optional(),
});

const middlewareValidatorBodyAdotante = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schemaBodyAdotante.validate(req.body, { abortEarly: false });
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

export { middlewareValidatorBodyAdotante };
