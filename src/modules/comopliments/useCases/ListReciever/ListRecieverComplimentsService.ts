import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

import { Compliment } from "../../infra/entities/Compliments";
import { ComplimentsRepository } from "../../infra/repositories/ComplimentsRepository";

@injectable()
export class ListRecieverComplimentsService {
    constructor(
        @inject("ComplimentsRepository")
        private complimentsRepository: ComplimentsRepository
    ) {}
    async execute(id: string): Promise<Compliment[]> {
        return classToClass(this.complimentsRepository.listReciever(id));
    }
}
