import { Request, Response } from "express";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const {
      amount,
      description,
      method,
      card_number,
      card_owner_name,
      card_expiration_date,
      card_verification_code,
    } = request.body;

    const createTransactionUseCase = new CreateTransactionUseCase();

    try {
      await createTransactionUseCase.execute({
        amount,
        description,
        method,
        card_number,
        card_owner_name,
        card_expiration_date,
        card_verification_code,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateTransactionController };
