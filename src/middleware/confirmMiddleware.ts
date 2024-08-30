import { RequestHandler } from "express";
import { z } from "zod";

const mySchema = z.object({
  measure_uuid: z.string().uuid(),
  confirmed_value: z.number().int(),

}).required();


const authConfirmMiddleware: RequestHandler = (req, res, next) => {

  try {
    const parsedBody = mySchema.parse(req.body);
    req.body = parsedBody;
    next();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error_code: 'INVALID_DATA', error_description: error });
  }
}

export default authConfirmMiddleware;
