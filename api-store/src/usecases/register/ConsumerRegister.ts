import 'reflect-metadata'
import { inject, injectable } from 'inversify'

import TYPES from '../../infra/common/types/Types'
import Register from '../../domain/register/Register'
import { ICreateRegister, IRegisterRepo } from '../../domain/register'
import IUseCase from '@infra/common/interfaces/IUseCase'

export type IConsumerRegisterUseCaseParams = ICreateRegister

@injectable()
export default class ConsumerRegister implements IUseCase<IConsumerRegisterUseCaseParams, void> {
  constructor(
    @inject(TYPES.RegisterRepository) private registerRepo: IRegisterRepo,
  ) {}

  async execute(props: IConsumerRegisterUseCaseParams): Promise<void> {
    const register = Register.create(props).toJson()
    await this.registerRepo.create(register)
  }
}
