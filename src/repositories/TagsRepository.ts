import { EntityRepository, getRepository, Repository } from "typeorm";

import { Tag } from "../entities/tags";

@EntityRepository(Tag)
export class TagsRepository {
    private repository: Repository<Tag>;
    constructor() {
        this.repository = getRepository(Tag);
    }

    async create(name: string): Promise<Tag> {
        const user = this.repository.create({ name });
        await this.repository.save(user);
        return user;
    }

    async findByName(name: string): Promise<Tag | undefined> {
        return this.repository.findOne({ name });
    }
}
