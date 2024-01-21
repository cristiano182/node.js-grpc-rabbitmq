import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js'
import TYPES from '@infra/common/types/Types'
import { IRegisterServiceServer, ListRegisterRequest, ListRegisterResponse } from '@protos/api-store'
import ListRegister from '@usecases/register/ListRegister'
import { inject, injectable } from 'inversify'

import RegisterServiceController from './controllers/RegisterServiceController'
import RegisterServicePresenter from './presenter/RegisterServicePresenter'

@injectable()
export default class RegisterService implements IRegisterServiceServer {
  constructor(
    @inject(TYPES.ListRegister)
    protected readonly listRegisterUsecase: ListRegister,
  ) {}

  [name: string]: UntypedHandleCall | any

  async listRegister(
    call: ServerUnaryCall<ListRegisterRequest, ListRegisterResponse>,
    callback: sendUnaryData<ListRegisterResponse>,
  ): Promise<void> {
    try {
      const input = RegisterServiceController.fromListRegisterRequest(call.request)
      const registers = await this.listRegisterUsecase.execute(input)
      const response = RegisterServicePresenter.toListRegisterResponse(registers)
      callback(null, response)
    } catch (error: unknown) {
      callback(new Error(String(error)))
    }
  }
}
