const TYPES = {
  Container: Symbol.for('Container'),

  // USECASES
  CreateRegister: Symbol.for('CreateRegister'),
  ListRegister: Symbol.for('ListRegister'),
  ConsumerRegister: Symbol.for('ConsumerRegister'),


  //GRPC ACTIONS

  //REPOSITORIES
  RegisterRepository: Symbol.for('RegisterRepository'),


  //RABBITMQ
  MessageChannel: Symbol.for('MessageChannel'),
  Producer: Symbol.for('Producer'),

  //MODULES
  TypeORMConnection: Symbol.for('TypeORMConnection'),
}

export default TYPES
