import { classToClass } from "class-transformer";

import { User } from "../../entities/user";
import { UsersRepository } from "../../repositories/userRepository";

export class ListUsersService {
    async execute(): Promise<User[]> {
        const usersRepository = new UsersRepository();

        const Users = await usersRepository.list();

        return classToClass(Users);
    }
}
