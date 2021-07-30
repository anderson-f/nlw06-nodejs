import { getCustomRepository } from "typeorm";
import { ComplimentsRepostiories } from "../repositories/ComplimentsRepostiories";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentsRepostiories = getCustomRepository(
      ComplimentsRepostiories
    );

    const compliments = await complimentsRepostiories.find({
      where: {
        user_sender: user_id,
      },
    });

    return compliments;
  }
}

export { ListUserSendComplimentsService };
