import { IRegister } from '@domain/register'
import { RegisterStatus } from '@domain/register/enum'
import { ListRegisterResponse } from '@protos/api-store'
import { IListRegisterUseCaseResponse } from "../../../../../../usecases/register/ListRegister"

export default class ListRegisterPresenter {
  static transform(data: ListRegisterResponse): IListRegisterUseCaseResponse {
    const {registersList} = data.toObject(true)

    const registers: IRegister[] = registersList.map(register => {
      return {
        id: register.id,
        end:  new Date(register.end),
        start: new Date(register.start),
        status: register.status as RegisterStatus,
      }
    })

    return {
      data: registers,
      count: registers.length,
      limit: 10,
      skip: 0,
    }
  }

}
