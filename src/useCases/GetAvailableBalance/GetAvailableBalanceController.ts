import { Request, Response } from "express";
import { GetAvailableBalanceUseCase } from "./GetAvailableBalanceUseCase";

class GetAvailableBalanceController {
  async handle(request: Request, response: Response) {
    const getAvailableBalanceUseCase = new GetAvailableBalanceUseCase();
    try {
      const list = await getAvailableBalanceUseCase.execute();
      return response.status(200).json(list);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { GetAvailableBalanceController };
