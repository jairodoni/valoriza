import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  //Receber o token
  const authToken = req.headers.authorization;

  //Validar se o token esta preenchido
  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    //Validar se token é valido
    const { sub } = verify(token, process.env.JWT_SECURET_KEY) as IPayload;

    //Recuperar informações do usuário
    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}
