import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';

interface AuthRequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({email, password}: AuthRequest) {
        // verifica email
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if (!user) {
            throw new Error('Usuário não encontrado.');
        }

        // verifica senha
        const passwordMath = await compare(password, user.password);

        if (!passwordMath) {
            throw new Error('Usuário não encontrado.');
        }

        return {ok: true};
    }
}

export { AuthUserService };