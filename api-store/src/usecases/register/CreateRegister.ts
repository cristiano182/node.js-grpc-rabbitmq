import 'reflect-metadata'
import { inject, injectable } from 'inversify'

import TYPES from '../../infra/common/types/Types'
import Register from '../../domain/register/Register'
import { ICreateRegister, IRegisterRepo } from '../../domain/register'
import IUseCase from '@infra/common/interfaces/IUseCase'

export type ICreateRegisterUseCaseParams = ICreateRegister

@injectable()
export default class CreateRegister implements IUseCase<ICreateRegisterUseCaseParams, void> {
  constructor(
    @inject(TYPES.RegisterRepository) private registerRepo: IRegisterRepo,
  ) {}

  async execute(props: ICreateRegisterUseCaseParams): Promise<void> {
    const register = Register.create(props).toJson()
    await this.registerRepo.create(register)
  }
}
