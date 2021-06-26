import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

import { User } from "../../infra/entities/user";
import { UsersRepository } from "../../infra/repositories/userRepository";

@injectable()
export class ListUsersService {
    constructor(
        @inject("UsersRepository") private usersRepository: UsersRepository
    ) {}
    async execute(): Promise<User[]> {
        const Users = await this.usersRepository.list();

        return classToClass(Users);
    }
}
