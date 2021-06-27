import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUserService {
  async execute(id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories.findOne({ id });

    return classToPlain(users);
  }
}
export { ListUserService };
