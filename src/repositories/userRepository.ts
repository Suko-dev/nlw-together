import { EntityRepository, getRepository, Repository } from "typeorm";

import { User } from "../entities/user";
import { CreateUserDTO } from "../services/dtos/createUserDTO";

@EntityRepository(User)
export class UsersRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }

    async create({ email, name, admin }: CreateUserDTO): Promise<User> {
        const user = this.repository.create({ email, name, admin });
        await this.repository.save(user);
        return user;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.repository.findOne({ email });
    }
}
