import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        // pega propriedade no corpo da requisição
        const { name } = req.body;

        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.addCategory({name});

        return res.json(category);
    }
}

export { CreateCategoryController };