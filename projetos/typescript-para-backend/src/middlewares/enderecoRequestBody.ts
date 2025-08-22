import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { pt } from "yup-locale-pt";
import EnderecoEntity from "../entities/EnderecoEntity";
import tratarErroValidacaoYup from "../utils/trataValidacaoYup";

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
  tratarErroValidacaoYup(schemaBodyEndereco, req, res, next);
};

export { middlewareValidatorBodyEndereco };
