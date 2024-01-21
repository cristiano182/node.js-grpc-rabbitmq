import 'reflect-metadata'
import HttpModule from '../modules/http/HttpModule'
import IoC from './IoC'
import RabbitMQModule from '../modules/rabbitmq/RabbitMQModule'
import { Container } from 'inversify'
import TYPES from '../common/types/Types'
import Module from '../global/interfaces/IModule'
import GrpcModule from '@infra/modules/grpc/GrpcModule'

const modules = async (ioc: IoC) => {
  const list: Array<typeof Module> = [GrpcModule, RabbitMQModule, HttpModule]
  for (const module of list) {
    const instance = await module.build(ioc.getContainer())
    await instance.start()
  }
}

async function run(): Promise<void> {
  const ioc = new IoC()
  await ioc.build()
  const container = ioc.getContainer()
  container.bind<Container>(TYPES.Container).toConstantValue(container)
  await modules(ioc)
}

;(async () => {
  await run()
})()
