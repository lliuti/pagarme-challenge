import { Request, Response } from "express";
import { ListTransactionUseCase } from "./ListTransactionUseCase";

class ListTransactionController {
  async handle(request: Request, response: Response) {
    const listTransactionUseCase = new ListTransactionUseCase();
    try {
      const list = await listTransactionUseCase.execute();
      return response.status(200).json(list);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListTransactionController };
