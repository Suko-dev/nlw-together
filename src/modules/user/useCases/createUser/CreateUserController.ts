import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, name, admin, password } = request.body;
        const createUserService = container.resolve(CreateUserService);
        const user = await createUserService.execute({
            name,
            email,
            admin,
            password,
        });
        return response.status(201).json(user);
    }
}
