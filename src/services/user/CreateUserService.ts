import prismaClient from '../../prisma'; // export default importa diretamente
import { hash } from 'bcryptjs'; // yarn add bcryptjs // yarn add @types/bcryptjs -D

interface UserRequest {
    name: string;
    email: string;
    password: string;
  }
  
class CreateUserService {
    async addUser({name, email, password}: UserRequest) {
        // verifica se o email foi enviado
        if (!email) {
            throw new Error('O e-mail deve ser informado.');
        }

        // verifica se o e-mail já existe no banco de dados
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error('O e-mail informado já existe na base de dados.');
        }

        // criptografia da senha
        const passHash = await hash(password, 8);

        // cadastra usuário no banco de dados
        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passHash
            },
            select: {
                id: true,
                email: true,
                name: true,
                created_at: true
            }
        });
  
        return user;
    }
}
  
export { CreateUserService };