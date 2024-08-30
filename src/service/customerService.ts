import { prisma } from "../database";
import { GetMeasuresByCustomerResponse, Customer } from "../types/statusResponse";

const getMeasuresbyCustomer = async (customerId: string, measure?: string ): Promise<GetMeasuresByCustomerResponse> => {

  const customerExists = await prisma.measurement.findFirst({ where: { customerCode: customerId } });

  if (!customerExists) {
    return { error_code: "INVALID_TYPE", error_description: "Customer not found" };
  } else if(measure) {
    const withMeasure = await prisma.measurement.findMany({
      where: {
        customerCode: customerId,
        measureType: measure
      },select: {measureUuid: true, measureDatetime: true, measureType: true, hasConfirmed: true, imageUrl: true}
    });
    return { customer_code: customerId, measures: withMeasure as Customer[] };
  } else {
    const withoutMeasure = await prisma.measurement.findMany({
      where: {
        customerCode: customerId
      },select: {measureUuid: true, measureDatetime: true, measureType: true, hasConfirmed: true, imageUrl: true}
    });
  
     return { customer_code: customerId, measures: withoutMeasure as Customer[] };

  }
};


export default {
  getMeasuresbyCustomer
}