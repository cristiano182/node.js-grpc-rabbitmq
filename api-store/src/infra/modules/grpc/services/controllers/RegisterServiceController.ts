import { RegisterStatus } from '@domain/register/enum'
import { ListRegisterRequest } from '@protos/api-store'
import { IListRegisterUseCaseParams } from "../../../../../usecases/register/ListRegister"

export default class RegisterServiceController {
  static fromListRegisterRequest(data: ListRegisterRequest): IListRegisterUseCaseParams {
      const { start, end, status } = data.toObject()
      return {
        start,
        end,
        status: status as RegisterStatus,
      }
  }
}
