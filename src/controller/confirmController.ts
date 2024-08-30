import { Request, Response } from 'express';
import confirmService from '../service/confirmService';

const confirm = async (req: Request, res: Response): Promise<void> => {
  const data = req.body
  const result = await confirmService.confirmValue(data);
  if (typeof result === 'object' && 'error_code' in result) {
    if (result.error_code === 'MEASURE_NOT_FOUND') {
      res.status(404).json(result);
      return
    }
    res.status(409).json(result);
    return
  }
  res.status(200).json(result);
}

export default {
  confirm
}