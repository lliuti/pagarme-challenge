import { EntityRepository, Repository } from "typeorm";
import { Payable } from "../entities/Payable";

@EntityRepository(Payable)
class PayableRepository extends Repository<Payable> {}

export { PayableRepository };
