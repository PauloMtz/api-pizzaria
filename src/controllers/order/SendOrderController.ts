import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController {
    async handle(req: Request, res: Response) {
        // pega propriedade no corpo da requisição
        const { order_id } = req.body;

        // inicializa service
        const snedOrder = new SendOrderService();

        // envia os dados para o banco
        const order = await snedOrder.execute({order_id});

        return res.json(order);
    }
}

export { SendOrderController };