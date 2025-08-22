import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { pt } from "yup-locale-pt";
import { TipoRequestBodyAdotante } from "../types/tiposAdotante";
import tratarErroValidacaoYup from "../utils/trataValidacaoYup";

yup.setLocale(pt);

const schemaBodyAdotante: yup.ObjectSchema<
  Omit<TipoRequestBodyAdotante, "endereco">
> = yup.object({
  nome: yup.string().defined().required(),
  celular: yup
    .string()
    .defined()
    .required()
    .matches(
      /^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/gm,
      "Número de celular inválido"
    ),
  senha: yup
    .string()
    .defined()
    .required()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
      "Senha inválida"
    ),
  foto: yup.string().optional(),
});

const middlewareValidatorBodyAdotante = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  tratarErroValidacaoYup(schemaBodyAdotante, req, res, next);
};

export { middlewareValidatorBodyAdotante };
