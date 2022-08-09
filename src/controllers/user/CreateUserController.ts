import { Request, response, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response) {
        // pega o que foi enviado na requisição
        const { name, email, password } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.addUser({
            // foram pegos acima
            name,
            email,
            password
        });

        return res.json(user);
    }
}

export { CreateUserController }