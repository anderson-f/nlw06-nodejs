import { getCustomRepository } from "typeorm";
import { ComplimentsRepostiories } from "../repositories/ComplimentsRepostiories";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complimentsRepostiories = getCustomRepository(
      ComplimentsRepostiories
    );

    const compliments = await complimentsRepostiories.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"]
    });

    return compliments;
  }
}

export { ListUserReceiveComplimentsService };
