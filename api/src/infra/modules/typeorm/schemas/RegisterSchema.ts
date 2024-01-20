import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { RegisterStatus } from '../../../../domain/register/enum/index'
@Entity('register')
export default class RegisterSchema extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  start!: Date

  @Column()
  end!: Date

  @Column()
  durationMinutes!: number

  @Column()
  registerDate!: Date

  @Column()
  status!: RegisterStatus

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
