import prismaClient from '../../prisma'; // export default importa diretamente

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

        // cadastra usuário no banco de dados
        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password
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