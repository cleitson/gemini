import { UploadRequest } from "../types/requestType";
import { StatusResponse } from "../types/statusResponse";
import { prisma } from "../database";

import gemini from "../gemini/gemini";
import convertImg from "../utils/convertImg";
import genUuid from "../utils/genUuid";


const urlBase = 'http://localhost:3001/';

const uploadImage = async (upload: UploadRequest): Promise<StatusResponse> => {

  const userExist = await prisma.measurement.findFirst({
    where: {
      customerCode: upload.customer_code,
      measureDatetime: upload.measure_datetime,
      measureType: upload.measure_type
    }
  });
  if (userExist) {
    return { error_code: 'DOUBLE_REPORT', error_description: 'Leitura do mês já realizada' };
  }

  const urlImg = convertImg.base64ToImage(upload.image);
  const measure_value = await gemini.runGemini(upload.image);

  const uuid = genUuid.genUuid();

  await prisma.measurement.create({
    data: {
      customerCode: upload.customer_code,
      measureDatetime: upload.measure_datetime,
      measureType: upload.measure_type,
      measureValue: Number(measure_value),
      measureUuid: uuid,
      imageUrl: `${urlBase}${urlImg}`
    }
  });

  return {
    image_url: `${urlBase}${urlImg}`,
    measure_value: Number(measure_value),
    measure_uuid: uuid
  };
};


export default {
  uploadImage
}