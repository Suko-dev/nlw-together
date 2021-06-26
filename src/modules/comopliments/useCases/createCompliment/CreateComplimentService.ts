import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

import { TagsRepository } from "../../../../tags/infra/repositories/TagsRepository";
import { UsersRepository } from "../../../../user/infra/repositories/userRepository";
import { ICreateComplimentDto } from "../../../dtos/CreateComplimentDTO";
import { Compliment } from "../../../infra/entities/Compliments";
import { ComplimentsRepository } from "../../../infra/repositories/ComplimentsRepository";

@injectable()
export class CreateComplimentService {
    constructor(
        @inject("UsersRepository") private usersRepository: UsersRepository,
        @inject("ComplimentsRepository")
        private complimentsRepository: ComplimentsRepository,
        @inject("TagsRepository") private tagsRepository: TagsRepository
    ) {}
    async execute({
        recieverId,
        senderId,
        message,
        tagId,
    }: ICreateComplimentDto): Promise<Compliment> {
        if (recieverId === senderId) {
            throw new Error("Cant compliment yourself, dãh");
        }
        const reciever = await this.usersRepository.findById(recieverId);
        const sender = await this.usersRepository.findById(senderId);
        const tag = await this.tagsRepository.findById(tagId);
        if (!reciever) {
            throw new Error("User Not found");
        }
        if (!tag) {
            throw new Error("Tag Not found");
        }
        return classToClass(
            this.complimentsRepository.create({
                message,
                tag,
                sender,
                reciever,
            })
        );
    }
}
