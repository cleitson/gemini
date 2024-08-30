import { Request, Response } from 'express';
import uploadService from '../service/uploadService';

const uploadImage = async (req: Request, res: Response): Promise<void> => {
  const data = req.body
  const result = await uploadService.uploadImage(data);
  if (typeof result === 'object' && 'error_code' in result) {
    res.status(409).json(result);
    return
  }
  res.status(200).json(result);
}



export default {
  uploadImage
}