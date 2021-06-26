import { Response, NextFunction, Request } from "express";

import { UsersRepository } from "../../../modules/user/infra/repositories/userRepository";

export = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    const { id } = request.user;
    const userRepository = new UsersRepository();
    const user = await userRepository.findById(id);
    if (!user.admin) {
        throw new Error("user must be admin");
    }
    next();
};
