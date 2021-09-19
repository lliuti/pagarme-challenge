import { getCustomRepository } from "typeorm";
import { Transaction } from "../../entities/Transaction";
import { TransactionRepository } from "../../repositories/TransactionRepository";

class ListTransactionUseCase {
  async execute(): Promise<Transaction[]> {
    const transactionRepository = getCustomRepository(TransactionRepository);
    const transactionList = await transactionRepository.find();
    return transactionList;
  }
}

export { ListTransactionUseCase };
