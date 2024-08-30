import { RequestHandler } from "express";
import { z } from "zod";

const mySchema = z.object({
  image: z.string().base64(),
  customer_code: z.string(),
  measure_datetime: z.coerce.date(),
  measure_type: z.enum(["WATER", "GAS"]),
}).required();

const authUploadMiddleware: RequestHandler = (req, res, next) => {

  try {
    const parsedBody = mySchema.parse(req.body);
    req.body = parsedBody;
    next();
} catch (error) {
    console.error(error);
    res.status(400).json({ error_code: 'INVALID_DATA', error_description: error });
}
}

export default {
  authUploadMiddleware
}