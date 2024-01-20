const TYPES = {
  Container: Symbol.for('Container'),

  // USECASES
  CreateRegister: Symbol.for('CreateRegister'),
  ListRegister: Symbol.for('ListRegister'),
  ConsumerRegister: Symbol.for('ConsumerRegister'),


  //REPOSITORIES

  // GRPC ACTIONS
  ListRegisterAction: Symbol.for('ListRegisterAction'),



  //RABBITMQ
  MessageChannel: Symbol.for('MessageChannel'),
  Producer: Symbol.for('Producer'),

  //CONTROLLERS
  CreateRegisterController: Symbol.for('CreateRegisterController'),
  ListRegisterController: Symbol.for('ListRegisterController'),



  //MODULES
  Fastify: Symbol.for('Fastify'),
  HttpModule: Symbol.for('HttpModule'),
}

export default TYPES
