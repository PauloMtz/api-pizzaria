import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

router.get('/api/teste', (req: Request, res: Response) => {
    //throw new Error('Ocorreu um erro inesperado.');
    return res.json({app_name: 'e-Pizzaria'})
})

router.post('/api/users', new CreateUserController().handle);

export { router };