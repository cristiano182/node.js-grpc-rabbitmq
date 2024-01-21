import * as grpc from '@grpc/grpc-js'
import Module from '@infra/global/interfaces/IModule'
import { Container, injectable } from 'inversify'
import readFilesFromPath from '@infra/utils/path'

@injectable()
export default class GrpcModule extends Module {

  static async build(container: Container): Promise<GrpcModule> {
    const module = new GrpcModule(container)
    await module.configurations()
    return module
  }

  async configurations(): Promise<void> {
    await this.servers()
    await this.clients()
  }

  async servers(): Promise<void> {}

  async clients(): Promise<void> {
  const clients = await readFilesFromPath<any>([__dirname, 'clients/', '*', '*Client.(t|j)s'])
   const credential = grpc.credentials.createInsecure()
    for (const { file: client } of clients) {
    if (!client) continue
      const { instance, instanceName, host, name } = client
      this.container.bind(Symbol.for(instanceName)).toConstantValue(new instance(host, credential))
      this.container.bind(Symbol.for(name)).to(client)
    }
  }
  start(): Promise<void> {
  return {} as Promise<void>
  }

  stop(): Promise<void> {
  return {} as Promise<void>
  }
}
