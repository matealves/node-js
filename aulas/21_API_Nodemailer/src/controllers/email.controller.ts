import { Request, Response } from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
// import { email } from "../views/email";

dotenv.config();

export const contato = async (req: Request, res: Response) => {
  // 1. Configurar o transporter;
  const transport = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2. Configurar a mensagem;
  const { replyTo, subject, text, content } = req.body;

  const message = {
    from: "Alves <mateus199995@hotmail.com>",
    to: "contatomateusalves@hotmail.com",
    replyTo,
    subject,
    html: content,
    text,
  };

  // 3. Enviar a mensagem.
  const send = await transport.sendMail(message);
  console.log("send:", send);

  res.json({
    success: true,
    message: "E-mail enviado com sucesso.",
  });
};
