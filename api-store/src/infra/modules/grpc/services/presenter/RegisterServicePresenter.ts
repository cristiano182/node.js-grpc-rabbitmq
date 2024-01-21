import { ListRegisterResponse } from "@protos/api-store"
import { IListRegisterUseCaseResponse } from "../../../../../usecases/register/ListRegister"

export default class RegisterServicePresenter {
  static toListRegisterResponse(output: IListRegisterUseCaseResponse): ListRegisterResponse {
    return new ListRegisterResponse()
      .setRegistersList(
      output.data.map(register =>
         new ListRegisterResponse()
         .addRegisters()
         .setEnd(register.end.toISOString())
         .setStart(register.start.toISOString())
         .setStatus(register.status))
      )
  }
}
