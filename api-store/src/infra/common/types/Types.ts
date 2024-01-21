const TYPES = {
  Container: Symbol.for('Container'),

  // USECASES
  CreateRegister: Symbol.for('CreateRegister'),
  ListRegister: Symbol.for('ListRegister'),
  CreateRegisterConsumer: Symbol.for('CreateRegisterConsumer'),


  //GRPC SERVICES
  GRPCRegisterService: Symbol.for('GRPCRegisterService'),

  //REPOSITORIES
  RegisterRepository: Symbol.for('RegisterRepository'),


  //RABBITMQ
  MessageChannel: Symbol.for('MessageChannel'),
  Producer: Symbol.for('Producer'),

  //MODULES
  TypeORMConnection: Symbol.for('TypeORMConnection'),
}

export default TYPES
