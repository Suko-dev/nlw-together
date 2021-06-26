import { inject, injectable } from "tsyringe";

import { Tag } from "../../infra/entities/tags";
import { TagsRepository } from "../../infra/repositories/TagsRepository";

@injectable()
export class CreateTagsService {
    constructor(@inject("TagsRepository") private repository: TagsRepository) {}
    async execute(name: string): Promise<Tag> {
        if (!name) {
            throw new Error("Must provide a valid tag");
        }
        const verifyTag = await this.repository.findByName(name);

        if (verifyTag) {
            throw new Error("Tag already exists");
        }

        return this.repository.create(name);
    }
}
