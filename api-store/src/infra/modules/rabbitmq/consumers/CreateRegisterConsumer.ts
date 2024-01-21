import IProducer from '@infra/common/interfaces/IProducer'
import TYPES from '../../../common/types/Types'

import { inject, injectable } from 'inversify'

import MessageChannel from '../MessageChannel'
import { RetryStrategyConsumer } from './interfaces/RetryStrategyConsumer'
import CreateRegister from "../../../../usecases/register/CreateRegister"

@injectable()
export default class CreateRegisterConsumer extends RetryStrategyConsumer<any, void> {
  constructor(
    @inject(TYPES.Producer) producer: IProducer,
    @inject(TYPES.MessageChannel) messageChannel: MessageChannel,
    @inject(TYPES.CreateRegister) useCase: CreateRegister,
  ) {
    super('company.register.create', producer, messageChannel , useCase)
  }
}
