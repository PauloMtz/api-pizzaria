import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
    async handle(req: Request, res: Response) {
        // pega o que foi enviado na request
        const { email, password } = req.body;

        // inicializa service
        const authUserService = new AuthUserService();

        // chama o método do service
        const auth = await authUserService.execute({email, password});

        return res.json(auth);
    }
}

export { AuthUserController };