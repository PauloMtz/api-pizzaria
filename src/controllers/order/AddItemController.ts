import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
    async handle(req: Request, res: Response) {
        // recebe os dados do corpo da requisição
        const { order_id, product_id, amount } = req.body;

        // inicializa service
        const add = new AddItemService();

        // salva os dados recebidos na requisição
        const order = await add.addItem({order_id, product_id, amount});

        return res.json(order);
    }
}

export { AddItemController };