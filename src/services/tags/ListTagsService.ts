import { classToPlain } from "class-transformer";

import { TagsRepository } from "../../repositories/TagsRepository";

export class ListTagsService {
    async execute() {
        const tagsRepository = new TagsRepository();

        const tags = await tagsRepository.list();

        return classToPlain(tags);
    }
}
