import { Tag } from "../../entities/tags";
import { TagsRepository } from "../../repositories/TagsRepository";

export class CreateTagsService {
    repository: TagsRepository;
    constructor() {
        this.repository = new TagsRepository();
    }
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
