import { NestResponse } from './nest-response';

export class NestResponseBuilder {
  private readonly response: NestResponse = {
    status: 200,
    headers: {},
    body: {},
  };

  public comStatus(status: number) {
    this.response.status = status;
    return this;
  }

  public comHeaders(headers: { [key: string]: string }) {
    this.response.headers = headers;
    return this;
  }

  public comBody(body: Object) {
    this.response.body = body;
    return this;
  }

  public build() {
    return new NestResponse(this.response);
  }
}
