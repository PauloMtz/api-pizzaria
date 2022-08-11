import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    /** Testa função
    console.log('Middleware chamado'); // --- se chamar somente essa linha, entra em loop
    return next(); // --- acrescentar para continuar */

    // Receber o token - vem sempre dentro do header
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    //console.log(authToken);

    // transforma em array, ignora o primeiro item, pega o que tem entre espaços
    const [, token] = authToken.split(" ")

    try {
        // valida o token - pega a chave do arquivo .env
        const { sub } = verify(token, process.env.JWT_SECRET_KEY) as Payload; // interface

        console.log('>>> ID user: ', sub);

        return next();

    } catch(err) {
        return res.status(401).end();
    }
}