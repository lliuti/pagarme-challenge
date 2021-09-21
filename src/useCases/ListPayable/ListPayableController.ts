import { Request, Response } from "express";
import { ListPayableUseCase } from "./ListPayableUseCase";

class ListPayableController {
  async handle(request: Request, response: Response) {
    const listPayableUseCase = new ListPayableUseCase();

    try {
      const list = await listPayableUseCase.execute();
      return response.status(200).json(list);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListPayableController };
