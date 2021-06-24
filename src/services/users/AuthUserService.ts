import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { User } from "../../entities/user";
import { UsersRepository } from "../../repositories/userRepository";
import { AuthUserDTO } from "../dtos/AuthUserDTO";

type IResponse = {
    user: User;
    token: string;
};

export class AuthUserService {
    repository: UsersRepository;
    constructor() {
        this.repository = new UsersRepository();
    }
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
        return { user, token };
    }
}
