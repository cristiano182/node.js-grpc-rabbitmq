import QueueWithRetryStrategy from './interfaces/RetryStrategyQueue'

export default class CreateRegisterQueue extends QueueWithRetryStrategy {
  constructor() {
    const exchange = 'company'
    const queueName = 'company.register.create'
    const bindings = [
      {
        routingKey: 'company.register.create',
        exchange,
      },
    ]
    const retryQueueMessageTTL = 1000 * 60 * 60

    super()
    this.schemas = super.createWithRetryStrategy(queueName, exchange, bindings, retryQueueMessageTTL)
  }
}
