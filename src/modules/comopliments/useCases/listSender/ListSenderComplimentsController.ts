import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSenderComplimentsService } from "./ListSenderComplimentsService";

export class ListSenderComplimentsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const listSenderComplimentsService = container.resolve(
            ListSenderComplimentsService
        );

        const compliments = await listSenderComplimentsService.execute(id);
        return response.json(compliments);
    }
}
