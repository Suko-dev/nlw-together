import { Compliment } from "../../entities/Compliments";
import { ComplimentsRepository } from "../../repositories/ComplimentsRepository";

export class ListRecieverComplimentsService {
    async execute(id: string): Promise<Compliment[]> {
        const complimentsRepository = new ComplimentsRepository();

        return complimentsRepository.listReciever(id);
    }
}
