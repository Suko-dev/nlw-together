import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "../repositories/userRepository";

export = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    const repository = new UsersRepository();
    const user = await repository.findById(request.headers.id as string);
    request.user = { admin: user.admin, id: user.id };
    next();
};
