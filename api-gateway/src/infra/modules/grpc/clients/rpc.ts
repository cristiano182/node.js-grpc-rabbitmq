import grpc from '@grpc/grpc-js'


export class Rpc {
  static instance: typeof grpc.Client
  static instanceName: string
  static host: string
}
