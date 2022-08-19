import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
        // recebe os dados enviados no corpo da requisição
        const { name, price, description, category_id } = req.body;

        const createProductService = new CreateProductService();

        if (!req.file) {
            throw new Error('Erro ao fazer upload de arquivo.');
        } else {
            const { originalname, filename: banner } = req.file;
            const product = await createProductService.addProduct({
                name, price, description, banner, category_id
            });

            return res.json(product);
        }
    }
}

export { CreateProductController };