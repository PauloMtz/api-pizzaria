import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response) {
        // inicializa service
        const detailUserService = new DetailUserService();

        // executa service
        const user = await detailUserService.execute();

        return res.json(user);
    }
}

export { DetailUserController };