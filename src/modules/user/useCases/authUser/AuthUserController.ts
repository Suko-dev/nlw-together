import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthUserService } from "./AuthUserService";

export class AuthUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const authUserService = container.resolve(AuthUserService);
        const token = await authUserService.execute({
            email,
            password,
        });
        return response.status(200).json(token);
    }
}
