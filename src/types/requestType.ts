export type UploadRequest = {
  image: string,
  customer_code: string,
  measure_datetime: Date,
  measure_type: string
};

export type ConfirmRequest = {
  measure_uuid: string,
  confirmed_value: number
};

export type CustumerListRequest = {
  customer_code: string
  measure_type?: string
};