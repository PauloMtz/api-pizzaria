import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

router.get('/api/teste', (req: Request, res: Response) => {
    //throw new Error('Ocorreu um erro inesperado.');
    return res.json({app_name: 'e-Pizzaria'})
})

router.post('/api/users', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/api/me', isAuthenticated, new DetailUserController().handle);

router.post('/api/categories', isAuthenticated, new CreateCategoryController().handle);
router.get('/api/categories', isAuthenticated, new ListCategoryController().handle);

export { router };