import 'reflect-metadata'
import { inject, injectable } from 'inversify'

import TYPES from '../../infra/common/types/Types'
import Register from '../../domain/register/Register'
import { ICreateRegister, IRegister } from '../../domain/register'
import IUseCase from '@infra/common/interfaces/IUseCase'
import IProducer from '@infra/common/interfaces/IProducer'
import { RegisterStatus } from '@domain/register/enum'

export type ICreateRegisterUseCaseParams = ICreateRegister
export type ICreateRegisterUseCaseResponse = IRegister

@injectable()
export default class CreateRegister implements IUseCase<ICreateRegisterUseCaseParams, ICreateRegisterUseCaseResponse> {
  constructor(
    @inject(TYPES.Producer) private producer: IProducer,
  ) {}

  async execute(props: ICreateRegisterUseCaseParams): Promise<ICreateRegisterUseCaseResponse> {

    if(!props.start || !props.end) props.status = RegisterStatus.APPROVED
    props.start = new Date()
    props.end = new Date()

    const register = Register.create({ ...props}).toJson()
    this.producer.publish('company', 'company.register.create', register)
    return register
  }
}
