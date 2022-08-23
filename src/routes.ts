import { Router, Request, Response } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProdustsController } from "./controllers/product/ListProdustsController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";

import uploadConfig from "./config/multerConfig";

const router = Router();

const upload = multer(uploadConfig.upload("./temp"));

router.get('/api/teste', (req: Request, res: Response) => {
    //throw new Error('Ocorreu um erro inesperado.');
    return res.json({app_name: 'e-Pizzaria'})
})

router.post('/api/users', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/api/me', isAuthenticated, new DetailUserController().handle);

router.post('/api/categories', isAuthenticated, new CreateCategoryController().handle);
router.get('/api/categories', isAuthenticated, new ListCategoryController().handle);

// esse 'file' no upload da imagem deve ser o nome do campo a ser enviada a foto
router.post('/api/products', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/api/products', isAuthenticated, new ListProdustsController().handle);

router.post('/api/orders', isAuthenticated, new CreateOrderController().handle);
router.delete('/api/orders', isAuthenticated, new RemoveOrderController().handle);

router.post('/api/orders/items', isAuthenticated, new AddItemController().handle);

export { router };