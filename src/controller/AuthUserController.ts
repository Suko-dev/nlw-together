import { Request, Response } from "express";

import { AuthUserService } from "../services/users/AuthUserService";

export class AuthUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const authUserService = new AuthUserService();
        const token = await authUserService.execute({
            email,
            password,
        });
        return response.status(200).json(token);
    }
}
