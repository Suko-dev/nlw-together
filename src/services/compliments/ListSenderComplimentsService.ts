import { Compliment } from "../../entities/Compliments";
import { ComplimentsRepository } from "../../repositories/ComplimentsRepository";

export class ListSenderComplimentsService {
    async execute(id: string): Promise<Compliment[]> {
        const complimentsRepository = new ComplimentsRepository();

        return complimentsRepository.listSender(id);
    }
}
