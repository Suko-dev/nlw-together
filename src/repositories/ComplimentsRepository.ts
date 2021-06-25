import { EntityRepository, getRepository, Repository } from "typeorm";

import { Compliment } from "../entities/Compliments";
import { Tag } from "../entities/tags";
import { User } from "../entities/user";

type ICreateComplimentDto = {
    sender: User;
    message: string;
    tag: Tag;
    reciever: User;
};

@EntityRepository(Compliment)
export class ComplimentsRepository {
    private repository: Repository<Compliment>;
    constructor() {
        this.repository = getRepository(Compliment);
    }

    async create({
        sender,
        message,
        tag,
        reciever,
    }: ICreateComplimentDto): Promise<Compliment> {
        const compliment = this.repository.create({
            message,
            sender,
            reciever,
            tag,
        });
        await this.repository.save(compliment);
        return compliment;
    }

    async listReciever(id: string): Promise<Compliment[]> {
        return this.repository.find({
            where: { reciever: id },
            relations: ["tag", "sender", "reciever"],
        });
    }

    async listSender(id: string): Promise<Compliment[]> {
        return this.repository.find({
            where: { sender: id },
            relations: ["tag", "sender", "reciever"],
        });
    }
}
