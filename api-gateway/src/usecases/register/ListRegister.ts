import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { IListRegister, IRegister } from '@domain/register/interfaces'
import TYPES from '../../infra/common/types/Types'
import IUseCase from '@infra/common/interfaces/IUseCase'

import { IPagination } from '@domain/interfaces'
import RegisterClient from '../../infra/modules/grpc/clients/api-store/RegisterClient'

export type IListRegisterUseCaseParams = IListRegister
export type IListRegisterUseCaseResponse = IPagination<IRegister>

@injectable()
export default class ListRegister implements IUseCase<IListRegisterUseCaseParams, IListRegisterUseCaseResponse> {
  constructor(
    @inject(TYPES.RegisterClient) private registerClient: RegisterClient
    ) {}

  async execute(params: IListRegisterUseCaseParams): Promise<IListRegisterUseCaseResponse> {
  return this.registerClient.listRegister(params)
}
}
