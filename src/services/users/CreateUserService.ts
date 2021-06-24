import { hash } from "bcryptjs";

import { User } from "../../entities/user";
import { UsersRepository } from "../../repositories/userRepository";
import { CreateUserDTO } from "../dtos/createUserDTO";

export class CreateUserService {
    repository: UsersRepository;
    constructor() {
        this.repository = new UsersRepository();
    }
    async execute({
        name,
        email,
        admin,
        password,
    }: CreateUserDTO): Promise<User> {
        if (!email) {
            throw new Error("Must provide a valid e-mail");
        }
        const verifyEmail = await this.repository.findByEmail(email);

        if (verifyEmail) {
            throw new Error("User already exists");
        }
        const hashPassword = await hash(password, 8);
        return this.repository.create({
            name,
            email,
            admin,
            password: hashPassword,
        });
    }
}
