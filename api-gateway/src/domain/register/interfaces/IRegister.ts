import { RegisterStatus } from '../enum'

export interface IRegister {
  id: string
  start: Date
  end: Date
  status: RegisterStatus
}
