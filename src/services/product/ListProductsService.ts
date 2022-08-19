import prismaClient from '../../prisma';

interface ProductResquest {
    category_id: string;
}

class ListProductsService {
    async execute({category_id}: ProductResquest) {
        const findByCategory = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        });

        return findByCategory;
    }
}

export { ListProductsService };