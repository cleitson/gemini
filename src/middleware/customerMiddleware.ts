import e, { RequestHandler } from "express";
import { z } from "zod";



const idSchema = z.string().min(1);
const measureTypeSchema = z.enum(['water', 'gas']);

const authCostumerMiddleware: RequestHandler = (req, res, next) => {
  const { id } = req.params;
  const measure_type = req.query.measure_type as string | undefined;

  try {
    idSchema.parse(id);
  } catch (error) {
    return res.status(400).json({
      error_code: 'INVALID_CUSTOMER',
      error_description: error
    });
  }

  try {
    if (measure_type !== undefined) {
      measureTypeSchema.parse(measure_type.toLowerCase());
    }
  } catch (error) {
    return res.status(400).json({
      error_code: 'INVALID_MEASURE_TYPE',
      error_description: error
    });
  }

  next();
};

export default authCostumerMiddleware;