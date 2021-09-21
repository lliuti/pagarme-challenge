import { Router } from "express";
import { CreateTransactionController } from "./useCases/CreateTransaction/CreateTransactionController";
import { GetAvailableBalanceController } from "./useCases/GetAvailableBalance/GetAvailableBalanceController";
import { ListPayableController } from "./useCases/ListPayable/ListPayableController";
import { ListTransactionController } from "./useCases/ListTransaction/ListTransactionController";

const routes = Router();

const createTransactionController = new CreateTransactionController();
const listTransactionController = new ListTransactionController();
const listPayableController = new ListPayableController();
const getAvailableBalanceController = new GetAvailableBalanceController();

routes.post("/transactions", createTransactionController.handle);
routes.get("/transactions", listTransactionController.handle);
routes.get("/payables", listPayableController.handle);
routes.get("/balance", getAvailableBalanceController.handle);

export { routes };
