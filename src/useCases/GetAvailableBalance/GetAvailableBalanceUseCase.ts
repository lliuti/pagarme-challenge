import { getCustomRepository } from "typeorm";
import { Payable } from "../../entities/Payable";
import { PayableRepository } from "../../repositories/PayableRepository";
import { TransactionRepository } from "../../repositories/TransactionRepository";

class GetAvailableBalanceUseCase {
  async execute() {
    const payableRepository = getCustomRepository(PayableRepository);
    const transactionRepository = getCustomRepository(TransactionRepository);

    var totalAmount = 0;

    const paidPayables = await payableRepository.find({
      status: "paid",
    });

    paidPayables.map(async (paidPayables) => {
      const debitTransaction = await transactionRepository.findOne({
        id: paidPayables.transaction_id,
      });

      totalAmount += debitTransaction.amount;
    });

    return totalAmount; // returns => 0
  }
}

export { GetAvailableBalanceUseCase };
