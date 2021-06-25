import { classToPlain } from "class-transformer";

import { UsersRepository } from "../../repositories/userRepository";

export class ListUsersService {
    async execute() {
        const usersRepository = new UsersRepository();

        const Users = await usersRepository.list();

        return classToPlain(Users);
    }
}
