import { Router, Request, Response, request } from "express";

const router = Router();

router.get('/api/teste', (req: Request, res: Response) => {
    //throw new Error('Ocorreu um erro inesperado.');
    return res.json({app_name: 'e-Pizzaria'})
})

export { router };