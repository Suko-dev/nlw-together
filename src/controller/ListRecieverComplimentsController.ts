import { Request, Response } from "express";

import { ListRecieverComplimentsService } from "../services/compliments/ListRecieverComplimentsService";

export class ListRecieverComplimentsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const listRecieverComplimentsService =
            new ListRecieverComplimentsService();

        const compliments = await listRecieverComplimentsService.execute(id);
        return response.json(compliments);
    }
}
