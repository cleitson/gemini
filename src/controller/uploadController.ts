import { Request, Response } from 'express';
import uploadService from '../service/uploadService';
import { StatusResponse } from '../types/statusResponse';


const uploadImage = async (req: Request, res: Response): Promise<void> => {
  console.log('upload controller',);
  const data = req.body
  const t = await uploadService.uploadImage(data);
  if (typeof t === 'object' && 'error_code' in t) {
    res.status(409).json(t);
    return
  }
  // res.status(200).json({ image_url: 'uploadImage', measure_value: 0, measure_uuid: 'uuid' });
  res.status(200).json(t);
}



export default {
  uploadImage
}