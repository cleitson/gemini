export type UploadResponseOk = {
  image_url: string,
  measure_value: number,
  measure_uuid: string
} | { success: boolean };

export type ResponseError = {
  error_code: string,
  error_description: string
};

export type StatusResponse = UploadResponseOk | ResponseError;