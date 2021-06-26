import { compare } from "bcryptjs";
import { classToClass } from "class-transformer";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AuthUserDTO } from "../../dtos/AuthUserDTO";
import { User } from "../../infra/entities/user";
import { UsersRepository } from "../../infra/repositories/userRepository";

type IResponse = {
    user: User;
    token: string;
};
@injectable()
export class AuthUserService {
    constructor(
        @inject("UsersRepository") private repository: UsersRepository
    ) {}
    async execute({ email, password }: AuthUserDTO): Promise<IResponse> {
        const user = await this.repository.findByEmail(email);
        if (!user) {
            throw new Error("Email/password incorrect");
        }
        const decriptedPassword = await compare(password, user.password);
        if (!decriptedPassword) {
            throw new Error("Email/password incorrect");
        }
        const token = sign(
            { email: user.email },
            "24e9435417039a1919f6fafcfc8ca330",
            { subject: user.id, expiresIn: "1d" }
        );
        return { user: classToClass(user), token };
    }
}
