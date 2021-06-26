import { classToClass } from "class-transformer";

import { Compliment } from "../../entities/Compliments";
import { ComplimentsRepository } from "../../repositories/ComplimentsRepository";
import { TagsRepository } from "../../repositories/TagsRepository";
import { UsersRepository } from "../../repositories/userRepository";
import { ICreateComplimentDto } from "../dtos/CreateComplimentDTO";

export class CreateComplimentService {
    complimentsRepository: ComplimentsRepository;
    usersRepository: UsersRepository;
    tagsRepository: TagsRepository;

    constructor() {
        this.complimentsRepository = new ComplimentsRepository();
        this.usersRepository = new UsersRepository();
        this.tagsRepository = new TagsRepository();
    }
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
