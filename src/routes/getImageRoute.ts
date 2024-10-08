import { Router } from "express";
import path from 'path';

const getImageRouter = Router();

getImageRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const imagePath = path.join(__dirname, '..', 'image', id);
  res.sendFile(imagePath);
});

export default getImageRouter;