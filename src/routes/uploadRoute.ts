import { Router, Request, Response } from "express";
import uploadMiddleware from "../middleware/uploadMiddleware";
import uploadController from "../controller/uploadController";

const uploadRouter = Router();


uploadRouter.post("/", uploadMiddleware.authUploadMiddleware, uploadController.uploadImage);

export default uploadRouter;