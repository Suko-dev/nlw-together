import { classToPlain } from "class-transformer";
import { inject, injectable } from "tsyringe";

import { Tag } from "../../infra/entities/tags";
import { TagsRepository } from "../../infra/repositories/TagsRepository";

@injectable()
export class ListTagsService {
    constructor(
        @inject("TagsRepository") private tagsRepository: TagsRepository
    ) {}
    async execute(): Promise<Record<string, Tag>> {
        const tags = await this.tagsRepository.list();
        return classToPlain(tags);
    }
}
