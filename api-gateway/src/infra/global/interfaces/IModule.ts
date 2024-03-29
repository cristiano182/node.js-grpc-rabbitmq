import { Container } from 'inversify'

export default class Module {
  constructor(protected container: Container) {}

  static build(_container: Container): Promise<Module> {
    throw new Error('build method not implemented.')
  }
  configurations(): Promise<void> {
    return Promise.resolve()
  }
  stop(): Promise<void> {
    throw new Error('stop method not implemented.')
  }

  start(): Promise<void> {
    throw new Error('stop method not implemented.')
  }
}
