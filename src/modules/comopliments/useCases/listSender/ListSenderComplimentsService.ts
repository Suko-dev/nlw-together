import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

import { Compliment } from "../../../infra/entities/Compliments";
import { ComplimentsRepository } from "../../../infra/repositories/ComplimentsRepository";

@injectable()
export class ListSenderComplimentsService {
    constructor(
        @inject("ComplimentsRepository")
        private complimentsRepository: ComplimentsRepository
    ) {}
    async execute(id: string): Promise<Compliment[]> {
        const compliments = this.complimentsRepository.listSender(id);
        return classToClass(compliments);
    }
}
