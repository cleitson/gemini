import { Router, Request, Response } from "express";
import uploadMiddleware from "../middleware/uploadMiddleware";
import uploadController from "../controller/uploadController";

const uploadRouter = Router();

uploadRouter.get("/", (req: Request, res: Response) => {
  res.send({ message: "upload" });
});
uploadRouter.post("/",uploadMiddleware.authUploadMiddleware, uploadController.uploadImage);

export default uploadRouter;