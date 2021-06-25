import { Request, Response } from "express";

import { ListSenderComplimentsService } from "../services/compliments/ListSenderComplimentsService";

export class ListSenderComplimentsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const listSenderComplimentsService = new ListSenderComplimentsService();

        const compliments = await listSenderComplimentsService.execute(id);
        return response.json(compliments);
    }
}
