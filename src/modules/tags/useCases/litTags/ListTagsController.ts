import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTagsService } from "./ListTagsService";

export class ListTagsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listTagsService = container.resolve(ListTagsService);
        const tags = await listTagsService.execute();

        return response.json(tags);
    }
}
