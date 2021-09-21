import { getCustomRepository } from "typeorm";
import { PayableRepository } from "../../repositories/PayableRepository";

class ListPayableUseCase {
  async execute() {
    const payableRepository = getCustomRepository(PayableRepository);
    const list = await payableRepository.find();
    return list;
  }
}

export { ListPayableUseCase };
