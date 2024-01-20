import { randomUUID } from 'crypto'
import { RegisterStatus } from './enum'
import { IRegister, ICreateRegister, IUpdateRegister } from './interfaces'

export default class Register {
  private id: string
  private start: Date
  private end: Date
  private status: RegisterStatus

  static create(data: ICreateRegister): Register {
    const entity = new Register()

    entity.id = data.id || randomUUID()
    entity.start = data.start
    entity.end = data.end
    entity.status = data.status

    return entity
  }

  update(data: IUpdateRegister): this {
    this.status = data.status || this.status
    return this
  }

  toJson(): IRegister {
    return {
      id: this.id,
      start: this.start,
      end: this.end,
      status: this.status,
    }
  }
}
