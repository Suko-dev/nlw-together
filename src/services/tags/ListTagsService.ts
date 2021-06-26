import { classToPlain } from "class-transformer";

import { Tag } from "../../entities/tags";
import { TagsRepository } from "../../repositories/TagsRepository";

export class ListTagsService {
    async execute(): Promise<Record<string, Tag>> {
        const tagsRepository = new TagsRepository();

        const tags = await tagsRepository.list();
        return classToPlain(tags);
    }
}
