import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("token missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, "24e9435417039a1919f6fafcfc8ca330");

        request.user = { id: String(sub) };

        next();
    } catch (error) {
        throw new Error("invalid token");
    }
};
