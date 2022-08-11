import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        //console.log('>>> User ID: ', user_id);

        // inicializa service
        const detailUserService = new DetailUserService();

        // executa service
        const user = await detailUserService.execute(user_id);

        return res.json(user);
    }
}

export { DetailUserController };