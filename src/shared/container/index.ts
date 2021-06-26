import { container } from "tsyringe";

import { ComplimentsRepository } from "../../modules/comopliments/infra/repositories/ComplimentsRepository";
import { TagsRepository } from "../../modules/tags/infra/repositories/TagsRepository";
import { UsersRepository } from "../../modules/user/infra/repositories/userRepository";

container.registerSingleton<UsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<TagsRepository>("TagsRepository", TagsRepository);

container.registerSingleton<ComplimentsRepository>(
    "ComplimentsRepository",
    ComplimentsRepository
);
