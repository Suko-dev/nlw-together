import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../repositories/userRepository";

export = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    const repository = new UsersRepository();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("token missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, "24e9435417039a1919f6fafcfc8ca330");
        const user = await repository.findById(sub as string);
        if (!user) {
            throw new Error("user not found");
        }
        request.user = { id: String(sub), admin: user.admin };

        next();
    } catch (error) {
        throw new Error("invalid token");
    }
};
