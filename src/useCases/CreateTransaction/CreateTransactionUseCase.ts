import { getCustomRepository } from "typeorm";
import { TransactionRepository } from "../../repositories/TransactionRepository";
import { ICreateTransactionDTO, MethodEnum } from "./ICreateTransactionDTO";
import { formatISO, addDays } from "date-fns";
import { CreatePayableUseCase } from "../CreatePayable/CreatePayableUseCase";
import { StatusEnum } from "../CreatePayable/ICreatePayableDTO";

class CreateTransactionUseCase {
  async execute({
    amount,
    description,
    method,
    card_number,
    card_owner_name,
    card_expiration_date,
    card_verification_code,
  }: ICreateTransactionDTO): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const card_parsed_number = card_number.slice(-4);

    const card_parsed_expiration_date = formatISO(
      new Date(card_expiration_date)
    );

    const transaction = transactionRepository.create({
      amount,
      description,
      method,
      card_number: card_parsed_number,
      card_owner_name,
      card_expiration_date: card_parsed_expiration_date,
      card_verification_code,
    });

    await transactionRepository.save(transaction);

    const createPayableUseCase = new CreatePayableUseCase();

    if (method === MethodEnum.debit) {
      await createPayableUseCase.execute({
        status: StatusEnum.paid,
        transaction_id: transaction.id,
        payment_date: transaction.created_at,
      });
    } else if (method === MethodEnum.credit) {
      await createPayableUseCase.execute({
        status: StatusEnum.waiting,
        transaction_id: transaction.id,
        payment_date: addDays(transaction.created_at, 30),
      });
    } else {
      throw new Error("Invalid method");
    }
  }
}

export { CreateTransactionUseCase };
