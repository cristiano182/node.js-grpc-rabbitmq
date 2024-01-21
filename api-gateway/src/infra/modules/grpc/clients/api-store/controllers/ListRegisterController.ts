import { ListRegisterRequest } from '@protos/api-store'
import { IListRegisterUseCaseParams } from "../../../../../../usecases/register/ListRegister"
export default class ListRegisterController {
  static transform(params: IListRegisterUseCaseParams): ListRegisterRequest {
    const {end, start, status} = params
    return new ListRegisterRequest().setEnd(end || "" ).setStart(start || "").setStatus(status || "")
  }
}
