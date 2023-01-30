export class SocketResponse {
  type: string;
  message: any;
  constructor(type:string,message:any) {
    this.type=type
    this.message=message
  }
}
