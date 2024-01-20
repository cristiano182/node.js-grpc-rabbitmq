import IProducer from '@infra/common/interfaces/IProducer'
import IUseCase from '@infra/common/interfaces/IUseCase'
import TYPES from '../../../common/types/Types'

import { inject, injectable } from 'inversify'

import MessageChannel from '../MessageChannel'
import { RetryStrategyConsumer } from './interfaces/RetryStrategyConsumer'
//import ConsumerRegister from "../../../../usecases/register/ConsumerRegister"

@injectable()
export default class RegisterConsumer extends RetryStrategyConsumer<any, void> {
  constructor(
    @inject(TYPES.Producer) producer: IProducer,
    @inject(TYPES.MessageChannel) messageChannel: MessageChannel,
   // @inject(TYPES.ConsumerRegister) useCase: {},
  ) {
    super('company.register.create', producer, messageChannel , {} as any)
  }
}
