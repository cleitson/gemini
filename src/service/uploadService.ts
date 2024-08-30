import { UploadRequest } from "../types/requestType";
import { StatusResponse } from "../types/statusResponse";
import gemini from "../gemini/gemini";
import convertImg from "../utils/convertImg";
import genUuid from "./genUuid";




const uploadImage = async (upload: UploadRequest): Promise<StatusResponse> => {
  convertImg.base64ToImage(upload.image);

  const measure_value = await gemini.runGemini(upload.image);
  

  return {
    image_url: 'http://localhost:3000/src/image/image.jpeg',
    measure_value: Number(measure_value),
    measure_uuid: genUuid.genUuid()
  };
  // return { error_code: 'error', error_description: 'Leitura do mês já realizada' };
};


export default {
  uploadImage
}