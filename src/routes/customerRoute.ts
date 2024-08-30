import { Router } from "express";
import authCostumerMiddleware from "../middleware/customerMiddleware";
import customerController from "../controller/customerController";

const customerRouter = Router();

customerRouter.get('/:id/list', authCostumerMiddleware, customerController.getCustomer);

export default customerRouter;