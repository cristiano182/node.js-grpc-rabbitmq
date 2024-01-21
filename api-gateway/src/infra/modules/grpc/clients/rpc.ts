import { Client } from '@grpc/grpc-js'


export class Rpc {
  static instance: typeof Client
  static instanceName: string
  static host: string
}
