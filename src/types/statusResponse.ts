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


export type Customer = {
  measureUuid: string,
  measureDatetime: Date,
  measureType: string,
  hasConfirmed: boolean,
  imageUrl: string
}
export type MeasuresResponse = {
  customer_code: string,
  measures: Customer[],
};

export type GetMeasuresByCustomerResponse = MeasuresResponse | ResponseError;
