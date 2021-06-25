import { Request, Response } from "express";

import { ListUsersService } from "../services/users/ListUserService";

export class ListUsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listUsersService = new ListUsersService();
        const users = await listUsersService.execute();

        return response.json(users);
    }
}
