import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
    name: string;
}

class CreateOrderService {
    async addOrder({table, name}: OrderRequest) {
        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name
            }
        });

        return order;
    }
}

export { CreateOrderService };