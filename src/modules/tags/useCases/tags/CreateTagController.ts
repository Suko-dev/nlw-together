import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTagsService } from "./CreateTagsService";

type IRequest = { name: string };

export class CreateTagsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name }: IRequest = request.body;
        const createTagService = container.resolve(CreateTagsService);
        const Tag = await createTagService.execute(name);
        return response.status(201).json(Tag);
    }
}
