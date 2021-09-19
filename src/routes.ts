import { Router } from "express";
import { CreateTransactionController } from "./useCases/CreateTransaction/CreateTransactionController";
import { ListTransactionController } from "./useCases/ListTransaction/ListTransactionController";

const routes = Router();

const createTransactionController = new CreateTransactionController();
const listTransactionController = new ListTransactionController();

routes.post("/transactions", createTransactionController.handle);
routes.get("/transactions", listTransactionController.handle);

export { routes };
