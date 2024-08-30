import { RequestHandler } from "express";
import { z } from "zod";

const mySchema = z.object({
  image: z.string().base64(),
  custumer_code: z.string(),
  measure_datetime: z.coerce.date(),
  measure_type: z.string().includes("WATER" || "GAS"),
}).required();

const authUploadMiddleware: RequestHandler = (req, res, next) => {
  console.log("upload middleware");

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