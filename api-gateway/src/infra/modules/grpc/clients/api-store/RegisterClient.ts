import { inject, injectable } from 'inversify'
import TYPES from '../../../../common/types/Types'
import { promisify } from 'util'
import { ListRegisterRequest, ListRegisterResponse, RegisterServiceClient } from "@protos/api-store"

import { Rpc } from '../rpc'
import ListRegisterController from './controllers/ListRegisterController'
import ListRegisgterPresenter from './presenters/ListRegisterPresenter'
import SECRETS from "../../../../server/env"
import { IListRegisterUseCaseParams, IListRegisterUseCaseResponse } from '../../../../../usecases/register/ListRegister'

@injectable()
export default class RegisterClient extends Rpc {
  static instance = RegisterServiceClient
  static instanceName = 'RegisterServiceClient'
  static host = SECRETS.GRPC_CLIENT_API_STORE

  constructor(@inject(TYPES.RegisterServiceClient) private readonly client: RegisterServiceClient) {
  super()
  }

  async listRegister(params: IListRegisterUseCaseParams): Promise<IListRegisterUseCaseResponse> {
    const input = ListRegisterController.transform(params)
    const response = await promisify<ListRegisterRequest, ListRegisterResponse>(this.client.listRegister.bind(this.client))(input)
    return ListRegisgterPresenter.transform(response)
  }
}
