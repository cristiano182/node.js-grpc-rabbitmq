import 'reflect-metadata'
import IoC from './IoC'
import TypeORMModule from '../modules/typeorm/TypeORMModule'
import RabbitMQModule from '../modules/rabbitmq/RabbitMQModule'
import { Container } from 'inversify'
import TYPES from '../common/types/Types'
import Module from '../global/interfaces/IModule'
import GrpcModule from '@infra/modules/grpc/GrpcModule'

const modules = async (ioc: IoC) => {
  const list: Array<typeof Module> = [TypeORMModule, GrpcModule, RabbitMQModule]
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
