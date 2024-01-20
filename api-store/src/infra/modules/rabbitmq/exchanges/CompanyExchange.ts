import TopicExchange from './interfaces/TopicExchange'

export default class CompanyExchange extends TopicExchange {
  constructor() {
    const exchangeName = 'company'
    super()
    this.schemas = [super.defaultTopicExchange(exchangeName)]
  }
}
