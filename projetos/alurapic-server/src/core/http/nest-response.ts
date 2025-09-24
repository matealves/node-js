export class NestResponse {
  status: number;
  headers: { [key: string]: string };
  body: Object;

  constructor(response: NestResponse) {
    // this.status = response.status;
    // this.headers = response.headers;
    // this.body = response.body;

    Object.assign(this, response);
  }
}
