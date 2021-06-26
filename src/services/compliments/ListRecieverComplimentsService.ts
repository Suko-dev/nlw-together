import { classToClass } from "class-transformer";

import { Compliment } from "../../entities/Compliments";
import { ComplimentsRepository } from "../../repositories/ComplimentsRepository";

export class ListRecieverComplimentsService {
    async execute(id: string): Promise<Compliment[]> {
        const complimentsRepository = new ComplimentsRepository();

        return classToClass(complimentsRepository.listReciever(id));
    }
}
