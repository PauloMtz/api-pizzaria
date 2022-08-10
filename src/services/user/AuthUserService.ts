import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

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

        // gerar token de acesso
        const token = sign({
            name: user.name,
            email: user.email
        }, 
            process.env.JWT_SECRET_KEY,
            {
                subject: user.id,
                expiresIn: '1d'
            }
        );

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: user.created_at,
            token: token
        };
    }
}

export { AuthUserService };