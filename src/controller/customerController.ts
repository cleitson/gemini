import { Request, Response } from 'express';
import customerService from '../service/customerService';


const getCustomer = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { measure_type } = req.query;
  const result = await customerService.getMeasuresbyCustomer(id, measure_type as string | undefined);
  res.status(200).json(result);
}

export default {
  getCustomer
}