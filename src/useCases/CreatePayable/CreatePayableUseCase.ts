import { getCustomRepository } from "typeorm";
import { PayableRepository } from "../../repositories/PayableRepository";
import { ICreatePayableDTO } from "./ICreatePayableDTO";

class CreatePayableUseCase {
  async execute({
    status,
    transaction_id,
    payment_date,
  }: ICreatePayableDTO): Promise<void> {
    const payableRepository = getCustomRepository(PayableRepository);

    const payable = payableRepository.create({
      status,
      transaction_id,
      payment_date,
    });

    await payableRepository.save(payable);
  }
}

export { CreatePayableUseCase };
