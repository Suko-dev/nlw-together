import { Request, Response } from "express";

import { CreateComplimentService } from "../services/compliments/CreateComplimentService";

export class CreateComplimentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { message, tagId, recieverId } = request.body;
        const { id } = request.user;
        const createComplimentService = new CreateComplimentService();
        const Compliment = await createComplimentService.execute({
            message,
            tagId,
            recieverId,
            senderId: id,
        });
        return response.status(201).json(Compliment);
    }
}
