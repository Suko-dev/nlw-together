import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateComplimentService } from "./CreateComplimentService";

export class CreateComplimentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { message, tagId } = request.body;
        const { recieverId } = request.params;
        const { id } = request.user;
        const createComplimentService = container.resolve(
            CreateComplimentService
        );
        const Compliment = await createComplimentService.execute({
            message,
            tagId,
            recieverId,
            senderId: id,
        });
        return response.status(201).json(Compliment);
    }
}
