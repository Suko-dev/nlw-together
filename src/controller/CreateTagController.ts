import { Request, Response } from "express";

import { CreateTagsService } from "../services/tags/CreateTagsService";

export class CreateTagsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        const { admin } = request.user;
        const createTagService = new CreateTagsService();
        const Tag = await createTagService.execute(name, admin);
        return response.status(201).json(Tag);
    }
}
