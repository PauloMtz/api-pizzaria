import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";
import { ListProductsService } from "../../services/product/ListProductsService";

class ListProdustsController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const listProducts = new ListProductsService();

        const products = await listProducts.execute({category_id});

        return res.json(products);
    }
}

export { ListProdustsController };