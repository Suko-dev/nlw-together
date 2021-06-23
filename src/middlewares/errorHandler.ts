import { Response, NextFunction, Request } from "express";

export = async (
    err: Error,
    request: Request,
    response: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
): Promise<Response> => {
    if (err instanceof Error) {
        return response.status(400).json({
            status: "fail",
            error: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        error: "internal server error",
    });
};
