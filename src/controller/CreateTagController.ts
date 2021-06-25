import { Request, Response } from "express";

import { CreateTagsService } from "../services/tags/CreateTagsService";

type IRequest = { name: string };

export class CreateTagsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name }: IRequest = request.body;
        const createTagService = new CreateTagsService();
        const Tag = await createTagService.execute(name);
        return response.status(201).json(Tag);
    }
}
