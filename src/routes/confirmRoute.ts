import { Router } from "express";
import authConfirmMiddleware from "../middleware/confirmMiddleware";
import confirmController from "../controller/confirmController";

const confirmRouter = Router();

confirmRouter.patch("/", authConfirmMiddleware, confirmController.confirm);

export default confirmRouter;