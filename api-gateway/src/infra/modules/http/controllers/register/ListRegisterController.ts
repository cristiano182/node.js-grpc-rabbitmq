import 'reflect-metadata'

import TYPES from '../../../../common/types/Types'
import { FastifyInstance, FastifyReply } from 'fastify'
import { inject, injectable } from 'inversify'
import { IController } from '../../../../common/interfaces/IController'
import { MyRequest } from '../../../../common/interfaces/IHttpRequest'
import { ListRegisterSchema } from './schemas/ListRegisterSchema'
import ListRegister, { IListRegisterUseCaseParams } from '@usecases/register/ListRegister'

@injectable()
export default class ListRegisterController implements IController {
  constructor(
    @inject(TYPES.ListRegister) private listRegister: ListRegister,
  ) {}

  async execute(httpInstance: any): Promise<FastifyInstance> {
    return httpInstance.get(
      '/',
      ListRegisterSchema,
      async (request: MyRequest<unknown, unknown, IListRegisterUseCaseParams>, reply: FastifyReply) => {
        const query = request.query
        const companies = await this.listRegister.execute(query)
        reply.send(companies)
      },
    )
  }
}
