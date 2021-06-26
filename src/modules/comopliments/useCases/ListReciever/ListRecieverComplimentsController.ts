import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListRecieverComplimentsService } from "./ListRecieverComplimentsService";

export class ListRecieverComplimentsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const listRecieverComplimentsService = container.resolve(
            ListRecieverComplimentsService
        );
        const compliments = await listRecieverComplimentsService.execute(id);
        return response.json(compliments);
    }
}
