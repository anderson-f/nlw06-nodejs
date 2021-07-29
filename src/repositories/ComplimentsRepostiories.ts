import { Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";

@EntityRepository(Compliment)
class ComplimentsRepostiories extends Repository<Compliment> {}

export { ComplimentsRepostiories };
