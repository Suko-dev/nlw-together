import { EntityRepository, getRepository, Repository } from "typeorm";

import { CreateUserDTO } from "../../dtos/createUserDTO";
import { User } from "../entities/user";

@EntityRepository(User)
export class UsersRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        email,
        name,
        admin,
        password,
    }: CreateUserDTO): Promise<User> {
        const user = this.repository.create({ email, name, admin, password });
        await this.repository.save(user);
        return user;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.repository.findOne({ email });
    }

    async findById(id: string): Promise<User> {
        return this.repository.findOneOrFail({ id });
    }

    async list(): Promise<User[]> {
        return this.repository.find();
    }
}
