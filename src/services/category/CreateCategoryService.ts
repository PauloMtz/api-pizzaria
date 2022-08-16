import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string;
}

class CreateCategoryService {
    async addCategory({name}: CategoryRequest) {
        if (name === '') {
            throw new Error('O campo nome deve ser preenchido.');
        }

        const category = await prismaClient.category.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true
            }
        });

        return category;
    }
}

export { CreateCategoryService };