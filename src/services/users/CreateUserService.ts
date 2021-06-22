import { User } from "../../entities/user";
import { UsersRepository } from "../../repositories/userRepository";
import { CreateUserDTO } from "../dtos/createUserDTO";

export class CreateUserService {
    repository: UsersRepository;
    constructor() {
        this.repository = new UsersRepository();
    }
    async execute({ name, email, admin }: CreateUserDTO): Promise<User> {
        if (!email) {
            throw new Error("Must give a valid e-mail");
        }
        const verifyEmail = await this.repository.findByEmail(email);

        if (verifyEmail) {
            throw new Error("User already exists");
        }

        return this.repository.create({ name, email, admin });
    }
}
