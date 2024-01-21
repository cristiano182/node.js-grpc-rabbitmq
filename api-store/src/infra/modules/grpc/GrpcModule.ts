import { Server, ServerCredentials } from '@grpc/grpc-js'
import TYPES from '@infra/common/types/Types'
import Module from '@infra/global/interfaces/IModule'
import { RegisterServiceService } from '@protos/api-store'
import { Container, injectable } from 'inversify'
import RegisterService from './services/RegisterService'
import SECRETS from "../../server/env"

@injectable()
export default class GrpcModule extends Module {
  server: Server

  static async build(container: Container): Promise<GrpcModule> {
    const module = new GrpcModule(container)
    await module.configurations()
    return module
  }

  async configurations(): Promise<void> {
    await this.servers()
    await this.clients()
  }

  async servers(): Promise<void> {
    this.container.bind<RegisterService>(TYPES.GRPCRegisterService).to(RegisterService)
    this.server = new Server()
    this.server.addService(RegisterServiceService, this.container.get(TYPES.GRPCRegisterService))
 }

  async clients(): Promise<void> {}

  private callback = (error: Error | null, _port: number) => {
    if (error) throw error
    this.server.start()
  }

  start(): Promise<void> {
    const connectionString =  `0.0.0.0:${SECRETS.GRPC_SERVER}`
    this.server.bindAsync(connectionString, ServerCredentials.createInsecure(), this.callback)
    return {} as Promise<void>
  }

  stop(): Promise<void> {
  this.server.forceShutdown()
  return {} as Promise<void>
  }
}
