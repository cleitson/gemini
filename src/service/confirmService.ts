import { ConfirmRequest } from "../types/requestType";
import { StatusResponse } from "../types/statusResponse";
import { prisma } from "../database";


const confirmValue = async (confirm: ConfirmRequest): Promise<StatusResponse> => {
  const userExist = await prisma.measurement.findFirst({
    where: {
      measureUuid: confirm.measure_uuid,
    }
  });
  if (!userExist) {
    // no arquivo de teste, o erro é 'MEASURE_NOT_FOUND' mas acho que o descripition está errado pois esta duplicado com o erro 'CONFIRMATION_DUPLICATE'
    return { error_code: 'MEASURE_NOT_FOUND', error_description: 'Leitura do mês já realizada' };
  } else if (userExist.hasConfirmed) {
    return { error_code: 'CONFIRMATION_DUPLICATE', error_description: 'Leitura do mês já realizada' };
  } else {
    await prisma.measurement.update({
      where: {
        id: userExist.id
      },
      data: {
        hasConfirmed: true,
        measureValue: confirm.confirmed_value
      }
    });
    return { success: true };
  }
}

export default {
  confirmValue
}